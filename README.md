# The Loken Group — Website

Next.js 16 marketing site for **The Loken Group**, Houston's #1 real estate team (Keller Williams).

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 3 |
| Fonts | Playfair Display (serif) + Inter (sans) via `next/font/google` |
| Icons | Lucide React |
| Package manager | pnpm 10 |
| Deployment | Vercel (recommended) |

---

## Running Locally

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your n8n webhook URL:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/loken-leads
```

> If you skip this, the site runs fine — forms will show a success state without actually sending data.

### 3. Start the dev server

**Mac / Linux:**
```bash
pnpm dev
```

**Windows** (workaround for missing SWC native bindings):
```bash
NODE_ENV=development node node_modules/next/dist/bin/next dev --webpack
```

> The `NODE_ENV=development` + `--webpack` flags are Windows-only. Vercel and Mac/Linux don't need them.

Then open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | No | n8n webhook endpoint. All `LeadForm` submissions POST JSON here. |

### LeadForm payload shape

Every form submission sends this JSON to the webhook:

```json
{
  "source": "sell-page",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "713-555-0100",
  "needToSell": false,
  "message": "",
  "submittedAt": "2026-06-24T12:00:00.000Z",
  "page": "https://thelokengroup.com/sell"
}
```

**`source` values by page:**

| Source | Page |
|---|---|
| `guaranteed-sale` | `/your-home-sold-guaranteed` |
| `sell-page` | `/sell` |
| `buy-page` | `/buy` |
| `buy-before-you-sell` | `/buybeforeyousell` |
| `cash-offer-upfront` | `/cash-offer-upfront` |
| `build-dream-home` | `/build-your-dream-home` |
| `contact-page` | `/contact` |

---

## Deploying to Vercel

### One-click deploy

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo
3. Vercel auto-detects Next.js — no build config needed
4. Add environment variable in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_N8N_WEBHOOK_URL` → your webhook URL
5. Click **Deploy**

### Manual via CLI

```bash
pnpm dlx vercel
```

Follow the prompts. On first deploy it will ask for your Vercel team/project.

### Build settings (auto-detected, no changes needed)

| Setting | Value |
|---|---|
| Framework | Next.js |
| Build command | `pnpm build` |
| Output directory | `.next` |
| Install command | `pnpm install` |
| Node.js version | 20.x |

---

## Project Structure

```
loken-group/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, metadata, skip-to-content)
│   ├── page.tsx                # Landing page (/)
│   ├── not-found.tsx           # Branded 404
│   ├── error.tsx               # Branded 500 / runtime error boundary
│   ├── loading.tsx             # Loading screen (page transitions)
│   ├── sitemap.ts              # Auto-generates /sitemap.xml
│   ├── robots.ts               # Auto-generates /robots.txt
│   ├── globals.css             # Tailwind base + CSS variables
│   └── [route]/page.tsx        # 27 inner pages
│
├── components/                 # Shared React components
│   ├── Navbar.tsx              # Sticky nav with dropdown menus
│   ├── Footer.tsx              # Site footer
│   ├── PageLayout.tsx          # Inner page wrapper (Navbar + Footer)
│   ├── PageHeader.tsx          # Dark hero for inner pages
│   ├── LeadForm.tsx            # Lead capture form → n8n webhook
│   ├── Hero.tsx                # Landing page hero
│   ├── StatsBar.tsx            # Red stats strip
│   ├── ThreeWaysToSell.tsx     # 3 sell program cards
│   ├── ReviewsTab.tsx          # Client reviews
│   ├── MeetTheTeam.tsx         # Team grid
│   ├── ServingArea.tsx         # 9-county service area
│   ├── BuySellCTA.tsx          # Dual buy/sell CTA
│   └── PhotoGrid.tsx           # Photo grid
│
├── lib/
│   └── constants.ts            # Brand info, phone, email, all route paths
│
├── public/
│   └── logo.svg                # Loken Group SVG logo
│
├── next.config.ts              # Image domains + security headers
├── tailwind.config.ts          # Brand color/font tokens
├── .env.local.example          # Environment variable template
└── .gitignore
```

---

## Brand Tokens

All Tailwind utility classes use these tokens:

| Tailwind class | Value | Usage |
|---|---|---|
| `font-serif` | Playfair Display | All headings (`h1`–`h3`) |
| `font-sans` | Inter | Body copy, labels, buttons |
| `text-[#BE1E2D]` / `bg-[#BE1E2D]` | `#BE1E2D` | Red accent |
| `text-[#1A1A1A]` / `bg-[#1A1A1A]` | `#1A1A1A` | Dark backgrounds / primary text |

Brand constants (phone, email, routes) are centralized in [`lib/constants.ts`](lib/constants.ts).

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/sell` | Sell Your Home |
| `/your-home-sold-guaranteed` | Guaranteed Sale program |
| `/buybeforeyousell` | Buy Before You Sell program |
| `/cash-offer-upfront` | Cash Offer Upfront program |
| `/buy` | Buy Your Dream Home |
| `/build-your-dream-home` | New Construction guide |
| `/houston-communities` | Community profiles |
| `/schools` | School district comparison |
| `/search-for-homes` | Home search |
| `/houston-map-search` | Map-based search |
| `/recently-sold` | Recently sold homes |
| `/meet-the-team` | Team page |
| `/the-loken-group-experience` | Brand story / timeline |
| `/reviews` | Client reviews |
| `/mission-statement` | Mission & values |
| `/careers` | Join the team |
| `/partners` | Preferred partner network |
| `/referrals` | Referral rewards program |
| `/blog` | Blog |
| `/media` | Media hub |
| `/press-releases` | Press & news coverage |
| `/tv-radio-ads` | TV & radio appearances |
| `/tlggives` | Community giving |
| `/resources` | Buyer/seller resource library |
| `/faq` | FAQ |
| `/contact` | Contact |
