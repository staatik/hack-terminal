# HACK//TERMINAL — Design Brainstorm

## Approach A: Cold War NORAD Command Center
<response>
<idea>
**Design Movement:** Cold War-era military computing / SAGE air defense aesthetic

**Core Principles:**
1. Phosphor amber monochrome — every element rendered in amber-on-black CRT glow
2. Strict grid of ASCII box-drawing characters as structural scaffolding
3. Information density over whitespace — terminals pack data, not breathe
4. Blinking cursors and typewriter reveals as the primary animation language

**Color Philosophy:**
- Background: near-black `#0a0800`
- Primary phosphor: amber `#ffb000`
- Dim phosphor: `#7a5400`
- Alert red: `#ff2200`
- Emotional intent: urgency, classified secrecy, Cold War paranoia

**Layout Paradigm:**
- Full-screen terminal split into panes like a 1960s NORAD display
- Left 30% = mission sidebar with scrolling status logs
- Right 70% = main content rendered as terminal "print-outs"
- No rounded corners anywhere — all borders are single-line ASCII `┌─┐│└─┘`

**Signature Elements:**
1. Scanline overlay (CSS repeating-linear-gradient) at 2px intervals
2. CRT barrel-distortion vignette on screen edges
3. "CLASSIFIED // TOP SECRET" watermark stamps on section headers

**Interaction Philosophy:**
- Every button click produces a `>_ EXECUTING...` animation before action
- Hover states flicker like unstable phosphor
- Scroll triggers "data loading" typewriter effect

**Animation:**
- Entrance: text types in character-by-character at 40ms intervals
- Idle: random single-character flicker on dim text every 3-8 seconds
- CRT flicker: subtle brightness oscillation at 0.1s on the whole screen
- Scanlines scroll slowly upward at 20s loop

**Typography System:**
- Monospace only: `IBM Plex Mono` for body, `Share Tech Mono` for headers
- All caps for section labels, mixed case for body text
- No font sizes below 12px — terminals are readable
</idea>
<probability>0.08</probability>
</response>

## Approach B: 1980s Green Phosphor Unix Terminal (CHOSEN)
<response>
<idea>
**Design Movement:** 1980s DEC VT100 / Unix terminal — the canonical hacker aesthetic

**Core Principles:**
1. Phosphor green `#00ff41` on deep black — the platonic ideal of "terminal"
2. Everything is a terminal window: sections are `xterm` panels with title bars
3. Content delivered as if `cat`-ted from a file — raw, unformatted, authentic
4. Military classification stamps and NATO phonetic alphabet as decorative language

**Color Philosophy:**
- Background: `#000d00` (near-black with green tint)
- Phosphor green: `#00ff41` (Matrix green, P1 phosphor)
- Dim green: `#003b00`
- Highlight/accent: `#39ff14` (neon green for emphasis)
- Warning: `#ffcc00` (amber alert)
- Critical: `#ff0000`
- Emotional intent: hacker culture, military precision, digital rebellion

**Layout Paradigm:**
- Asymmetric terminal window layout — windows of different sizes overlap/tile
- Hero: full-width terminal with ASCII art logo and boot sequence
- Sections: individual terminal panes with `┌──[ SECTION NAME ]──┐` headers
- Footer: scrolling ticker tape of "classified intel"

**Signature Elements:**
1. ASCII art hackathon logo rendered in block characters
2. Blinking block cursor `█` appearing throughout as punctuation
3. `[CLASSIFIED]` and `[REDACTED]` stamps over decorative elements

**Interaction Philosophy:**
- Buttons styled as terminal commands: `[ > REGISTER NOW ]`
- Hover: text brightens and cursor appears before it
- Active sections highlighted with `>>>` prefix

**Animation:**
- Boot sequence on page load: BIOS-style text scrolling
- Section reveals: text types in on scroll entry
- Cursor blink: 530ms on/off cycle (authentic terminal rate)
- Scanlines: subtle 3px repeating overlay at 15% opacity
- Random "glitch" frames: 50ms brightness spike every 8-15 seconds

**Typography System:**
- `Share Tech Mono` for all text (authentic terminal feel)
- `VT323` for large display numbers and countdown
- Uppercase for all labels and commands
- Body text at 14px, headers at 18-24px
</idea>
<probability>0.09</probability>
</response>

