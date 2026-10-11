# GDG FEST ’26 — Official Festival Portal

> **A gathering of builders, thinkers, and creators.**  
> Built for the university-level Google Developer Groups festival competition.

---

## 1. Design Direction & Ethos

This project was conceived as an **editorial, Swiss-inspired digital experience** rather than a typical SaaS promotional page or generic AI-generated template:

- **Typography System**: 
  - Headings: `Space Grotesk` (tight, high-contrast, bold display hierarchy)
  - Body: `Inter` (neutral, legible editorial reading experience)
  - Monospace / Technical: `IBM Plex Mono` (metadata, track tags, timestamps, coordinates)
- **Palette**:
  - Warm Canvas: `#F2F0EA`
  - Secondary Neutral: `#E5E2DA`
  - Mineral Ink: `#202321`
  - Muted Technical Text: `#77776F`
  - Terracotta Accent (used with strict restraint): `#C65D3B`
  - Inverted Dark Surfaces: `#202321` / `#272B28`
- **Asymmetric Composition**:
  - Flagship hero with custom SVG architectural schematic diagram (modular grid computing, V8 JIT, CRDT vector clocks)
  - Varied event card weights (wide flagship card vs. architectural duo cards)
  - Grid lines, coordinate marks, and micro-labels (`[ 01 // OVERVIEW ]`)

---

## 2. Core Functional Modules

1. **Sticky Navigation (`Navbar.jsx`)**: Active section tracking, smooth scroll anchors, mobile drawer with keyboard navigation.
2. **Editorial Hero (`Hero.jsx`)**: Expressive typography, event specs ticker, custom vector schematic, and text-based scroll indicator.
3. **About Section (`About.jsx`)**: Manifest-style quote *"Great things happen when curious minds build together"*, 4-pillar Swiss layout, and community culture statement.
4. **Events & Competitions (`Events.jsx` & `EventModal.jsx`)**:
   - 6 Categories: Hackathon, Coding Challenge, UI/UX Competition, Web Development, Technical Workshop, Developer Talks.
   - Real-time category filtering and search filter.
   - Accessible detailed modal with prerequisites, competition guidelines, prizes, and one-click registration preselection.
5. **Interactive Schedule (`Schedule.jsx`)**:
   - 3-day switcher (Day 01, Day 02, Day 03).
   - Track filter (All, Core, Competition, Workshop, General).
   - Expandable session briefings and `.ics` calendar export.
6. **Keynote & Guest Speakers (`Speakers.jsx`)**:
   - High-craft typographic monogram avatars, session topics, and illustrative researcher profiles.
7. **Synchronized Countdown (`Countdown.jsx` & `useCountdown.js`)**:
   - Live days, hours, minutes, and seconds countdown with demonstration timeline notice.
8. **Registration Portal (`Registration.jsx`)**:
   - Client-side validation (name, university email, college, event selection, participation type).
   - Dynamic solo/team fields.
   - LocalStorage persistence and demonstration credential pass preview.
9. **Accessible FAQ (`FAQ.jsx`)**: Keyboard accessible accordion with ARIA attributes.
10. **Typographic Footer (`Footer.jsx`)**: Large branding, chapter metadata, venue location, and legal disclaimer.

---

## 3. Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 3.4**
- **Lucide React**
- **Canvas Confetti**

---

## 4. Development & Build

```bash
# Start development server
npm run dev

# Compile production bundle
npm run build

# Preview production build
npm run preview
```
