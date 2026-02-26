<!-- Header Banner -->
<div align="center">

```
██████╗ ███████╗██╗  ██╗
██╔══██╗██╔════╝██║  ██║
██║  ██║███████╗███████║
██║  ██║╚════██║██╔══██║
██████╔╝███████║██║  ██║
╚═════╝ ╚══════╝╚═╝  ╚═╝  — Dhanush Shenoy H
```

**[ PORTFOLIO v2 ]** — *Full Stack Developer*

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-dhanushshenoyh.github.io-c8f542?style=for-the-badge&labelColor=0a0a0a)](https://dhanushshenoyh.github.io/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0a0a0a)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0a0a0a)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white&labelColor=0a0a0a)](https://gsap.com/)

</div>

---

## `// who am i`

A **cinematic, code-first portfolio** that turns a static resume into an experience. Built from scratch with a hand-crafted design system — no UI kits, no templates, no shortcuts. Every animation, every transition, every line of CSS is intentional.

> *"I build & contribute for things I love."*

- 📍 Mangaluru, India  
- 💼 Open to work — full-time, contract & freelance  
- 🎓 B.Tech Computer Science @ YSET × NIAT  
- 🏆 OpenAI Buildathon Finalist (top 90 / 75,000 teams)  
- 🔗 [dhanushshenoyh.github.io](https://dhanushshenoyh.github.io/) · [dshenoyh@gmail.com](mailto:dshenoyh@gmail.com) · [LinkedIn](https://linkedin.com/in/dhanush-shenoy-h)

---

## `// what's inside`

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with active-section tracking & mobile menu
│   │   ├── Hero.jsx          # Cinematic landing — SplitText, parallax, marquee ticker
│   │   ├── About.jsx         # Story cards + skill grid + stats strip
│   │   ├── Projects.jsx      # Masonry-style project cards with hover glow
│   │   ├── Experience.jsx    # Animated timeline with education sidebar
│   │   └── Contact.jsx       # Formspree-powered contact form + social links
│   ├── hooks/
│   │   ├── useCursor.js      # Custom dual-cursor (dot + ring) hook
│   │   └── useReveal.js      # Stagger-reveal IntersectionObserver hook
│   ├── App.jsx               # Root — Lenis smooth scroll + GSAP ScrollTrigger setup
│   ├── index.css             # Global design system (tokens, typography, utilities)
│   └── main.jsx              # React entry point
├── public/
│   └── favicon.svg
├── index.html                # SEO meta, OG tags, Google Fonts
├── vite.config.js
└── .env                      # VITE_FORMSPREE_ENDPOINT
```

---

## `// the stack`

| Layer | Tech |
|-------|------|
| **Framework** | React 18 (JSX, Hooks) |
| **Build Tool** | Vite 5 |
| **Animation** | GSAP 3 + `@gsap/react` (ScrollTrigger, timelines) |
| **Motion** | Framer Motion 11 |
| **Smooth Scroll** | Lenis 1.1 (synced with GSAP ticker) |
| **Icons** | React Icons (Feather set) |
| **Scroll Reveal** | `react-intersection-observer` + custom hook |
| **Contact Form** | Formspree (serverless, no backend needed) |
| **Fonts** | Bebas Neue · DM Sans · Space Mono (Google Fonts) |
| **Styling** | Vanilla CSS — custom design tokens, no frameworks |
| **Deployment** | GitHub Pages |

---

## `// features`

- **🎬 Cinematic Hero** — Character-by-character `SplitText` entrance, mouse-parallax background orbs, a scrolling marquee ticker, and a GSAP entrance timeline
- **🖱️ Custom Cursor** — Dual-layer cursor (dot + magnetic ring) that reacts to pointer movement
- **📜 Lenis Smooth Scroll** — Buttery smooth scrolling synced with GSAP ScrollTrigger for precise scroll-driven animations
- **🃏 Project Cards** — Hover glow with per-project accent colors, featured/hackathon badges, and staggered scroll-reveal
- **⏳ Animated Timeline** — Experience section with a draw-on vertical timeline and staggered content reveals
- **📬 Live Contact Form** — Formspree-powered with loading/success/error states — no backend required
- **📱 Fully Responsive** — Mobile-first layout, hamburger menu, overflow-safe hero typography
- **♿ Accessible** — `aria-label` on icon links, semantic HTML5 landmarks, `aria-hidden` on decorative text splits

---

## `// running locally`

**Prerequisites:** Node.js ≥ 18, npm ≥ 9

```bash
# 1. Clone the repo
git clone https://github.com/abbysallord/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# → Fill in your Formspree endpoint (see below)

# 4. Start the dev server
npm run dev
# → Opens at http://localhost:5173
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

> **Getting a Formspree endpoint:** Go to [formspree.io](https://formspree.io), create a free form, and copy the endpoint URL. Without this, the contact form will silently fail.

---

## `// build & deploy`

```bash
# Production build (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to GitHub Pages

```bash
# Install the gh-pages utility (one-time)
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build && npm run deploy
```

> Make sure `vite.config.js` has `base: '/your-repo-name/'` set if serving from a subdirectory.

---

## `// customizing`

All personal content is isolated at the top of each component file under clearly marked `// CONFIG` blocks — **no hunting through JSX**.

| File | What to change |
|------|----------------|
| `Hero.jsx` | Name, tagline, subtitle, location, status, stack stats |
| `About.jsx` | Story paragraphs, skills list, fun stats |
| `Projects.jsx` | Project entries (title, description, tags, links, accent color) |
| `Experience.jsx` | Work experience timeline, education details |
| `Contact.jsx` | Email address, social links |
| `index.css` | Color tokens (`--clr-*`), font sizes, spacing scale |

---

## `// projects featured`

| # | Project | Year | Tags |
|---|---------|------|------|
| 🏆 | **OpenAI Buildathon Finalist** — top 90 / 75,000 | 2026 | AI · OpenAI · AgroNova |
| ⭐ | **AgroNova** — Smart Farming Platform | 2026 | Next.js · PostgreSQL · GSAP |
| 🥈 | **Srinathon 2nd Prize** — National Hackathon | 2025 | AI |
| ⭐ | **DrugSecure** — QC Platform for Pharmaceuticals | 2026 | React · Node.js · K-Means ML |
| 📦 | **Old Portfolio** — v1 with Storybook | 2025 | React · TypeScript · Tailwind |
| 🍳 | **AI Chef** — Recipe finder from fridge ingredients | 2025 | React · HuggingFace API |

---

## `// design philosophy`

This portfolio deliberately avoids UI libraries. Here's why:

1. **CSS is a superpower** — Every visual detail is precisely controlled via custom properties and hand-written rules
2. **Animations tell stories** — GSAP timelines sequence every element's entrance so the page feels alive, not dumped
3. **Performance-first** — Lenis + GSAP ticker synchronization prevents jank. `IntersectionObserver` for lazy reveals instead of scroll listeners
4. **Content is config** — Changing a job or project requires zero JSX knowledge — just edit the data object at the top of the file

---

## `// license`

```
MIT License — feel free to fork, remix, and build your own.
Just swap out the personal content and give a star ⭐ if this helped you.
```

---

<div align="center">

*Built with obsession by **[Dhanush Shenoy H](https://dhanushshenoyh.github.io/)** — © 2026*

`[ React ]` `[ GSAP ]` `[ Lenis ]` `[ Vite ]` `[ Pure CSS ]`

</div>
