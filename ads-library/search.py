import argparse
import os
import sys
from pathlib import Path

import pandas as pd
from dotenv import load_dotenv

from ad_library import MetaAdLibrary

ROOT = Path(__file__).parent
DEFAULT_KEYWORDS = ROOT / "keywords.txt"
DEFAULT_OUTPUT_DIR = ROOT / "output"


def load_keywords(path: Path) -> list[str]:
    lines = path.read_text(encoding="utf-8").splitlines()
    return [l.strip() for l in lines if l.strip() and not l.lstrip().startswith("#")]


def page_runs_in_country(api: MetaAdLibrary, page_id: str, country: str) -> bool:
    for _ in api.search(countries=[country], page_ids=[page_id], limit=10, max_pages=1):
        return True
    return False


def first_or_empty(value) -> str:
    if isinstance(value, list) and value:
        return str(value[0])
    return ""


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Busca anuncios en paises fuente que NO corren en el pais destino."
    )
    parser.add_argument(
        "--source-countries",
        nargs="+",
        default=["US", "ES", "MX", "BR"],
        help="Codigos ISO de paises donde buscar productos.",
    )
    parser.add_argument(
        "--target-country",
        default="AR",
        help="Pais a validar como gap (default: AR).",
    )
    parser.add_argument(
        "--keywords-file",
        default=str(DEFAULT_KEYWORDS),
        help="Archivo con palabras clave, una por linea.",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=3,
        help="Paginas de resultados por keyword (cada pagina ~100 anuncios).",
    )
    parser.add_argument(
        "--include-inactive",
        action="store_true",
        help="Incluir anuncios inactivos (default: solo activos).",
    )
    parser.add_argument(
        "--output",
        default="candidates.csv",
        help="Nombre del archivo CSV de salida.",
    )
    args = parser.parse_args()

    load_dotenv(ROOT / ".env")
    token = os.environ.get("META_AD_LIBRARY_TOKEN")
    if not token:
        print("ERROR: definir META_AD_LIBRARY_TOKEN en .env", file=sys.stderr)
        return 1

    keywords = load_keywords(Path(args.keywords_file))
    if not keywords:
        print("ERROR: keywords.txt vacio", file=sys.stderr)
        return 1

    api = MetaAdLibrary(token)
    DEFAULT_OUTPUT_DIR.mkdir(exist_ok=True)

    rows: list[dict] = []
    page_in_target: dict[str, bool] = {}

    for country in args.source_countries:
        for kw in keywords:
            print(f"[{country}] {kw!r}", flush=True)
            try:
                ads = list(
                    api.search(
                        countries=[country],
                        search_terms=kw,
                        active_only=not args.include_inactive,
                        max_pages=args.max_pages,
                    )
                )
            except RuntimeError as e:
                print(f"  ! {e}", file=sys.stderr)
                continue

            for ad in ads:
                page_id = ad.get("page_id")
                if not page_id:
                    continue
                # Cache por pagina: si esa marca ya corre en AR, descartamos.
                if page_id not in page_in_target:
                    try:
                        page_in_target[page_id] = page_runs_in_country(
                            api, page_id, args.target_country
                        )
                    except RuntimeError as e:
                        print(f"  ! check {page_id}: {e}", file=sys.stderr)
                        page_in_target[page_id] = True
                if page_in_target[page_id]:
                    continue

                rows.append(
                    {
                        "page_id": page_id,
                        "page_name": ad.get("page_name", ""),
                        "source_country": country,
                        "keyword": kw,
                        "ad_id": ad.get("id", ""),
                        "start": ad.get("ad_delivery_start_time", ""),
                        "stop": ad.get("ad_delivery_stop_time", ""),
                        "snapshot_url": ad.get("ad_snapshot_url", ""),
                        "body": first_or_empty(ad.get("ad_creative_bodies"))[:500],
                        "link_title": first_or_empty(ad.get("ad_creative_link_titles")),
                        "link_caption": first_or_empty(ad.get("ad_creative_link_captions")),
                        "platforms": ",".join(ad.get("publisher_platforms") or []),
                        "languages": ",".join(ad.get("languages") or []),
                    }
                )

    if not rows:
        print("\nSin candidatos. Probar mas keywords, max-pages mayor o --include-inactive.")
        return 0

    df = pd.DataFrame(rows).drop_duplicates(subset=["ad_id"])
    df = df.sort_values("start", ascending=False)
    out_path = DEFAULT_OUTPUT_DIR / args.output
    df.to_csv(out_path, index=False)

    print(f"\n{len(df)} anuncios candidatos -> {out_path}")
    print(f"{df['page_id'].nunique()} marcas distintas")
    print("\nTop 20 marcas con mas anuncios fuera de", args.target_country + ":")
    print(df["page_name"].value_counts().head(20).to_string())
    return 0


if __name__ == "__main__":
    sys.exit(main())
