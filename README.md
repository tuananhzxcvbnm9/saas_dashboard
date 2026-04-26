# SaaS Analytics Dashboard

Production-ready SaaS Analytics Dashboard built with **Next.js + TypeScript + Tailwind CSS + shadcn/ui-style components**.

## Features

- Modern, responsive layout (desktop/tablet/mobile)
- Sidebar, topbar, breadcrumb navigation
- Dark mode support
- Dashboard metrics: Total Revenue, Active Users, MRR, Churn Rate
- Revenue and user growth charts (Recharts)
- Recent transactions table
- Users page with search, status filter, pagination, and status badges
- Subscriptions page with plan, renewal date, and payment status
- Loading, empty, and error states across pages
- Clean component architecture:
  - `components/layout`
  - `components/dashboard`
  - `components/users`
  - `components/subscriptions`
  - `components/ui`

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes
- Recharts
- Lucide icons

## Local Development

```bash
# 1) install dependencies
npm install

# 2) run dev server
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev        # Start local dev server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Lint
npm run typecheck  # TypeScript checks
```

## Data Source

Currently uses typed mock data from `lib/mock-data.ts` for dashboard, users, and subscriptions.

## Notes

- If your environment blocks package downloads, `npm install` may fail due to network/security policy restrictions.
- No secrets or API keys are hardcoded in this project.
