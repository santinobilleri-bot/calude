#!/usr/bin/env node
/**
 * Generates the 5 Shopify product images for CLARÉ — Sistema 5x
 * using Google Gemini 2.5 Flash Image (Nano Banana).
 *
 * Reads GEMINI_API_KEY from env, or falls back to ~/.claude.json
 * (where it's stored as part of the nano-banana MCP config).
 *
 * Usage: node scripts/generate-clare-images.mjs [--only=1,3]
 */

import { GoogleGenAI } from "/home/user/calude/Nano-Banana-MCP-main/node_modules/@google/genai/dist/node/index.mjs";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";

const OUT_DIR = "/home/user/calude/brand/images";
const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-3-pro-image-preview";

async function loadApiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  const cfgPath = join(homedir(), ".claude.json");
  const cfg = JSON.parse(await readFile(cfgPath, "utf8"));
  const fromUser = cfg?.mcpServers?.["nano-banana"]?.env?.GEMINI_API_KEY;
  if (fromUser) return fromUser;
  for (const proj of Object.values(cfg?.projects ?? {})) {
    const k = proj?.mcpServers?.["nano-banana"]?.env?.GEMINI_API_KEY;
    if (k) return k;
  }
  throw new Error("GEMINI_API_KEY not found in env or ~/.claude.json");
}

const SHARED_BRAND =
  "Brand: CLARÉ — premium Argentine skincare. " +
  "Visual identity: warm cream (#F5EFE6) + warm earthy brown (#7B5E3C) + carbon black (#1A1A1A) + champagne gold (#D4A574). " +
  "Mood: editorial, calm, premium-but-warm — feels like a 38-year-old woman's bathroom on a Sunday morning. " +
  "Avoid: stock photo cliches, perfect 22-year-old models, heavy retouching, oversaturated colors, plastic-looking skin, before/after gimmicks. " +
  "Embrace: real skin texture (visible pores, fine vellus hair), natural daylight or warm lamp light, soft shadows, slight imperfection. " +
  "Photography style reference: Kinfolk magazine, Aesop campaigns, editorial skincare like Augustinus Bader.";

const PRODUCT_DESC =
  "PRODUCT to render consistently across all images: a small amber glass jar (about 5cm tall, 50ml) " +
  "with a matte black metal screw-top lid. The jar has a minimal off-white matte paper label wrapping the front. " +
  "On the label, the brand wordmark 'CLARÉ' is centered in elegant serif typography (warm brown #7B5E3C, with a visible acute accent on the É). " +
  "Below the wordmark, smaller text reads 'SISTEMA 5x'. " +
  "On the lower portion of the label there is a small champagne-gold circular foil badge (about 1.5cm diameter) " +
  "containing the text '5% TRX · 5% AZE · 3% GLY' arranged in three short lines, in a clean monospace font (dark text on gold). " +
  "The amber glass has a soft warm honey color when light passes through.";

