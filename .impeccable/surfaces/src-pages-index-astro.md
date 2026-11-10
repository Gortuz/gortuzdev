---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro"]
---

# Surface: home page (gortuz.dev, ES at / and EN at /en/)

Mode: Persuade. Audience: recruiters and teams evaluating Alan Sandoval for backend/full-stack work. Action: write to him (email link with copy; LinkedIn, GitHub). Proof: only CV facts (PRODUCT.md Evidence). Constraints: diamond logo stays; logo palette only; straight lines only; minimal, professional, a little artistic; no terminal clichés, no generic dev template, nothing flashy.

## Direction contract

THESIS: The portfolio is a Zürich concert poster for shipped work: the diamond's facets enlarged into flat planes on a strict grid. It refuses the dark dev template (avatar, tagline, logo-chip grid, card rows).

OWN-WORLD: Warm white ground #fbf9f5 with beige #f2ede4 sections (user-pinned: backgrounds white/beige, never the brand colour). Text in the logo's darkest violet #1a0933. Brand purple #673ab7 marks what matters: the email action, key figures, bullets, live links, hover rules. The diamond keeps the logo's facet colours (#311b92, #673ab7, #1a0933, white, #161616 edges). One heavy grotesk (Archivo), flush-left, ragged right. 2px dark rules; no cards, no pills, no rounded corners, no shadows. One angle only: 45°.

STORY: In one screen the visitor reads who Alan is, three shipped facts, and the email. Below, the work is billed by weight (UTN Móvil, Utransfer, DDTI, eMinkaTech), then profile and stack as plain columns, then a contact close.

FIRST VIEWPORT: nav strip top (gortuz.dev left; Trabajo, Perfil, Contacto, EN right). Name at ~130px, two lines, flush-left on columns 1–7. Role line below. Three fact columns (big figure + caption) over 2px rules. Email as a violet-ruled action line. Right 40%: the logo's diamond at poster scale, cropped by the right edge, facets as planes.

FORM: Swiss International Typographic Style poster, candidate 4 of 7. seed:7e8a1e5835ff3199
Raises: one module (8px facet unit) rules all spacing; state drawn by line (solid live, broken past); projects sized by weight; violet #673ab7 reserved for the action and live links; the grid rescales and never breaks on small screens.
Signature interaction: on load the facets assemble along the 45° axis once (clip-path, ease-out), reduced-motion shows them at rest; hovering a work entry draws its rule across in violet.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
