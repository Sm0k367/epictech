# Epic Tech AI

**Modular AI Media Platform – Stripe Gated, Vercel Hosted, $0 Deploy Cost**

## Features

- Cinematic hero section with AI “host”
- Stripe “one-click unlock” for full user access (local browser unlock)
- 100% free AI modules (text, image, and browser TTS) – powered by open APIs and browser tech
- No login, no paid backend, no keys needed
- Responsive, modern UI
- Easy swap for your branding, hero art, and demo modules

## Usage

1. Clone repo, run `npm install`
2. Add your AI host image to `/public/hero-host-placeholder.png` (or use default)
3. Start locally with `npm run dev`
4. Deploy to Vercel (auto-detects Next.js)
5. Users unlock features via Stripe, then use the platform in full

## Tech Stack

- Next.js (React)
- Free HuggingFace inference API (text/image)
- Browser SpeechSynthesis for TTS Audio
- Stripe Checkout link for unlock gating

## Painless Deploy

- 100% serverless, no backend fees, no paid API keys
- All user unlock is localStorage-based for MVP (upgrade if you go big)

---

**Swap in your branding/images/host as you please. Open to mod, remix, fork, and scale!**
