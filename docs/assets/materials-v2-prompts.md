# Theatre materials v2

Generated with the built-in `image_gen.imagegen` tool on 2026-10-16. No reference images were used. The generated PNG originals remain in the Codex image library. Local WebP files are format conversions only; no generated pixels or alpha were edited.

## Curtain frame

- Project asset: `curtain-frame-v2.webp`
- Original: `/Users/rodrigo/.codex/generated_images/01a145e4-bf13-7710-a615-4b9323806c5c/exec-d6152c73-7496-40d1-bb45-1f884e2c08bc.png`
- Tool: built-in image generation with `transparent_background: true`.
- Size: 1672 × 941 pixels.
- Conversion: `cwebp -q 88 -alpha_q 100 -metadata all`; lossless alpha preserved, 208448 bytes.
- Intended role: a viewport-sized fixed front layer. Content and scene figures belong behind the alpha opening.
- Alpha verification of generated PNG: center alpha 0; 66.2% of all pixels fully transparent. Transparent horizontal span at y=20% is x=166–1509; at y=50%, x=95–1581; at y=80%, x=132–1539 (zero-based pixels). This produces a broad viewing aperture with opaque framing at all canvas edges.

### Exact prompt

```text
Use case: stylized-concept
Asset type: transparent PNG theatre proscenium overlay for a full-viewport scrolling website, horizontal landscape 16:9 canvas, at least 1536 pixels wide.
Primary request: A believable miniature handmade school puppet theatre curtain frame, viewed perfectly straight on, with a huge empty TRANSPARENT opening for live website content behind it. It must read as a real tactile object photographed from the front, while retaining a charming children's papercraft spirit.
Subject: deep coral / rusty red crepe-paper curtains with convincing large gathered vertical folds. Top scalloped swag covers only the upper 16% of the canvas and runs to both outer edges. Narrow gathered curtains occupy the leftmost and rightmost 8–10% at middle height, hanging downward with softly curved irregular cut edges. Very shallow wooden/cardboard stage lip only along bottommost 2–3%.
Composition/framing: outer curtain frame must touch all four canvas edges, no margins. Main central opening is genuinely alpha transparent around x12%–88% and y17%–95%, wide and spacious. Vertical side curtains remain slim so 75% of the width is clear at eye level. Frontal orthographic camera, completely flat composition without camera tilt, without perspective showing surrounding room.
Lighting/mood: warm soft theatre spotlights graze curtain folds, dimensional highlights and deep soft shadow between folded planes. No light beams within the empty opening.
Color palette: terracotta coral rust reds #a53f31 to #d0674b with dark maroon shadows and ochre warm reflections, shallow stage lip dark reddish brown.
Materials/textures: matte heavy crepe paper and painted corrugated cardboard, subtly visible fine paper fibers, realistic physical folds, pleasing tactile handmade realism, no glossy velvet, no plastic.
Constraints: EMPTY transparent center with no background, backdrop, interior floor, wall or scene. Actual alpha transparency, not a rendered checkerboard. No figures, toys, objects, text, letters, logos or gold ornament. No closed drape across opening. No rectangular backdrop panel. No decorative stars. Transparent background.
```

## Paper fibers

- Project asset: `paper-fibers-v2.webp`
- Original: `/Users/rodrigo/.codex/generated_images/01a145e4-bf13-7710-a615-4b9323806c5c/exec-c296f2f1-6e78-4047-8442-37c050117487.png`
- Tool: built-in image generation with `transparent_background: false`.
- Size: 1254 × 1254 pixels; 335250 bytes after conversion.
- Conversion: `cwebp -q 80 -metadata all`.
- Intended role: subtle low-opacity repeating material over illustration planes using multiply blend. Generated as a seamless material; visible tiling should be checked at final CSS scale.

### Exact prompt

```text
Use case: product-mockup
Asset type: seamless square tileable handmade cardboard texture for multiplying over flat illustrations in a website.
Primary request: Close macro surface of fine matte handmade paper and thin uncoated cardboard, delicate little visible paper fibers, natural faint edge-free mottling, tactile surface.
Composition/framing: square 1024 by 1024 or larger, entire canvas is nothing but one continuous material at an even macro distance, perfectly flat and uniformly in focus. Must tile seamlessly across all four edges without visible seams.
Lighting/mood: extremely even diffuse illumination with no lighting gradient, no vignette, no cast shadow, no hotspots, no dark corners.
Color palette: pale muted kraft oatmeal beige-gray, nearly monochrome, low-contrast neutral fibers, bright enough to use as a subtle multiply layer without darkening illustrations much.
Materials/textures: soft tiny fibers and occasional very faint pulp flecks, subtle uneven paper grain. Fine material detail, not strong wavy ridges and not coarse glitter or heavy scratches.
Constraints: no borders, no edges of paper sheets, no wrinkles or folds, no objects, no writing, text, logo, watermark, frame or backdrop. No objects or surrounding tabletop. No large stains. The visual purpose is a continuous tactile cardboard/paper surface.
```
