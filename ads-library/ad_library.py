import json
import time
import requests
from typing import Iterator, Optional

API_BASE = "https://graph.facebook.com/v22.0/ads_archive"

FIELDS = [
    "id",
    "page_id",
    "page_name",
    "ad_creative_bodies",
    "ad_creative_link_titles",
    "ad_creative_link_descriptions",
    "ad_creative_link_captions",
    "ad_delivery_start_time",
    "ad_delivery_stop_time",
    "ad_snapshot_url",
    "publisher_platforms",
    "languages",
]


class MetaAdLibrary:
    def __init__(self, token: str):
        self.token = token
        self.session = requests.Session()

    def search(
        self,
        countries: list[str],
        search_terms: Optional[str] = None,
        page_ids: Optional[list[str]] = None,
        active_only: bool = True,
        limit: int = 100,
        max_pages: int = 5,
    ) -> Iterator[dict]:
        params: Optional[dict] = {
            "access_token": self.token,
            "ad_reached_countries": json.dumps(countries),
            "ad_type": "ALL",
            "ad_active_status": "ACTIVE" if active_only else "ALL",
            "fields": ",".join(FIELDS),
            "limit": limit,
        }
        if search_terms:
            params["search_terms"] = search_terms
        if page_ids:
            params["search_page_ids"] = json.dumps(page_ids)

        url = API_BASE
        for _ in range(max_pages):
            resp = self.session.get(url, params=params, timeout=30)
            if resp.status_code == 429:
                time.sleep(60)
                continue
            if resp.status_code >= 400:
                raise RuntimeError(f"API {resp.status_code}: {resp.text[:400]}")
            data = resp.json()
            yield from data.get("data", [])
            next_url = data.get("paging", {}).get("next")
            if not next_url:
                return
            # Cursor URL ya viene firmada con access_token; no reenviar params.
            url = next_url
            params = None
