# CLARÉ — Sistema 5x · Pack de prompts para imágenes de Shopify

**5 imágenes calibradas a Florencia (buyer persona) y a la identidad visual de CLARÉ.**
Pegá cada prompt en el motor que prefieras. Para cada una te doy:
- Versión **ChatGPT 4o / DALL·E 3 / Gemini** (lenguaje natural)
- Versión **Midjourney v6** (con parámetros)
- **Qué NO debe aparecer** (negative prompt)
- Dónde va en tu página de Shopify

---

## Recomendación de motor por imagen

| Imagen | Mejor motor | Por qué |
|---|---|---|
| 1. Hero | **ChatGPT 4o** o **Gemini en aistudio.google.com** (free) | Mejor renderizado de texto en label del frasco |
| 2. Ritual nocturno | **Midjourney v6** | Mejor piel real y luz cinematográfica |
| 3. Macro textura | **Midjourney v6** | Mejor detalle de macro y texturas |
| 4. Flat lay ingredientes | **ChatGPT 4o** | Mejor composición de objetos múltiples |
| 5. Espejo/resultado | **Midjourney v6** | Mejor capturar mujer real 38 años no-modelo |

**Truco gratis**: Gemini en https://aistudio.google.com/ (el sitio web, no la API) te deja generar imágenes gratis con el modelo `gemini-2.5-flash-image` — lo mismo que costaría plata vía API.

---

## Identidad visual de marca (NO la borres del prompt)

```
Brand: CLARÉ — premium Argentine skincare.
Palette: warm cream #F5EFE6, warm earthy brown #7B5E3C,
         carbon black #1A1A1A, champagne gold #D4A574.
Mood: editorial, calm, premium-but-warm.
Reference style: Kinfolk magazine, Aesop campaigns, Augustinus Bader.
```

## Descripción del producto (consistencia entre las 5 imágenes)

```
A small amber glass jar (about 5cm tall, 50ml) with a matte black metal
screw-top lid. Off-white matte paper label. The wordmark "CLARÉ" centered
in elegant serif typography (warm brown #7B5E3C, visible acute accent
on the É). Below: "SISTEMA 5x" in smaller text. A small champagne-gold
circular foil badge on the lower part of the label reads "5% TRX · 5% AZE
· 3% GLY" in three short monospace lines.
```

---

## IMAGEN 1 — HERO (frasco sobre mármol)

**Rol en Shopify:** primera imagen de la galería del producto. La que para el scroll.
**Dimensiones recomendadas:** 2048×2048 px (1:1) — Shopify scalea bien hasta zoom.

### Prompt para ChatGPT 4o / DALL·E 3 / Gemini

```
Editorial product photography. A small amber glass jar (about 5cm tall, 50ml)
with a matte black metal screw-top lid sits centered on a white Carrara marble
countertop. The jar has an off-white matte paper label with "CLARÉ" wordmark
in elegant warm-brown serif (visible acute accent on the É), "SISTEMA 5x"
in smaller text below, and a small champagne-gold circular foil badge reading
"5% TRX · 5% AZE · 3% GLY" in three short monospace lines. The amber glass
glows soft honey when light passes through.

Beside the jar (slightly out of focus): a small ceramic cup of black coffee,
a single fresh eucalyptus sprig, a folded oatmeal-linen towel.
Background fades into a soft warm cream gradient.

Camera: 25-degree angle from above, eye level on product, 85mm feel,
shallow depth of field. Soft morning window light from upper left,
gentle shadow falling right, warm golden temperature. Jar takes ~40% of
frame, slightly left of center for rule of thirds. Plenty of negative space.

Square 1:1 composition. Premium, calm, editorial — not stock.
Real photograph aesthetic. Highly detailed, photorealistic, 4K.
```

### Prompt para Midjourney v6

```
editorial product photography of a small amber glass skincare jar, 50ml,
matte black metal lid, off-white matte label with serif wordmark "CLARÉ"
in warm brown and a small champagne-gold circular badge with monospace
text, sitting on white Carrara marble countertop, ceramic cup of black
coffee and eucalyptus sprig and folded linen towel softly out of focus
beside it, soft morning window light from upper left, warm golden tone,
shallow depth of field, Kinfolk magazine aesthetic, premium skincare
campaign, photorealistic --ar 1:1 --style raw --v 6 --s 250
```

### Negative prompt
`stock photo, cartoon, illustration, oversaturated, plastic, perfect,
fake glass, glossy plastic look, blue light, cold tones`

---

## IMAGEN 2 — RITUAL NOCTURNO (lifestyle emocional)

**Rol en Shopify:** segunda imagen, tira la conexión emocional. También útil para banner de "ritual" en la home.
**Dimensiones recomendadas:** 1638×2048 px (4:5 vertical).

### Prompt para ChatGPT 4o / DALL·E 3