const IMAGES = [
  {
    n: 1,
    name: "01-hero-marble.png",
    role: "HERO — main product page image",
    prompt: `Editorial product photography. ${PRODUCT_DESC}
Scene: the jar sits centered on a white Carrara marble countertop. To the side, slightly out of focus: a small ceramic cup of black coffee, a single fresh eucalyptus sprig, and a folded oatmeal-linen towel. Background fades into soft warm cream gradient.
Camera: shot at ~25 degrees from above, eye level on the product, 85mm lens feel, shallow depth of field.
Lighting: soft morning light coming from a window on the upper left, gentle directional shadow falling to the right, warm golden hour color temperature.
Composition: jar takes ~40% of frame, centered slightly left of center for rule-of-thirds. Plenty of negative space around it for Shopify zoom and text overlay.
Aspect ratio: 1:1 square.
${SHARED_BRAND}
Final feel: someone holds a small object that knows exactly what it is doing. Premium without shouting.`,
  },
  {
    n: 2,
    name: "02-night-ritual.png",
    role: "LIFESTYLE — night ritual, emotional connection",
    prompt: `Intimate lifestyle photography. ${PRODUCT_DESC}
Scene: a 38-year-old Latin American woman with shoulder-length dark wavy hair, in a soft cream silk robe, standing in front of a softly-lit bathroom mirror. She is looking down at her own hands, where she has just opened the CLARÉ jar — the matte black lid rests on the marble counter beside the open jar. Her index finger has a small pearl of off-white cream on it, ready to apply. Her face shows quiet focus, a small private smile. She is not posing for camera.
Camera: medium close-up from a 3/4 angle, capturing her hands, the open jar, and her face from the cheekbones down softly out of focus. Shot at f/2.0 feel.
Lighting: warm tungsten lamp from the side mixed with cool ambient bathroom light, creating a cinematic two-tone glow. Her skin shows real texture — fine pores visible, slight uneven tone on the cheekbone (subtle melasma authenticity), no heavy makeup.
Composition: vertical, the hands and open jar are the hero, her face provides emotional anchor in the upper third.
Aspect ratio: 4:5 portrait.
${SHARED_BRAND}
Final feel: this is HER moment, after the kids are asleep. She is choosing herself.`,
  },
  {
    n: 3,
    name: "03-texture-macro.png",
    role: "TEXTURE — macro shot for quality signal",
    prompt: `Hyper-detailed macro photography of the CLARÉ cream texture itself. No jar visible.
Scene: a small generous swirl of soft off-white cream (with the very slightest warm ivory undertone, mostly matte but with subtle silky sheen) sitting on the back of a real human hand. The hand belongs to a woman around 38, with healthy but real skin: fine vellus hair catching light, visible pores, a faint freckle, slightly raised veins running underneath, no nail polish, short clean nails. The cream has been just placed and not yet rubbed in — you can see its rich, buttery, slightly glossy peaks where it was scooped.
Camera: extreme macro, about 5cm from subject, top-down at slight angle, razor-thin depth of field with cream and one section of hand in tack focus.
Lighting: single soft north-facing window light from above-left, creating delicate specular highlight on cream and gentle shadow definition on the texture.
Composition: cream takes center, surrounding hand fills frame edges in soft falloff.
Aspect ratio: 1:1 square.
${SHARED_BRAND}
Avoid: overly glossy or wet-looking cream, plastic skin, airbrushed perfection, pure white background.
Final feel: rich, buttery, expensive — the kind of texture that justifies the price.`,
  },
  {
    n: 4,
    name: "04-ingredients-flatlay.png",
    role: "INGREDIENTS — flat lay communicating Sistema 5x",
    prompt: `Editorial overhead flat-lay product photography. ${PRODUCT_DESC}
Scene: the jar sits at the geometric center of a soft warm cream linen surface (#F5EFE6 to slightly warmer tone). Arranged loosely around the jar in an organic, slightly imperfect ring: a small cluster of fresh dark mulberries with a green leaf, two slices of dried licorice root (twisted brown sticks), a single fresh eucalyptus sprig, three small whole turmeric-yellow kojic crystals on a tiny piece of parchment, and a halved fresh lemon showing its juicy interior (for vitamin C reference). Each element is placed with intentional negative space — nothing crowded.
Camera: perfectly top-down 90-degree overhead shot, slightly wide framing.
Lighting: soft diffused daylight from a large window, casting gentle directional shadows that all fall to the lower right at the same angle.
Composition: jar centered. Ingredients arranged in a flowing arc that suggests "five elements working together" without being a literal pentagon.
Aspect ratio: 4:5 portrait.
${SHARED_BRAND}
Final feel: a private apothecary moment. Five real ingredients, one finished product, no marketing chaos.`,
  },
  {
    n: 5,
    name: "05-result-mirror.png",
    role: "TRANSFORMATION — lived-in result, no before/after",
    prompt: `Documentary-style portrait, no product visible.
Scene: a 38-year-old Latin American woman with shoulder-length dark wavy hair stands in front of a bathroom mirror in soft warm morning light. She is wearing a simple cream linen pajama shirt. Her face is bare — no makeup at all. Her skin is healthy and even-toned: subtle natural luminosity, small visible pores, very faint freckling across the nose, no obvious dark spots, no melasma, but importantly NOT airbrushed-perfect. She has fine expression lines around her eyes that read as 'lived-in', not erased. She is looking at her own reflection with a small private smile — the smile of someone who recognizes herself again. One hand is resting on the marble counter; the other is at her collarbone.
Camera: shot from slightly behind her at 3/4 angle so we see both her real face and the reflection. ~50mm feel, f/2.8.
Lighting: cool soft daylight from a frosted bathroom window mixed with very warm ambient — creates the natural skin-flattering color of '8am bathroom'.
Composition: vertical. Her face/reflection occupies right two-thirds, mirror frame and bathroom edge soft on the left. Top of head can crop slightly.
Aspect ratio: 4:5 portrait.
${SHARED_BRAND}
Avoid: glamour shot energy, fashion-magazine pose, perfect plastic skin, model-y youthful glow. We want a real 38-year-old who looks RESTED, not 25.
Final feel: she sees herself and thinks 'volví'. That's the whole image.`,
  },
];

async function generateOne(ai, img) {
  console.log(`\n→ [${img.n}/5] Generating: ${img.name}  (${img.role})`);
  const t0 = Date.now();
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: img.prompt,
  });
  const parts = response?.candidates?.[0]?.content?.parts ?? [];
  let saved = false;
  let textOut = "";
  for (const part of parts) {
    if (part.text) textOut += part.text;
    if (part.inlineData?.data) {
      const buf = Buffer.from(part.inlineData.data, "base64");
      const out = join(OUT_DIR, img.name);
      await writeFile(out, buf);
      const kb = (buf.length / 1024).toFixed(1);
      console.log(`  ✓ Saved ${out}  (${kb} KB, ${((Date.now() - t0) / 1000).toFixed(1)}s)`);
      saved = true;
    }
  }
  if (!saved) {
    console.error(`  ✗ No image returned for ${img.name}. Text response: ${textOut.slice(0, 300)}`);
    return false;
  }
  return true;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const apiKey = await loadApiKey();
  const ai = new GoogleGenAI({ apiKey });

  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const onlySet = onlyArg
    ? new Set(onlyArg.split("=")[1].split(",").map((n) => parseInt(n, 10)))
    : null;

  const targets = IMAGES.filter((i) => !onlySet || onlySet.has(i.n));
  console.log(`Generating ${targets.length} image(s) into ${OUT_DIR}`);

  const results = [];
  for (const img of targets) {
    try {
      const ok = await generateOne(ai, img);
      results.push({ n: img.n, name: img.name, ok });
    } catch (err) {
      console.error(`  ✗ Error on ${img.name}: ${err?.message || err}`);
      results.push({ n: img.n, name: img.name, ok: false, error: String(err?.message || err) });
    }
  }

  console.log("\n=== Summary ===");
  for (const r of results) console.log(`  ${r.ok ? "✓" : "✗"} ${r.n}. ${r.name}${r.error ? "  — " + r.error : ""}`);
  const failed = results.filter((r) => !r.ok).length;
  if (failed > 0) process.exit(1);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
