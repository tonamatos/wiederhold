# Personal website rebuild — Tonatiuh Matos Wiederhold

## Who this is for
Recruiters and hiring managers at ML/AI research teams, quant research teams, and AI
engineering teams (US primary, Canada secondary, Europe viable — German citizen). This
site is a professional portfolio, not an academic homepage. Every decision should be made
in favor of the recruiter's 30-second skim, not academic completeness.

## Identity / positioning (do not deviate from this)
PhD in Mathematics (University of Toronto, defending July 2026) who builds AI/ML systems.
NOT a cybersecurity specialist, NOT a pure mathematician, NOT a generic SWE. The framing is:
"a mathematician who builds AI systems, optimisation tools, and the mathematical theory that
makes them work." QuantGPT (an agentic AI system built with a major Canadian bank) is the
single strongest credential and must be the most prominent project on the page.

## Source material
- `CV.md` — current CV, ground truth for experience/education/skills
- `old-site-content.md` — full text extracted from the current Google Sites page (for content
  reference only — the new site should NOT copy its structure, hierarchy, or academic framing)
- Conversation notes below capture explicit positioning decisions already made

## Content structure (in this order)
1. **Hero / About** — name, one-line identity statement, current status (PhD candidate,
   defending July 2026), location, links (email, LinkedIn, GitHub)
2. **Projects** (the core of the site), in this priority order:
   - QuantGPT — agentic AI system, knowledge-graph reasoning, statistical inference for
     real-time risk analysis, built in partnership with a major Canadian bank. Frame as
     applied AI engineering, NOT cybersecurity. Do not use the words "cryptographic" or
     "post-quantum security" prominently — say "risk analysis" / "risk assessment."
   - Merton Jump Diffusion / ML calibration — quant + ML signal, options pricing extended
     with ML-based calibration
   - BorderTracer — published algorithm (Theoretical Computer Science journal), image
     segmentation generalized to abstract graphs. Link the published paper.
   - NeuroShannon — graph neural networks applied to estimating Shannon capacity of a noisy
     channel. Needs one plain-language sentence — don't assume the reader knows information
     theory.
   - FerGroup — graph automorphism framework + SQL database for large-scale inference.
     De-emphasize visually (smaller card, lower priority) — interesting but abstract.
   - Pure math papers (Set Theory Forces Probability, Infinite Game Theory) — do NOT put
     these on the main project grid. They belong only in a separate, minimal "Publications"
     list page, linked from the nav but not featured.
   - Hobby tools (MathNote, LaTeX templates, Thesis Tracker) — cut entirely, or at most a
     single small link in a footer "side projects" line. Not portfolio items.
3. **Experience** — Fields Institute (Visiting Scholar, QuantGPT), University of Toronto
   (Course Instructor) — keep brief, this is supporting evidence, not the focus
4. **Publications** — minimal list, just titles + venue + links, no descriptions needed
5. **Contact / footer** — email, LinkedIn, GitHub, location

## Visual design direction
- **Light theme.** Clean, professional, the kind of polish that signals "experienced
  engineer," not "grad student homepage" and not "generic startup landing page."
- **Typography**: a distinctive but readable sans for body text, paired with a slightly
  more characterful display font for headings/name. Avoid Inter/Roboto/Arial/system fonts —
  pick something with a bit more personality (e.g. a well-paired Google Fonts combination).
- **One fancy decoration, used sparingly**: an animated background graphic involving nodes
  and edges (a subtle animated graph/network — drifting nodes, faint connecting lines,
  maybe a gentle pulse along edges). This is thematically on-brand (graph theory + ML) and
  should live behind the hero section only, low-opacity, low-motion, not distracting, paused
  or simplified on mobile. Do not repeat this effect elsewhere on the page — restraint matters
  more than maximalism here.
- No other gradients, no glassmorphism, no particle.js clichés, no stock illustration.
- Generous whitespace. Clear visual hierarchy. Project cards should look intentional, not
  templated — vary card sizes slightly by project importance if it doesn't break the grid.
- Must look genuinely hand-built by someone who can code, not assembled from a template.

## Technical constraints
- Static site, deployable to GitHub Pages via custom domain (wiederhold.dev) with CNAME
- Prefer a lightweight stack: plain HTML/CSS/JS, or Astro if component reuse helps — avoid
  heavy frameworks (no Next.js/React SPA needed for a static personal site)
- The animated graph background: pure CSS/SVG/Canvas, no heavy JS libraries. Must be cheap
  enough to run smoothly without draining battery/CPU on a laptop.
- Mobile responsive — recruiters will sometimes click through on mobile
- Fast load — no render-blocking heavy assets, optimize any images
- Maintainable: adding a new project later should mean editing one data file/array, not
  hand-editing HTML in multiple places

## Explicit non-goals
- Do not build a blog/CMS — not needed yet
- Do not preserve the old site's nav structure (Home/Research/Experience/Teaching/Talks)
- Do not surface "Teaching" or "Talks" as primary nav items
- Do not let the cybersecurity or pure-math framing leak back in anywhere on the main page