```
Intimate lifestyle photography. A 38-year-old Latin American woman with
shoulder-length dark wavy hair, wearing a soft cream silk robe, stands
in front of a softly-lit bathroom mirror. She is looking down at her
own hands. She has just opened a small amber glass skincare jar with
matte black lid (the lid rests on the marble counter beside the open jar).
The jar's off-white label shows "CLARÉ" in warm-brown serif. Her index
finger has a small pearl of off-white cream on it, ready to apply.
Her face shows quiet focus, a small private smile — she is NOT posing
for camera.

Camera: 3/4 angle medium close-up, capturing her hands, the open jar,
and her face from cheekbones down softly out of focus, f/2.0 feel.
Lighting: warm tungsten lamp from the side mixed with cool ambient
bathroom light, cinematic two-tone glow. Her skin shows real texture
(fine pores visible, slight uneven tone on cheekbone, no heavy makeup).

Vertical 4:5. Hands and open jar are hero, face provides emotional
anchor in upper third. Photorealistic, editorial, intimate. Real
photograph aesthetic, 4K detail.
```

### Prompt para Midjourney v6

```
intimate lifestyle photography, 38 year old latin american woman with
shoulder length dark wavy hair in cream silk robe, standing at softly
lit bathroom mirror, just opened a small amber skincare jar with matte
black lid, label reads "CLARÉ" in warm brown serif, small pearl of
cream on her index finger, looking down at her hands with quiet
private smile, real skin texture with visible pores, no heavy makeup,
warm tungsten side light mixed with cool ambient, cinematic two-tone
glow, shallow depth of field, editorial skincare campaign, kinfolk
aesthetic --ar 4:5 --style raw --v 6 --s 350
```

### Negative prompt
`young model, perfect skin, airbrushed, glamour, fashion pose,
cartoon, illustration, plastic skin, instagram filter, oversaturated`

---

## IMAGEN 3 — TEXTURA MACRO (no jar, solo crema)

**Rol en Shopify:** imagen 3-4, refuerza calidad. Bien también como fondo de sección "textura/aplicación".
**Dimensiones recomendadas:** 2048×2048 px (1:1).

### Prompt para ChatGPT 4o / DALL·E 3

```
Hyper-detailed macro photography. A small generous swirl of soft
off-white cream (slight warm ivory undertone, mostly matte with subtle
silky sheen) sits on the back of a real human hand. The hand belongs
to a woman around 38 — healthy but real skin: fine vellus hair catching
light, visible pores, a faint freckle, slightly raised veins underneath,
no nail polish, short clean nails. The cream has just been placed and
not yet rubbed in — visible buttery, slightly glossy peaks where it
was scooped.

Camera: extreme macro, ~5cm from subject, top-down at slight angle,
razor-thin depth of field with cream and one section of hand in tack
focus. Single soft north-facing window light from above-left,
delicate specular highlight on cream, gentle shadow on the texture.

Square 1:1. Cream centered, surrounding hand fills frame edges in
soft falloff. Real photograph, no airbrush, premium skincare aesthetic.
4K, hyper-detailed.
```

### Prompt para Midjourney v6

```
extreme macro photography, soft off-white skincare cream with subtle
silky sheen, buttery peaks, sitting on the back of a real woman's hand,
38 years old, real skin texture with fine vellus hair and visible pores
and faint freckle, no nail polish, soft north window light from above
left, delicate specular highlight, razor thin depth of field, premium
skincare close up, editorial --ar 1:1 --style raw --v 6 --s 400
```

### Negative prompt
`plastic skin, glossy wet, fake cream, oversaturated, pure white
background, airbrushed perfection, cartoon, illustration`

---

## IMAGEN 4 — FLAT LAY DE INGREDIENTES (Sistema 5x)

**Rol en Shopify:** imagen 4-5, conecta con la sección "qué tiene adentro". Muy útil también como hero de la sección "Sistema 5x".
**Dimensiones recomendadas:** 1638×2048 px (4:5 vertical).

### Prompt para ChatGPT 4o / DALL·E 3

```
Editorial overhead flat-lay product photography. A small amber glass
skincare jar with matte black lid sits at the geometric center of a
soft warm cream linen surface. The jar's off-white label shows "CLARÉ"
in warm-brown serif and a small champagne-gold circular badge with
monospace text "5% TRX · 5% AZE · 3% GLY".

Arranged loosely around the jar in an organic, slightly imperfect ring
(plenty of negative space, nothing crowded):
- a small cluster of fresh dark mulberries with a green leaf
- two slices of dried licorice root (twisted brown sticks)
- a single fresh eucalyptus sprig
- three small whole turmeric-yellow kojic crystals on a tiny piece of parchment
- a halved fresh lemon showing its juicy interior

Camera: perfectly top-down 90-degree overhead shot, slightly wide framing.
Lighting: soft diffused daylight from a large window, gentle directional
shadows all falling to lower right at the same angle.

Vertical 4:5. Jar centered. Ingredients flow in an arc suggesting
"five elements working together" without being a literal pentagon.
Editorial apothecary aesthetic. Photorealistic, 4K.
```

### Prompt para Midjourney v6