## Approach C: Soviet Military Radar / DEFCON Display
<response>
<idea>
**Design Movement:** Soviet-era radar scope / DEFCON threat level display

**Core Principles:**
1. Radar sweep animation as the hero centerpiece
2. Red-on-black with green radar "blips" — dual-color military palette
3. Circular/radial layout language contrasting with rectangular terminal panes
4. Cyrillic-style stencil lettering mixed with monospace

**Color Philosophy:**
- Background: `#050505`
- Radar green: `#00cc44`
- Alert red: `#cc0000`
- Scope glow: `#004422`
- Emotional intent: Cold War tension, surveillance, global threat

**Layout Paradigm:**
- Centered radar scope as hero with hackathon name in the sweep
- Surrounding quadrants contain info panels
- Radial navigation instead of linear scroll

**Signature Elements:**
1. Animated radar sweep with CSS conic-gradient rotation
2. "THREAT LEVEL" meter styled as DEFCON indicator
3. Map overlay with target markers for event locations

**Interaction Philosophy:**
- Navigation items appear as radar "blips" being detected
- Clicking locks onto a target with crosshair animation

**Animation:**
- Radar sweep: 4-second rotation loop with trailing glow
- Blip pulse: scale + opacity animation on detected targets
- Screen flicker: random 100ms brightness drops

**Typography System:**
- `Orbitron` for headers (military stencil feel)
- `Courier New` for body text
- Red uppercase labels, green data values
</idea>
<probability>0.07</probability>
</response>

---

## SELECTED APPROACH: Approach B — 1980s Green Phosphor Unix Terminal

**Rationale:** The green phosphor Unix terminal is the most iconic and immediately recognizable "hacker terminal" aesthetic. It perfectly marries military precision with hackathon culture, and offers the richest set of authentic terminal UI patterns (window chrome, command prompts, ASCII borders, boot sequences) to build a compelling, information-dense hackathon website.


---

# HACK//TERMINAL — Complete Build Guide & Documentation

## Project Overview

**HACK//TERMINAL** is a retro military-themed hackathon website that mimics 1980s Unix terminal interfaces and classified military computer systems. The design combines phosphor-green text, CRT effects, red alert accents, and military terminology to create an immersive, authentic retro-computing aesthetic.

---

## Design Philosophy & Implementation

### Core Aesthetic: **Retro Military Terminal**

