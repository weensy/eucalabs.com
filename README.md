# Euca Labs

A calm, clear, and crafted company website built with Next.js 15.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- Plausible Analytics

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create an optimized production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Configure your domain:
   - Add `eucalabs.com` as a custom domain in Vercel project settings
   - Update your DNS records to point to Vercel:
     - Add an A record pointing to `76.76.21.21`
     - Or add a CNAME record pointing to `cname.vercel-dns.com`

### Environment Variables

No environment variables are required for this project. Plausible analytics is configured to track `eucalabs.com` domain.

## Project Structure

```
eucalabs.com/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── opengraph-image.tsx # OG image generator
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Principles.tsx
│       ├── Projects.tsx
│       ├── Studio.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── lib/
│   ├── site.config.ts      # Site configuration
│   └── analytics.tsx       # Plausible analytics
├── data/
│   └── projects.ts         # Projects data
└── public/                 # Static assets
```

## Customization

### Update Content

Edit the configuration files:

- [lib/site.config.ts](lib/site.config.ts) - Site metadata, about content, principles
- [data/projects.ts](data/projects.ts) - Projects list

### Update Colors

Edit the color tokens in:

- [app/globals.css](app/globals.css) - CSS variables
- [tailwind.config.ts](tailwind.config.ts) - Tailwind theme

### Update Fonts

Fonts are configured in [app/layout.tsx](app/layout.tsx) using `next/font/google`.

## License

© 2025 Euca Labs. Crafted in Japan.