```
editorial overhead flat lay, small amber glass skincare jar with matte
black lid centered on soft cream linen, surrounded by fresh dark
mulberries with green leaf, twisted dried licorice root sticks, single
eucalyptus sprig, small turmeric-yellow kojic crystals on parchment,
halved fresh lemon, soft diffused daylight from window, gentle
directional shadows, premium apothecary aesthetic, kinfolk magazine
--ar 4:5 --style raw --v 6 --s 300
```

### Negative prompt
`messy, crowded, oversaturated, cartoon, illustration, plastic objects,
fake fruit, lab equipment, marketing chaos`

---

## IMAGEN 5 — ESPEJO / RESULTADO VIVIDO

**Rol en Shopify:** última imagen de la galería + tope de la sección de testimonios. Es la "transformación" sin caer en el cliché de antes/después.
**Dimensiones recomendadas:** 1638×2048 px (4:5 vertical).

### Prompt para ChatGPT 4o / DALL·E 3

```
Documentary-style portrait, no product visible. A 38-year-old Latin
American woman with shoulder-length dark wavy hair stands in front of
a bathroom mirror in soft warm morning light. She wears a simple cream
linen pajama shirt. Her face is bare — no makeup at all.

Her skin is healthy and even-toned: subtle natural luminosity, small
visible pores, very faint freckling across the nose, no obvious dark
spots, NOT airbrushed-perfect. She has fine expression lines around
her eyes that read as "lived-in", not erased. She looks at her own
reflection with a small private smile — the smile of someone who
recognizes herself again. One hand rests on the marble counter; the
other is at her collarbone.

Camera: shot from slightly behind her at 3/4 angle so we see both her
real face and the reflection. ~50mm feel, f/2.8. Cool soft daylight
from a frosted bathroom window mixed with very warm ambient — the
natural skin-flattering color of "8am bathroom".

Vertical 4:5. Her face/reflection occupies right two-thirds, mirror
frame and bathroom edge soft on the left. Top of head can crop slightly.
Real photograph. Documentary, intimate. NOT a glamour shot.
4K, photorealistic.
```

### Prompt para Midjourney v6

```
documentary portrait, 38 year old latin american woman with shoulder
length dark wavy hair, cream linen pajama shirt, bare face no makeup,
healthy real skin with subtle natural glow and visible pores and faint
freckling, fine expression lines around eyes, standing at bathroom
mirror in soft warm morning light, looking at her own reflection with
small private smile of self-recognition, 3/4 angle showing face and
reflection, cool window daylight mixed with warm ambient, kinfolk
aesthetic, editorial, NOT glamour, real woman not model
--ar 4:5 --style raw --v 6 --s 400
```

### Negative prompt
`young model, 25 years old, perfect plastic skin, fashion magazine,
glamour shot, airbrushed, instagram filter, before after, beauty pose,
cartoon, illustration, oversaturated`

---

## Cómo subirlas a Shopify

1. **Galería del producto** (Productos → Tu producto → Media):
   - Slot 1: imagen 1 (hero)
   - Slot 2: imagen 2 (ritual)
   - Slot 3: imagen 3 (textura)
   - Slot 4: imagen 4 (ingredientes)
   - Slot 5: imagen 5 (resultado)

2. **Alt text** (importante para SEO + accesibilidad):
   - 1: `Crema CLARÉ Sistema 5x correctora de manchas, frasco ámbar sobre mármol`
   - 2: `Mujer aplicando CLARÉ en su ritual nocturno frente al espejo del baño`
   - 3: `Textura suave de la crema CLARÉ Sistema 5x sobre la piel`
   - 4: `Ingredientes naturales del Sistema 5x: mora, regaliz, eucalipto, kójico, vitamina C`
   - 5: `Mujer mirándose al espejo con piel uniforme tras usar CLARÉ`

3. **Optimización**: comprimí cada imagen a < 200KB con [tinypng.com](https://tinypng.com) antes de subir. Shopify cachea pero la carga inicial impacta conversión.

---

## Si tu generación sale rara, reintentá con estos ajustes

- **El frasco no muestra texto legible** → DALL·E 3 / ChatGPT 4o son los mejores con texto. Midjourney suele "inventar" letras.
- **La modelo se ve demasiado joven** → agregá explícitamente "**38-44 years old, NOT a model**" y "**fine expression lines around eyes**".
- **La piel se ve plástica** → agregá "**visible pores, vellus hair, real skin texture, no airbrush**".
- **Colores demasiado saturados** → agregá "**muted warm tones, editorial color grading, kinfolk palette**".
- **Composición rara** → controlá con `--ar` (aspect ratio) en Midjourney o pidiendo explícitamente "square 1:1" o "vertical 4:5" en ChatGPT.

---

## Sugerencia de orden de generación

1. Empezá por **Imagen 1 (Hero)** porque define la dirección visual.
2. Una vez que estés OK con la Hero, generá **Imagen 4 (Flat lay)** usando el mismo seed/aesthetic.
3. Después las dos lifestyle (**2 y 5**) — esas tienen modelo humano y son las que más necesitan reintento.
4. Cerrá con **Imagen 3 (Macro)** que es la más fácil de bordar.

Total estimado: **45-90 minutos** generando + curando, asumiendo 2-3 reintentos por imagen.