This site embodies the visual language of 1980s military computer terminals, specifically:
- **VT323 monospace typography** for authentic terminal feel
- **Phosphor-green (#00ff41) on near-black (#000d00)** color scheme with CRT scanlines
- **Red (#ff0000 / #ff3333)** accent colors for alerts, warnings, and critical information
- **ASCII art and terminal window chrome** (title bars, borders, status indicators)
- **Military terminology** ("CLASSIFIED," "OPERATIVE," "MISSION," "OPSEC," "PHASE")
- **CRT effects** including scanlines, vignette, flicker, and glow

### Design Principles

1. **Authenticity Over Modernity** — Every element should feel like it belongs in a 1980s military computer room, not a modern web app
2. **Information Hierarchy via Terminal UI** — Use terminal window frames, ASCII borders, and status indicators to organize content
3. **Functional Militarism** — Military language and structure serve the UX, not just decoration
4. **Dual-Color Accent System** — Green for normal/active states, red for alerts/critical sections
5. **Typewriter Interaction** — Text should feel like it's being typed out, revealing information progressively
6. **Minimal but Dense** — Pack information efficiently using terminal-style layouts, avoiding whitespace

### Color Palette

| Color | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| Phosphor Green | #00ff41 | Primary text, borders, glows | `--phosphor` |
| Phosphor Dim | #00aa2b | Secondary text, inactive states | `--phosphor-dim` |
| Phosphor Faint | #004d1a | Subtle borders, backgrounds | `--phosphor-faint` |
| Alert Red | #ff0000 | Warnings, critical alerts | `--alert-red` |
| Alert Red Bright | #ff3333 | Red hover states, emphasis | `--alert-red-bright` |
| Near Black | #000d00 | Main background | `--bg-dark` |
| Very Dark | #001a00 | Card/panel backgrounds | `--bg-darker` |

### Typography

- **Display Font:** VT323 (Google Fonts) — All headings, titles, and prominent text
- **Body Font:** Share Tech Mono (Google Fonts) — Terminal-style monospace for all content
- **Letter Spacing:** 0.05em to 0.1em for authentic terminal feel
- **Font Sizes:** Smaller than typical web (xs, sm, base) to fit more content like a real terminal

### Key Visual Elements

1. **Terminal Windows** — Bordered boxes with title bars (e.g., `[X][-][+]── PHASE 00 ──`)
2. **ASCII Borders** — Dashed and solid lines using CSS borders and Unicode characters
3. **CRT Effects** — CSS scanlines (repeating linear gradient), vignette (radial gradient), flicker animation
4. **Status Indicators** — Colored dots (● ACTIVE, ● ONLINE) and clearance badges
5. **Phase Navigation** — Numbered buttons (00, 01, 02, etc.) with dashed borders and yellow backgrounds
6. **Content Grids** — 3-column layouts for feature cards with green borders and red text for security content
7. **Marquee Ticker** — Scrolling footer text with system status messages

---

## Architecture & Scaffolding

### Tech Stack

- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4 with custom CSS variables
- **Routing:** Wouter (lightweight client-side router)
- **UI Components:** shadcn/ui (pre-built Radix UI components)
- **Build Tool:** Vite
- **Package Manager:** pnpm

### Project Structure

```
hackathon-terminal/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Main landing page with boot sequence
│   │   │   ├── LLMEducation.tsx      # 5-phase LLM training module
│   │   │   ├── DigitalDiscipline.tsx # 5-phase OPSEC training module
│   │   │   └── NotFound.tsx          # 404 page
│   │   ├── components/
│   │   │   ├── TerminalWindow.tsx    # Reusable terminal frame component
│   │   │   ├── ErrorBoundary.tsx     # Error handling wrapper
│   │   │   └── ui/                   # shadcn/ui components
│   │   ├── hooks/
│   │   │   ├── useTypewriter.ts      # Typewriter text animation
│   │   │   └── useIntersectionObserver.ts # Scroll-triggered animations
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx      # Dark theme provider
│   │   ├── lib/
│   │   │   └── utils.ts             # Utility functions
│   │   ├── App.tsx                   # Main router and app wrapper
│   │   ├── main.tsx                  # React entry point
│   │   └── index.css                 # Global styles, theme variables, animations
│   └── index.html                    # HTML template with Google Fonts
├── server/
│   └── index.ts                      # Express server (placeholder for static)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

### Key Files & Their Purposes

#### `client/src/index.css`
- **CSS Variables:** Defines `--phosphor`, `--alert-red`, `--bg-dark`, etc.
- **Global Styles:** Base typography, scanlines effect, vignette, flicker animation
- **Utilities:** `.phosphor-glow`, `.phosphor-glow-bright`, `.red-accent-bar`, `.marquee`
- **Animations:** `@keyframes scanlines`, `@keyframes flicker`, `@keyframes marquee`, `@keyframes typewriter`
- **Theme:** Dark mode with OKLCH color space

#### `client/index.html`
- Imports Google Fonts: VT323 and Share Tech Mono
- Sets viewport and meta tags for responsive design
- Includes analytics script placeholder

#### `client/src/App.tsx`
- Defines routes: `/`, `/llm-education`, `/digital-discipline`, `/404`
- Sets dark theme as default
- Wraps app in ThemeProvider, TooltipProvider, and Toaster

#### `client/src/pages/Home.tsx`
- **Boot Sequence:** Animated BIOS startup with typewriter effect
- **Navigation Bar:** Fixed header with green links, red external links (LLM TRAINING, DIGITAL DISCIPLINE)
- **Hero Section:** Countdown timer to event date (Apr 18, 2026), military eagle emblem, classification stamps
- **About Section:** Mission briefing with wireframe globe, quick facts (500 operatives, $21.5K prizes, 48 hrs)
- **6 Mission Tracks:** Cyber Defense, AI Warfare, OSINT, Critical Infra, Cryptography, Open Mission
- **Timeline:** 3-day schedule rendered as terminal log with color-coded phases
- **Prize Manifest:** $10K grand prize with track-specific awards
- **Field Operatives:** Judge cards with redacted photos and clearance badges
- **FAQ:** Accordion with terminal-style Q&A
- **Registration Form:** Operative callsign, secure comms, track selection with confirmation
- **Footer:** System clock, status indicators, scrolling marquee ticker

#### `client/src/pages/LLMEducation.tsx`
- **Title:** "LLM FUNDAMENTALS — Understanding Large Language Models for Operational Use"
- **5 Phases:**
  - Phase 00: AI Fundamentals (AI, ML, LLM definitions)
  - Phase 01: LLM Basics (how LLMs work, training, architecture)
  - Phase 02: Capabilities (what LLMs can do, use cases)
  - Phase 03: Limitations (hallucinations, biases, constraints)
  - Phase 04: Military Use (applications in defense, intelligence)
- **Navigation:** Phase buttons (00-04) with dashed borders, yellow backgrounds
- **Content Grid:** 3-column layout for key concepts with green borders
- **Back Button:** "← RETURN TO MAIN" at top with phosphor green styling
- **Progress Indicator:** "1 / 5" at bottom

#### `client/src/pages/DigitalDiscipline.tsx`
- **Title:** "DIGITAL DISCIPLINE — Operational Security & Digital Hygiene for Hackathon Operatives"
- **5 Phases:**
  - Phase 00: OPSEC Fundamentals (what is OPSEC, the OPSEC process, digital OPSEC)
  - Phase 01: Threat Landscape (types of threats, attack vectors, reconnaissance)
  - Phase 02: Secure Practices (password management, encryption, secure communication)
  - Phase 03: Operational Discipline (incident response, team security, event protocols)
  - Phase 04: Incident Response (detection, containment, recovery, lessons learned)
- **Navigation:** Phase buttons with dashed borders, yellow backgrounds
- **Content Grid:** 3-column layout with red text for security-focused content
- **Back Button:** "← RETURN TO MAIN" at top
- **Progress Indicator:** "1 / 5" at bottom

#### `client/src/hooks/useTypewriter.ts`
- Animates text character-by-character with configurable speed
- Used in boot sequence to reveal system messages progressively
- Returns `displayedText` state for rendering

#### `client/src/hooks/useIntersectionObserver.ts`
- Triggers animations when elements scroll into view
- Used for fade-in effects on sections

#### `client/src/components/TerminalWindow.tsx`
- Reusable component for terminal-style framed content
- Props: `title`, `children`, `status` (ACTIVE, ONLINE, etc.)
- Renders ASCII title bar with window controls `[X][-][+]`

---

## How to Build This Site (Step-by-Step)

### Phase 1: Project Setup

1. **Create React + TypeScript + Tailwind project:**
   ```bash
   pnpm create vite@latest hackathon-terminal -- --template react-ts
   cd hackathon-terminal
   pnpm install
   pnpm add -D tailwindcss postcss autoprefixer
   pnpm exec tailwindcss init -p
   ```

2. **Install dependencies:**
   ```bash
   pnpm add wouter sonner next-themes framer-motion lucide-react
   pnpm add -D @types/react @types/react-dom typescript
   ```

3. **Add Google Fonts to `client/index.html`:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
   ```

### Phase 2: Global Styling

1. **Create `client/src/index.css`** with:
   - CSS variables for colors (phosphor green, red, black)
   - Global typography rules (VT323 for headings, Share Tech Mono for body)
   - Scanlines animation (repeating linear gradient)
   - Vignette effect (radial gradient overlay)
   - Flicker animation (opacity changes)
   - Marquee animation (horizontal scrolling)
   - Typewriter animation (character reveal)
   - Utility classes (`.phosphor-glow`, `.red-accent-bar`, `.terminal-border`)

2. **Configure Tailwind** in `tailwind.config.ts`:
   - Set dark mode as default
   - Add custom colors via CSS variables
   - Add custom animations (scanlines, flicker, marquee, typewriter)
   - Configure font families (VT323, Share Tech Mono)

### Phase 3: Core Components

1. **Create `client/src/contexts/ThemeContext.tsx`:**
   - Provides dark theme via React Context
   - Wraps entire app in App.tsx

2. **Create `client/src/hooks/useTypewriter.ts`:**
   - Takes text and speed as props
   - Returns displayedText state
   - Used for boot sequence animation

3. **Create `client/src/hooks/useIntersectionObserver.ts`:**
   - Detects when elements enter viewport
   - Triggers fade-in animations

4. **Create `client/src/components/TerminalWindow.tsx`:**
   - Reusable terminal frame with title bar
   - Renders ASCII controls `[X][-][+]`
   - Accepts `title`, `children`, `status` props

### Phase 4: Pages

1. **Create `client/src/pages/Home.tsx`:**
   - **Boot Sequence Section:** Use `useTypewriter` hook to animate BIOS startup messages
   - **Navigation Bar:** Fixed header with green links, red external links
   - **Hero:** Countdown timer (use `setInterval` to update), military emblem, classification stamps
   - **About Section:** Terminal-style mission briefing with stats
   - **Mission Tracks:** 6 cards with track names and descriptions
   - **Timeline:** Color-coded schedule using `<div>` elements styled as terminal log
   - **Prize Section:** Prize breakdown in terminal format
   - **Judges Section:** Judge cards with redacted photo placeholders
   - **FAQ:** Accordion component from shadcn/ui
   - **Registration Form:** Form with validation using react-hook-form and zod
   - **Footer:** System clock (use `setInterval`), status indicators, marquee ticker

2. **Create `client/src/pages/LLMEducation.tsx`:**
   - **Header:** Title, subtitle, red accent bar at top
   - **Phase Navigation:** 5 buttons (00-04) with yellow backgrounds, dashed borders
   - **Phase Content:** State management for active phase
   - **Content Grid:** 3-column layout for concepts
   - **Navigation Buttons:** "← PREVIOUS PHASE" and "NEXT PHASE →" at bottom
   - **Back Button:** "← RETURN TO MAIN" link at top
   - **Progress Indicator:** "X / 5" counter

3. **Create `client/src/pages/DigitalDiscipline.tsx`:**
   - Same structure as LLMEducation but with OPSEC content
   - Red text for security-focused content cards
   - 5 phases on OPSEC topics

### Phase 5: Routing & App Setup

1. **Update `client/src/App.tsx`:**
   - Import pages: Home, LLMEducation, DigitalDiscipline, NotFound
   - Set up Wouter routes: `/`, `/llm-education`, `/digital-discipline`, `/404`
   - Wrap in ThemeProvider (dark mode), TooltipProvider, Toaster

2. **Create `client/src/pages/NotFound.tsx`:**
   - 404 page with terminal styling

### Phase 6: Polish & Effects

1. **Add CRT Effects:**
   - Scanlines: `background-image: repeating-linear-gradient(...)`
   - Vignette: `box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.5)`
   - Flicker: CSS animation with opacity changes

2. **Add Hover Effects:**
   - Green glow on text hover: `text-shadow: 0 0 6px var(--phosphor)`
   - Red glow on alert text: `text-shadow: 0 0 6px var(--alert-red)`
   - Scale and shadow on button hover

3. **Add Animations:**
   - Typewriter effect on boot sequence
   - Fade-in on scroll (Intersection Observer)
   - Marquee ticker in footer
   - Flicker effect on entire page (optional, subtle)

---

## Key Implementation Details

### Boot Sequence Animation

```typescript
const bootMessages = [
  "BIOS v2.4.1 -- HACK//TERMINAL SYSTEMS INC.",
  "Initializing memory banks... [##########] 64MB OK",
  "Loading kernel modules... phosphor k0 radar k0 crypto_ka",
  "Mounting classified filesystem... /dev/sdal on / OK",
  "Starting network daemon... eth0: 192.160.1.337 ONLINE",
  "Establishing secure uplink... [ENCRYPTED]",
  "Authentication server... [CONNECTED]",
  "Loading mission parameters... ######## DECRYPTING ...",
  "> AUTHORIZATION GRANTED -- WELCOME, OPERATIVE"
];
```

Use `useTypewriter` hook to animate each line sequentially.

### Phase Navigation Pattern

```typescript
const [activePhase, setActivePhase] = useState(0);

const phases = [
  { id: 0, title: "AI FUNDAMENTALS", content: {...} },
  { id: 1, title: "LLM BASICS", content: {...} },
  // ... more phases
];

// Render phase buttons with onClick handlers
// Render phase content based on activePhase
```

### Countdown Timer

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();
    const eventDate = new Date("2026-04-18");
    const diff = eventDate.getTime() - now.getTime();
    // Calculate days, hours, minutes, seconds
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

### Terminal Window Component

```typescript
export function TerminalWindow({ title, status, children }) {
  return (
    <div className="border" style={{ borderColor: 'var(--phosphor)' }}>
      <div className="flex justify-between items-center px-3 py-1" style={{ backgroundColor: 'var(--bg-darker)' }}>
        <span>[X][-][+]── {title} ──</span>
        <span>● {status}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
```

### Form Submission

Currently shows a toast notification. To persist data:
- Upgrade to full-stack with `webdev_add_feature web-db-user`
- Add backend route to handle form submission
- Store in database
- Send confirmation email

---

## Customization Guide

### Change Event Date
Edit `Home.tsx` line with `new Date("2026-04-18")` to your event date.

### Update Prize Amounts
Edit the prize section in `Home.tsx` with your actual prize values.

### Add/Remove Mission Tracks
Edit the `tracks` array in `Home.tsx` to add or remove hackathon tracks.

### Modify Judge Information
Edit the `judges` array in `Home.tsx` with judge names, titles, and photos.

### Change Phase Content
Edit the `phases` arrays in `LLMEducation.tsx` and `DigitalDiscipline.tsx` with your content.

### Adjust Colors
Edit CSS variables in `client/src/index.css`:
- `--phosphor` (main green)
- `--alert-red` (main red)
- `--bg-dark` (background)

---

## Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Manus
Click "Publish" button in Management UI after creating a checkpoint.

### Deploy Elsewhere
The `dist/` folder contains the built static files. Upload to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## Future Enhancements

1. **Backend Integration** — Upgrade to full-stack to persist form submissions
2. **Live Scoreboard** — Real-time team leaderboard during event
3. **Sponsor Section** — "MISSION SPONSORS" pane with sponsor logos
4. **Email Notifications** — Send confirmation emails to applicants
5. **Admin Dashboard** — Backend panel to view submissions and manage event
6. **Mobile Optimization** — Improve responsive design for smaller screens
7. **Accessibility** — Add ARIA labels, keyboard navigation, high contrast mode

---

## Requirements Summary

| Requirement | Status | Notes |
|------------|--------|-------|
| React 19 + TypeScript | ✓ | Scaffolded with Vite |
| Tailwind CSS 4 | ✓ | Custom theme with CSS variables |
| Dark theme (phosphor green + red) | ✓ | Implemented in index.css |
| CRT effects (scanlines, vignette, flicker) | ✓ | CSS animations |
| Boot sequence animation | ✓ | useTypewriter hook |
| Multi-page routing | ✓ | Wouter router |
| 5-phase educational pages | ✓ | LLMEducation, DigitalDiscipline |
| Registration form | ✓ | Frontend validation only |
| Responsive design | ✓ | Tailwind breakpoints |
| Navigation with back buttons | ✓ | All pages have return links |
| Terminal window components | ✓ | TerminalWindow.tsx |
| Google Fonts (VT323, Share Tech Mono) | ✓ | Imported in index.html |
| Countdown timer | ✓ | Home.tsx |
| Marquee ticker | ✓ | Footer animation |

---

## Notes for Future Builders

- The site is **frontend-only** by default. To add backend features (database, email, payments), upgrade using `webdev_add_feature web-db-user`.
- All visual assets (generated images) are stored in `/home/ubuntu/webdev-static-assets/` and referenced via CDN URLs.
- The terminal aesthetic is consistent across all pages — maintain the green/red color scheme and monospace typography.
- Test on mobile devices — the responsive design should work well on all screen sizes.
- The boot sequence is intentionally slow to build anticipation — adjust timing in `useTypewriter` hook if needed.
- Keep the military terminology consistent — it reinforces the theme throughout the site.

---

**Last Updated:** March 6, 2026  
**Version:** 1.0 (HACK//TERMINAL v316ce3d1)
