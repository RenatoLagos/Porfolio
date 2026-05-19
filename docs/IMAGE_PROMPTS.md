# Image Generation Prompts — Marathon-Aligned

> **Style anchor**: every prompt shares the same opening paragraph (the *style anchor*) so the 4 generated images sit together as one visual system. Only the **subject** block changes per project. Use 16:9 aspect ratio. Output to `public/projects/<slug>.png`.

---

## 0. The shared style anchor (paste at the top of every prompt)

```
Minimalist tactical schematic illustration. Near-black background (#050607)
with a very faint 40px grid overlay (≤5% opacity). Single accent color: <ACCENT_HEX>.
Hairline 1px white/grey strokes for structure. Small monospace uppercase labels
(IBM Plex Mono style) annotating components, like an engineer's blueprint or a
military HUD readout. No people, no faces, no photography, no cartoons, no
gradients, no glow effects, no drop shadows. High contrast, restraint, and
precision over decoration. Aesthetic references: Edward Tufte information
graphics × architectural blueprint × tactical operations console × ASCII art.
Composition is flat and orthographic, not 3D-rendered. Aspect ratio 16:9.
```

---

## 1. wifi-sensing-edge  (accent: GREEN #7bff6a)

**Subject block:**
```
Subject: top-down floor plan of a small apartment with three rooms rendered as
thin 1px white lines on the dark background. Inside each room, a small green
circular sensor node icon labelled "ESP32-S3" with hairline radio-wave arcs
emanating from it. In a corner, a single rectangular module labelled
"JETSON NANO · EDGE INFERENCE" connected by thin lines to the sensor nodes.
Subtle wave-pattern overlay representing WiFi CSI (Channel State Information)
flowing between the nodes. Floating label in the top-right: "MOD::WIFI-SENSE ·
802.11bf-2025". A bottom-right inset shows a tiny waveform glyph labelled
"BREATH RATE / PRESENCE / FALL".
```

Save as → `public/projects/wifi-sensing-edge.png`

---

## 2. Pantra  (accent: MAGENTA #ff4fd8)

**Subject block:**
```
Subject: schematic of a conversational AI pipeline. Center: a stack of three
horizontal slabs labelled "WHATSAPP BUSINESS API", "FASTAPI · CELERY · REDIS",
and "ANTHROPIC LLM" connected by thin magenta arrows. To the left, two stacked
speech-bubble outlines (one labelled "DE", the other "EN") showing the
multilingual input. To the right, a thin branching arrow splits into "AI
RESPONSE" and "HUMAN HANDOFF" with the latter going to a small front-desk icon
(stick-figure-free — just a counter outline). Floating label top-right:
"MOD::PANTRA · BERLIN". Bottom strip shows a thin progress-bar style telemetry
line labelled "RESPONSE LATENCY · <2.0S". Absolutely no actual people or faces.
```

Save as → `public/projects/pantra.png`

---

## 3. second-brain  (accent: CYAN #49d8ff)

**Subject block:**
```
Subject: a knowledge-graph diagram. Roughly 20 small cyan circular nodes
connected by hairline white lines, arranged in an irregular constellation (not
a perfect grid). Each node has a tiny monospace label like "NOTE::042",
"NOTE::017", "INDEX::PARA-AREAS", "ORPHAN::009". A subset of nodes glows
slightly brighter in cyan to indicate "ACTIVE / RECENT". One node in the
top-left labelled "INBOX" has three outgoing arrows branching toward clusters
labelled "PROJECTS", "AREAS", "RESOURCES", "ARCHIVE" (the PARA system).
Floating label top-right: "MOD::SECOND-BRAIN · WEEKLY-REVIEW". Bottom-right
shows a tiny health gauge labelled "GRAPH ENTROPY · 0.18".
```

Save as → `public/projects/second-brain.png`

---

## 4. social-media-uploader  (accent: ORANGE #ff8a3d)

**Subject block:**
```
Subject: a fan-out distribution schematic. Single rectangular module on the
left labelled "VIDEO INPUT · MP4" with one outgoing thin line into a central
node labelled "WHISPER → GPT-4 → PLATFORM COPY". From that node, three thin
orange arrows fan out to the right, terminating in three rectangular slabs
labelled "YOUTUBE SHORTS", "INSTAGRAM REELS", and "TIKTOK". A small fault icon
(a 1px X) appears next to one arrow with a label "RETRY · LOGGED", showing the
fault-tolerant fan-out. Floating label top-right: "MOD::UPLOAD · MULTI-CAST".
Bottom strip shows a thin success-rate telemetry line labelled
"DELIVERY · 99%+".
```

Save as → `public/projects/social-media-uploader.png`

---

## Tool recommendations

| Tool                   | Strength                                                              | Notes                                                                 |
| ---------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Midjourney v7**      | Best at *style consistency* across a batch                            | Use the `--seed` and `--sref` flags to lock the visual language       |
| **Imagen 3 / Gemini**  | Great with technical diagrams and labels                              | Often more obedient to "no people, no shadows" instructions           |
| **DALL-E 3 (ChatGPT)** | Best label/text rendering                                             | Tends to add unrequested colour — emphasize "single accent" hard      |
| **Recraft v3**         | Vector-style schematic output is its specialty                        | Closest fit to the "blueprint" aesthetic out-of-the-box               |

**My pick for this style:** Recraft v3 → set "Illustration · Schematic" preset, then use the prompts above. Falling back to Midjourney v7 with `--sref` linking all four prompts for guaranteed consistency.

---

## After generation

1. Save each as PNG at 1600×900 (16:9) to `public/projects/<slug>.png`
2. Optionally convert to WebP for smaller payloads: `cwebp -q 85 input.png -o output.webp` and update the `cover:` field in the corresponding `.md` to `.webp`
3. Reload `npm run dev` — the project cards pick the new covers up automatically.
