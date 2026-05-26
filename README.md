# Nexalaya Frontend

Nexalaya is a proxy-proof, IoT-powered attendance system built for Indian colleges. It allows professors to take attendance in 10 seconds via a local network module, eliminating proxy fraud and automatically generating NAAC-ready reports.

This repository contains the frontend landing page and demo-request system.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** CSS Modules with Vanilla CSS (No Tailwind)
- **Typography:** Outfit (Display) & Inter (Body) via Google Fonts
- **Backend APIs:** Next.js Route Handlers
- **Email Delivery:** Nodemailer

## Environment Variables

To run the "Book a Demo" email feature locally, you must provide a Gmail App Password. Create a `.env.local` file in the root directory:

```env
EMAIL_APP_PASSWORD=your_gmail_app_password_here
```

*Note: You must generate this password from your Google Account Security settings. Standard passwords will not work.*

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and API routes (`/api/notify`).
- `components/` - React components (`Hero`, `Features`, `NotifySection`, etc.) and their CSS modules.
- `public/` - Static assets and images.
- `template.html` - The HTML email template used by Nodemailer to send demo confirmations.
- `globals.css` - Global design tokens, font imports, and base animations.
