# PRD: Riff — Climate & Environment (India)

**Working title:** Riff *(cool, domain-agnostic; "riff" = improvising on a random topic)*
**Version:** 2.0
**Date:** 18 October 2026
**Author:** Product Team
**Status:** Draft

> One-line pitch: **Spin a climate or environment topic. Explain it out loud. Learn what the evidence actually says.**
> A speaking-practice + active-recall tool that helps everyday Indians make sense of climate change and the environment — by making them explain it in their own words.

> **Locked for v1:** name **Riff** · default mode **Off the Cuff** · no peer reviewer (strict sourcing + a clear "not professional advice" notice) · React + TS + Vite, static, no backend.
>
> **Pivot note:** Riff v1 was scoped as a legal-rights literacy tool. This version (v2.0) pivots the subject entirely to **climate change and the environment (India-focused)** while keeping the mechanics, architecture and privacy stance. See §14 for the decision log.

---

## 1. Product Overview

### 1.1 What are we building?

**Riff** is a free, static, browser-based practice tool for **climate and environment literacy**, focused on India. It borrows the *mechanics* of [unprompted.cool](https://www.unprompted.cool/) (random topic draw + two timed practice modes) and applies them to a single domain: **climate change and the environment.**

The core loop:

1. **Draw** a random topic from a curated library (e.g., *"Why does north India's air collapse every winter?"*).
2. **Prepare** — either off the cuff (something you should already grasp) or via a Deep Research timer (a topic you need to look up yourself).
3. **Speak** — explain the topic aloud, in plain language, within a speaking timer.
4. **Reveal** — after speaking, flip a *Know-This Card* that lists the key points and cites authoritative sources (IPCC, UNFCCC, MoEFCC, CPCB, official portals).
5. **Review** — optional local recording playback + a lightweight practice history.

### 1.2 The insight

- **You don't understand a topic until you can explain it.** Speaking a topic aloud in plain language exposes exactly where your understanding is thin — the Feynman technique applied to climate.
- **Climate is high-stakes and easy to get wrong.** Most people absorb fragments from headlines and social media, not from reports. Riff grounds each rep in a sourced card.
- **Reading reports is heavy; recalling them is sticky.** The random draw removes the "I don't know what to study" friction, and the timer forces retrieval instead of passive reading.
- **The reference card closes the loop.** Unlike unprompted (which deliberately withholds answers), Riff's job is *education* — so it reveals a trustworthy, sourced summary after every round.

### 1.3 Why "climate & environment" and not "climate science"?

This is **not** a university course, **not** an engineering textbook, and **not** professional or policy advice. It is a **civic + environmental literacy** tool: it teaches the layperson how the climate system works and what is happening in India, in everyday terms. Target framing throughout: *"here is what the evidence says, and why it matters."*

### 1.4 Reference / inspiration

| Aspect borrowed from unprompted.cool | How Riff adapts it |
|--------------------------------------|------------------------|
| Random topic draw | Random **climate/environment prompt** draw |
| Off the Cuff mode (impromptu, minimal prep) | Familiar topics you should know cold |
| Deep Research mode (research timer → speaking timer) | Unfamiliar topics you must research yourself first |
| Curated static prompt library | Curated static **topic library** with sourced reference cards |
| No account, local storage, optional local recording | Same privacy-first stance |
| **Withholds** the answer | **Reveals** a sourced Know-This Card (education, not testing) |

---

## 2. Goals & Success Metrics

### 2.1 Product goals

| # | Goal | Measurement |
|---|------|-------------|
| G1 | Users can explain a drawn topic aloud without reading | % of sessions where the user reaches the speaking timer |
| G2 | Users leave each session having learned something sourced | % of sessions where the Know-This Card is opened |
| G3 | Build a habit (daily practice) | % of returning users within 7 days; streak length |
| G4 | Trustworthy, current content | 100% of topics carry ≥1 authoritative source + an "as-of" review date |
| G5 | Zero-friction start | Time from load → drawing a topic < 5s; no signup required |

### 2.2 Non-goals (out of scope for v1)

- Giving scientific, engineering, medical or policy advice.
- A chatbot / AI Q&A about climate.
- AI transcription, scoring, or automated feedback.
- Original research, modelling, or data analysis.
- Accounts, cloud sync, social features, leaderboards.
- Regional-language coverage beyond English (deferred to Phase 2).
- Exhaustive coverage of every environmental issue (curated subset only).

---

## 3. Target Users

| Persona | Description | What they want |
|---------|-------------|----------------|
| **The Concerned Citizen** | Salaried professional, engaged but not expert | Make sense of climate news and policy without a science degree |
| **The Student / Aspirant** | School/college student, UPSC/engineering aspirant | Build environmental awareness + speaking fluency for interviews, debates, GD |
| **The Champion of Others** | Teacher, NGO worker, community volunteer, activist | Learn topics well enough to teach and organise others |
| **The Curious Returner** | Anyone who wants a 5-minute daily climate-literacy habit | One topic a day, spoken and learned |

**Primary persona:** The Concerned Citizen. Success for v1 = this person can, after 10 sessions, explain ten core climate/environment topics out loud and find the exact source for each.

**Access assumption:** Data-light usage on mobile browsers (a large share of the Indian audience). Must be fast, offline-capable after first load, and low-bandwidth friendly.

---

## 4. Core Concept & Philosophy

### 4.1 Principles

1. **Speak to learn.** The primary act is speaking aloud, not reading. Reading is the *payoff*, not the *input*.
2. **Retrieval over recognition.** Timers force recall from memory instead of skimming.
3. **Trust by sourcing.** Every card cites at least one authoritative source. No unsourced claims, ever.
4. **Plain language first.** Topics are explained like you'd tell a friend, with the scientific or policy term shown second.
5. **Privacy by default.** No accounts, no tracking, no server. Recording stays on device.
6. **Honest about uncertainty.** Facts, standards and policy change; every card is versioned with an "as of" date and notes where evidence is evolving or region-specific.

### 4.2 Content-currency stance (important)

Climate science and policy move continuously: the IPCC publishes new assessment cycles, countries update their NDCs, and India revises its missions, standards and targets. Riff content must reflect the **current** position at its `asOf` date, prefer **primary, authoritative** sources, and avoid presenting superseded figures as current. Where a number is a projection or a range, the card should say so.

### 4.3 The "teach-then-reveal" loop

```
DRAW  →  PREPARE (0s | research timer)  →  SPEAK (timer)  →  REVEAL (Know-This Card)  →  LOG
```

The reveal step is what makes Riff educational rather than merely a game. It converts a speaking drill into a learning unit.

---

## 5. Modes & Mechanics

### 5.1 Off the Cuff (impromptu)

For **familiar, everyday topics** a citizen should already grasp.

| Setting | Range | Default |
|---------|-------|---------|
| Optional prep | off, or 15s–5 min | off |
| Speaking | 1–10 min | 2 min |

- Cue structure shown during speaking (optional, dismissible): **What is it? → Why does it happen? → What can be done?**
- Draw is category-selectable or "all".

### 5.2 Deep Research

For **unfamiliar or technical topics** the user must research themselves.

| Setting | Range | Default |
|---------|-------|---------|
| Research | 1–60 min | 10 min |
| Speaking | 1–10 min | 3 min |

- The page does **not** browse or summarize. The user chooses sources (recommended: IPCC, UNFCCC, MoEFCC, CPCB, IMD, official portals).
- After research ends, user closes notes and starts a separate speaking timer.

### 5.3 Know-This Card (Reveal)

Revealed by the user after speaking (a "Reveal" button), never auto-shown.

Contents:
- **In one line** — the topic summarized plainly.
- **Key points** — 3–6 bullets of the essential facts and mechanisms.
- **Science & policy** — the authoritative reports, agreements, standards or bodies (with a plain-language gloss).
- **What you can do** — concrete, practical actions or responses.
- **Caveats** — uncertainty, region-specific variation, "this is information, not advice".
- **Sources** — 1–3 authoritative links + "as of" review date.

### 5.4 Optional local recording

- Microphone-later: recording is opt-in and asks permission only when enabled.
- Stored in-browser (IndexedDB/Blob). Playback + download. Never uploaded in v1.
- No transcription, no analysis.

### 5.5 History & streaks (local)

- Local log: topic drawn, mode, timers used, date; a lightweight streak counter.
- "Ignored/Skip" topics not repeated until the deck reshuffles.
- All localStorage/IndexedDB only. Clearing browser data resets it.

### 5.6 Category selection

Users can draw from **all** or filter to a category (e.g., "Air Quality & Pollution", "Energy & Renewables"). Category filter also drives the mode default: everyday categories default to Off the Cuff, technical ones to Deep Research.

---

## 6. Content — The Topic Library

### 6.1 Source of truth for topics

Curated, static, versioned JSON shipped with the app. No server, no scraping at runtime. Content is authored and source-checked manually and committed to the repo.

### 6.2 Categories (v1)

| # | Category | Everyday? | Example topics |
|---|----------|-----------|----------------|
| 1 | **Climate Science & Basics** | Mixed | Greenhouse effect, 1.5°C, carbon budget & net zero, weather vs climate, the monsoon |
| 2 | **Global Climate Policy & COP** | Mixed | UNFCCC & COP, Paris Agreement & NDCs, loss and damage, climate finance, the IPCC |
| 3 | **India's Climate Policy & Missions** | Mixed | India's NDC, NAPCC missions, National Solar Mission, carbon market, Mission LiFE |
| 4 | **Air Quality & Pollution** | Everyday | AQI, PM2.5, winter smog, crop-residue burning, CAQM & GRAP |
| 5 | **Water, Rivers & Groundwater** | Everyday | Groundwater stress, river pollution, rainwater harvesting, urban flooding, safe drinking water |
| 6 | **Forests, Wildlife & Biodiversity** | Everyday | Forest cover, ecosystem services, Project Tiger, wetlands, invasive species |
| 7 | **Waste & Circular Economy** | Everyday | Segregation, single-use plastic, landfills & leachate, EPR, composting |
| 8 | **Energy & Renewables** | Everyday | The grid, solar growth, coal transition, energy efficiency, battery storage |
| 9 | **Oceans, Coasts & Climate Disasters** | Mixed | Sea-level rise, cyclones, ocean acidification, mangroves, coral bleaching |
| 10 | **Food, Agriculture & Land** | Everyday | Climate-smart agriculture, soil health, millets, food loss & waste, livestock & diets |
| 11 | **Cities, Transport & Health** | Everyday | Urban heat islands, transport emissions, green buildings, green space, heat & health |
| 12 | **Everyday Climate Action** | Everyday | Household emissions, travel choices, home electricity, plastic, community action |

### 6.3 Volume targets

| Content type | v1 (current) | Post-launch |
|--------------|----------|-------------|
| Topics (all categories) | 60 | +8–15/month toward 100+ |
| Know-This Cards authored | 60 (1 per topic) | same as topics |
| Categories | 12 | +2 as needed |
| Authoritative source registrations | ~25 | growing |

### 6.4 Topic schema (authored content)

```jsonc
{
  "id": "air-winter-smog-03",
  "category": "Air Quality & Pollution",
  "mode": "deep-research",          // "off-the-cuff" | "deep-research"
  "difficulty": "mixed",             // everyday | mixed | technical
  "prompt": "Explain why north India's air quality collapses in winter.",
  "hook": "It is never just one cause.",
  "card": {
    "oneLiner": "Winter smog in north India comes from a mix of vehicle and industrial emissions, crop-residue burning, dust, and weather that traps pollution near the ground.",
    "keyPoints": [
      "Cool air near the surface traps warmer air and pollutants above.",
      "Low winds let pollution accumulate over days.",
      "Crop-residue burning adds smoke in the harvest season.",
      "Pollution travels across state boundaries."
    ],
    "framework": [
      { "name": "Central Pollution Control Board", "detail": "Air quality data", "gloss": "Monitoring of pollutants across the region." },
      { "name": "India Meteorological Department", "detail": "Meteorology", "gloss": "Wind and temperature conditions that affect dispersion." }
    ],
    "whatYouCanDo": [
      "Understand that stubble burning is one source among several.",
      "Support regional, not just city-level, action.",
      "Watch official forecasts during the winter months."
    ],
    "caveats": "Educational information, not professional advice. Source apportionment varies between cities and years.",
    "sources": [
      { "title": "Central Pollution Control Board", "url": "https://cpcb.nic.in/" },
      { "title": "India Meteorological Department", "url": "https://mausam.imd.gov.in/" }
    ],
    "asOf": "2026-10-13"
  }
}
```

> Note: the card's `framework` field replaced the earlier `law` field in the v2.0 pivot. It holds authoritative reports, agreements, standards or bodies rather than statutes.

### 6.5 Content governance

- **Authority list (approved sources):** IPCC, UNFCCC, UNEP, WMO, FAO, WHO; and Indian official bodies such as MoEFCC, CPCB, CAQM, IMD, MNRE, CEA, CGWB, FSI, WII, BEE, NITI Aayog, MoHUA and the relevant ministries. Wikipedia, blogs and social media are *not* approved sources.
- **Currency rule:** every card carries an `asOf` date; new assessment cycles, policy changes or standard revisions trigger a review of affected cards.
- **Review cadence:** quarterly sweep; ad-hoc review on major reports or announcements (e.g., a new IPCC report, an updated NDC).
- **Tone rule:** plain language first, term second; no doom-mongering; no false certainty; always note where evidence is evolving or region-specific.
- **Compliance & transparency:** every card and the app footer state this is **information, not professional advice**; the app states plainly that content is **authored by the team and not peer-reviewed**; no personal data collected.

---

## 7. Functional Requirements

### 7.1 Topic draw

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1 | Draw a random topic from the library | P0 |
| FR-2 | Draw respecting an active category filter | P0 |
| FR-3 | Do not repeat a topic until the eligible deck is exhausted (reshuffle after) | P0 |
| FR-4 | "Skip / ignore" a topic; excluded from future draws until reset | P1 |
| FR-5 | Re-draw (new topic) requires confirming if a session is in progress | P1 |

### 7.2 Modes & timers

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-6 | Toggle between Off the Cuff and Deep Research | P0 |
| FR-7 | Configurable prep (off / 15s–5m) and speaking (1–10m) timers | P0 |
| FR-8 | Deep Research: configurable research timer (1–60m) → separate speaking timer | P0 |
| FR-9 | Visible countdown + audible cue on start and finish (mutable) | P0 |
| FR-10 | Pause/reset controls | P0 |
| FR-11 | Persist timer preferences and sound choice in local storage | P1 |
| FR-12 | Optional in-timer cue prompts (What / Why / What to do) | P2 |

### 7.3 Reveal & learning

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-13 | "Reveal" action flips the Know-This Card for the drawn topic | P0 |
| FR-14 | Card shows one-liner, key points, science & policy refs, practical actions, caveats, sources, `asOf` | P0 |
| FR-15 | Source links open the authoritative page in a new tab | P0 |
| FR-16 | Card is never auto-shown; only on user reveal | P0 |

### 7.4 Recording (optional, local)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-17 | Microphone permission requested only when recording is enabled | P0 |
| FR-18 | Record the speaking phase; playback and download | P0 |
| FR-19 | Store recordings in-browser only (IndexedDB); never upload | P0 |
| FR-20 | Recording is fully optional; site works without a mic | P0 |

### 7.5 History, streaks & persistence

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-21 | Log completed sessions (topic, mode, timers, date) locally | P1 |
| FR-22 | Streak counter based on at least one completed session/day | P2 |
| FR-23 | Reset local data from settings | P1 |

### 7.6 Compliance & shell

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-24 | Persistent "information only, not professional advice" notice | P0 |
| FR-25 | About / methodology page describing sources & review | P1 |
| FR-26 | Search-or-browse the library (optional, non-random access) | P2 |
| FR-27 | Installable PWA + offline use after first load | P2 |

---

## 8. Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-1 | Load time (cold, first visit) | < 2.0s on 4G |
| NFR-2 | Load time (repeat/offline) | < 0.5s (service-worker cached) |
| NFR-3 | Bundle size (initial JS, gzipped) | < 150 KB |
| NFR-4 | Performance on low-end Android | Smooth on Moto G-class device |
| NFR-5 | Accessibility | WCAG 2.1 AA: keyboard nav, focus states, contrast, captions for audio cues |
| NFR-6 | Privacy | No analytics/telemetry by default; no PII; recording stays on-device |
| NFR-7 | Data footprint | Works over 3G/low bandwidth; content is static JSON |
| NFR-8 | Browser support | Latest Chrome, Safari, Firefox, Edge; Android Chrome, iOS Safari |
| NFR-9 | Content integrity | No unsourced claims; every card versioned with `asOf` |
| NFR-10 | Hosting cost | $0 on a static host (Vercel/Netlify/GitHub Pages) |

---

## 9. UI / UX

### 9.1 Design principles

- **Calm, grounded, not preachy.** Climate content should inform, not alarm. Warm neutrals, one confident accent (a leaf-green brand), generous whitespace.
- **One decision on screen.** The draw → prepare → speak → reveal flow is linear; no clutter.
- **Mobile-first.** Thumb-reachable primary buttons; large timers.
- **Dark and light themes.** Default respects system preference.

### 9.2 Main screen (mock)

```
┌─────────────────────────────────────────────────────────────┐
│  RIFF  · climate & environment            [Off Cuff ▾] ●   │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│   Category: [ All ▾ ]                    Deck: 47 left      │
│                                                             │
│   ┌───────────────────────────────────────────────────┐     │
│   │                   CORE TOPIC                       │     │
│   │                                                    │     │
│   │   "Explain why north India's air quality           │     │
│   │    collapses in winter."                           │     │
│   │                                                    │     │
│   │         [  SPIN  ]        [ research first ]       │     │
│   └───────────────────────────────────────────────────┘     │
│                                                             │
│   Prep: [off]   Speak: [02:00]     ♪  ⚙  ⓘ (not advice)    │
└─────────────────────────────────────────────────────────────┘
```

### 9.3 Flow states

1. **Draw** — Spin button; topic appears with a short hook.
2. **Prepare** — Off (straight to speak) or a research countdown with a "close notes" interstitial.
3. **Speak** — Big countdown, optional cue chips, pause/reset, optional record.
4. **Reveal** — "Reveal the card" button → Know-This Card slides in.
5. **Log** — Session saved locally; "next topic" prompt + streak.

### 9.4 Components

| Component | Description |
|-----------|-------------|
| **Header** | Wordmark, mode toggle, settings |
| **Topic Card** | The drawn prompt + category chip + hook |
| **Spin Button** | Draw action (large, primary) |
| **Timer** | Monospaced countdown; prep/research/speak variants |
| **Cue Chips** | Dismissible What/Why/Do prompts |
| **Know-This Card** | Revealed reference panel with sourced facts |
| **Record Bar** | Mic toggle, playback, download |
| **Footer** | Disclaimer + About/methodology link |
| **Settings Sheet** | Timer defaults, sound, category, reset data |

### 9.5 Accessibility specifics

- Timer announced via ARIA live regions (polite) at milestones (half, 10s, end).
- Full keyboard operation; visible focus rings.
- Audio cues have visual equivalents; can be disabled.
- Minimum contrast 4.5:1; text scales to 200%.

---

## 10. Technical Architecture

### 10.1 Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | **React + TypeScript** | Component model, strong typing for content & state |
| Build | **Vite** | Fast dev, small static output |
| Styling | **Tailwind CSS** | Rapid, consistent, small CSS |
| State | **Zustand** | Lightweight session/settings store |
| Content | **Static JSON in repo** | No backend; versioned, reviewable content |
| Storage | **localStorage + IndexedDB** | Settings/history + recordings, on-device |
| Timers/Audio | Web APIs (`setInterval`, Web Audio) | No dependencies |
| Recording | `MediaRecorder` + `navigator.mediaDevices` | Native, local only |
| Offline | **Service Worker (PWA)** | Instant repeat loads, low bandwidth |
| Hosting | **Vercel / Netlify / GitHub Pages** | Free static hosting |
| Tooling | **oxlint**, tsx scripts | Lint + content/deck tests |

### 10.2 High-level architecture

```
┌────────────┐   draws    ┌──────────────────┐
│   Topic    │◀──────────│  App State        │
│  Library   │           │  (Zustand)        │
│ (JSON)     │──────────▶│  mode/timers/      │
└────────────┘   renders  │  session/deck     │
                          └────────┬──────────┘
       ┌───────────────────────────┼───────────────────────────┐
       │                           │                           │
 ┌─────▼─────┐            ┌────────▼────────┐         ┌────────▼────────┐
 │ Timers &  │            │ Know-This Card  │         │ Local Store      │
 │ Audio     │            │ (reveal view)   │         │ localStorage +   │
 │ (Web API) │            └─────────────────┘         │ IndexedDB (rec)  │
 └───────────┘                                        └──────────────────┘
```

All logic runs client-side. There is **no server, no API key, no network call** for the core loop.

### 10.3 Data model (TypeScript)

```ts
type Mode = 'off-the-cuff' | 'deep-research';
type Difficulty = 'everyday' | 'mixed' | 'technical';

interface SourceRef { title: string; url: string; }
interface FrameworkRef { name: string; detail: string; gloss: string; }
interface KnowCard {
  oneLiner: string;
  keyPoints: string[];
  framework: FrameworkRef[];
  whatYouCanDo: string[];
  caveats: string;
  sources: SourceRef[];
  asOf: string; // ISO date
}
interface Topic {
  id: string;
  category: string;
  mode: Mode;
  difficulty: Difficulty;
  prompt: string;
  hook?: string;
  card: KnowCard;
}

interface Settings {
  mode: Mode;
  prepSeconds: number | 0;   // 0 = off
  speakSeconds: number;
  researchSeconds: number;
  sound: boolean;
  category: string | 'all';
  recordByDefault: boolean;
}

interface SessionLog {
  id: string;
  topicId: string;
  category: string;
  mode: Mode;
  speakSeconds: number;
  completedAt: string; // ISO
}
```

### 10.4 Project structure

```
riff/
├── content/
│   ├── topics/                # one JSON file per category
│   │   ├── climate-science.json
│   │   ├── air-quality.json
│   │   └── ...
│   └── schema.json            # topic schema (validated in CI)
├── public/
│   ├── manifest.webmanifest
│   └── favicon.svg
├── scripts/                   # check-content.ts, deck.test.ts (run via tsx)
├── src/
│   ├── components/            # TopicCard, Timer, KnowThisCard, RecordBar, Settings
│   ├── content/               # categories + topic loader
│   ├── hooks/                 # useCountdown
│   ├── lib/                   # deck.ts, audio.ts, recorder.ts, stats.ts, format.ts
│   ├── store/                 # zustand store
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── README.md
```

### 10.5 Content pipeline

- Author topics as per-category JSON → validated against `schema.json` in CI (every card must have ≥1 source and an `asOf`).
- Bundled at build time; no runtime fetching.
- A small content-lint script enforces: no empty `sources`, known `category`, valid `mode`/`difficulty`, ISO `asOf`, and unique ids.

---

## 11. Scope Summary

### 11.1 MVP (Phase 1)

- React + TS + Vite app, static, deployable.
- 60 curated climate & environment topics across 12 categories, each with a sourced Know-This Card.
- Off the Cuff + Deep Research modes with configurable timers.
- Random draw with category filter + no-repeat deck.
- Reveal Know-This Card.
- Optional local recording (playback + download).
- Local settings + session log.
- Disclaimer + About/methodology page.
- Mobile-first responsive UI, dark/light.

### 11.2 Not in MVP

- AI transcription/feedback; chatbot; scientific/medical/policy advice.
- Accounts / cloud sync / leaderboards.
- Hindi and other languages.
- Search/browse mode, PWA offline polish, streaks (stretch — P2).
- State/UT–specific deep content beyond caveats.

---

## 12. Milestones

| Phase | Task | Duration |
|-------|------|----------|
| **0** | Finalize PRD, content governance, source list | 0.5 day |
| **1** | Scaffold app (Vite/React/TS/Tailwind), state store, layout shell | 1 day |
| **2** | Topic schema + loader + deck logic + category filter | 1 day |
| **3** | Timers (off-cuff + deep research) + audio cues + settings | 1–2 days |
| **4** | Know-This Card reveal UI | 1 day |
| **5** | Optional local recording (MediaRecorder + IndexedDB) | 1 day |
| **6** | Author first 60 topics/cards (content sprint, source-checked) — *done* | 3–5 days |
| **7** | Local history, About/disclaimer, polish, a11y pass | 1–2 days |
| **8** | Deploy to static host; content-lint in CI | 0.5 day |

*Content authoring/review (Phase 6) is the long pole; it can run in parallel with engineering.*

---

## 13. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Inaccurate/outdated science or policy** | High (trust) | Approved-source-only rule; `asOf` on every card; quarterly review; review on new reports/targets; **no peer review in v1** → conservative wording + prominent "not professional advice" notice |
| **Users mistake info for advice** | High | Persistent disclaimer; clear "educational, not advisory" language; no personalised guidance |
| **Over-simplifying complex science** | Medium | Cards flag uncertainty and ranges; link to primary sources |
| **Region-specific variation** | Medium | Caveat field per card; flag where impacts or rules differ |
| **Content authoring bottleneck** | Medium | Start with 60 high-value everyday topics; template the authoring; parallel content sprint |
| **False confidence after one session** | Medium | Cards include caveats/uncertainty; encourage "verify the source" |
| **Low-bandwidth / low-end devices** | Medium | Tiny bundle, static JSON, no backend, mobile-first, PWA caching |
| **Doom / polarisation framing** | Medium | Tone rule: inform, not alarm; avoid advocacy framing; stick to sourced facts |

---

## 14. Open Questions & Decision Log

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Product name | Product — decided: **Riff** | Closed |
| 2 | Default mode on first load | Product — decided: **Off the Cuff** | Closed |
| 3 | **v2.0 domain pivot: legal rights → climate & environment** | Product — decided: **climate & environment (India-focused)**, explainer + action mix | Closed |
| 4 | Keep name "Riff" after the pivot? | Product — decided: **keep** (domain-agnostic) | Closed |
| 5 | Hindi launch in Phase 2 or later? | Product | Open |
| 6 | Do we surface a "topic of the day" without randomizing? | Product | Deferred |
| 7 | Streaks in MVP or P2? | Product | Recommend P2 |
| 8 | Do we need a lightweight "report a content error" path? | Product | Recommend v1.1 |
| 9 | Expert reviewer for content sign-off | Decided: **none for v1** — strict sourcing + prominent "not peer-reviewed" notice | Closed |

---

## Appendix A — Example topics (current library preview)

| Category | Mode | Prompt (short) |
|----------|------|----------------|
| Climate Science & Basics | Off the cuff | "Explain the greenhouse effect and why adding greenhouse gases warms the planet." |
| Global Climate Policy & COP | Deep research | "Explain loss and damage and the fund for climate-vulnerable countries." |
| India's Climate Policy & Missions | Off the cuff | "Explain India's climate targets under the Paris Agreement." |
| Air Quality & Pollution | Deep research | "Explain why north India's air quality collapses in winter." |
| Water, Rivers & Groundwater | Deep research | "Explain why India's groundwater is under stress." |
| Forests, Wildlife & Biodiversity | Off the cuff | "Explain the ecosystem services that forests provide." |
| Waste & Circular Economy | Off the cuff | "Explain waste segregation and why separating at source matters." |
| Energy & Renewables | Deep research | "Explain battery storage and why it is key to clean power." |
| Oceans, Coasts & Climate Disasters | Off the cuff | "Explain how mangroves protect coasts and store carbon." |
| Food, Agriculture & Land | Off the cuff | "Explain millets and why they are climate-resilient crops." |
| Cities, Transport & Health | Deep research | "Explain urban heat islands and how cities can cool down." |
| Everyday Climate Action | Off the cuff | "Explain the highest-impact everyday actions to cut household emissions." |

## Appendix B — Glossary (plain language)

| Term | Plain-language meaning |
|------|------------------------|
| **Greenhouse effect** | How certain gases trap heat and keep Earth warm |
| **Net zero** | Adding no net greenhouse gases — emissions released equal emissions removed |
| **Carbon budget** | The total carbon dioxide we can still emit to stay under a temperature limit |
| **NDC** | Nationally Determined Contribution — a country's climate pledge under the Paris Agreement |
| **Mitigation** | Cutting greenhouse-gas emissions to limit warming |
| **Adaptation** | Adjusting to reduce the harm from climate impacts |
| **Loss and damage** | Climate impacts that adaptation cannot prevent |
| **AQI** | Air Quality Index — a 0–500 score summarising air pollution |
| **PM2.5** | Fine particles under 2.5 microns, most harmful to health |
| **GRAP** | Graded Response Action Plan — escalating anti-pollution measures |
| **EPR** | Extended Producer Responsibility — producers must manage their packaging waste |
| **Blue carbon** | Carbon stored in coastal ecosystems such as mangroves |
| **asOf** | The date on which a topic card's content was last verified |

## Appendix C — Approved source registry (initial)

| Source | Covers |
|--------|--------|
| IPCC (ipcc.ch) | Climate science assessments |
| UNFCCC (unfccc.int) | International climate policy, NDCs, COP |
| UNEP (unep.org) | Environment assessments, food waste, oceans |
| WMO (wmo.int) | Weather and climate monitoring |
| FAO (fao.org) | Food, agriculture, soils |
| WHO (who.int) | Health, air quality guidelines |
| MoEFCC (moef.gov.in) | National environment and climate policy |
| CPCB (cpcb.nic.in) | Air, water and waste standards |
| CAQM (caqm.nic.in) | Air quality management in the NCR |
| IMD (mausam.imd.gov.in) | Weather, monsoon, cyclones |
| MNRE (mnre.gov.in) | Renewable energy |
| CEA (cea.nic.in) | Electricity generation and grid |
| CGWB (cgwb.gov.in) | Groundwater |
| FSI (fsi.nic.in) | Forest cover |
| WII (wii.gov.in) | Wildlife research |
| BEE (beeindia.gov.in) | Energy efficiency |
| NITI Aayog (niti.gov.in) | Policy analysis |
| MoHUA (mohua.gov.in) | Urban development, waste, transport |
| MoH&FW (mohfw.gov.in) | Public health |
| Ministry of Jal Shakti | Water and sanitation |
| Ministry of Agriculture & Farmers Welfare | Agriculture |
| Ramsar (ramsar.org) / CBD (cbd.int) | Wetlands and biodiversity |

---

*Riff provides general climate and environment information for educational purposes only. It is not professional, scientific or policy advice, and is written by the team without peer review. Facts, standards and policy change; always verify with an authoritative source.*
