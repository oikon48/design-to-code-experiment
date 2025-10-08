# Picto Portfolio

A personal portfolio website implemented from Figma designs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Work Sans (Google Fonts)

## Section Overview

1. **Header** - Navigation menu
2. **Hero** - Main visual and introduction
3. **Stats** - Achievement statistics (years of experience, projects completed, clients served)
4. **About** - Detailed self-introduction
5. **Work Process** - Work process (4 steps)
6. **Portfolio** - Project showcase (6 projects)
7. **Call to Action** - Project consultation CTA
8. **Blog** - Blog posts (4 articles)
9. **What I do?** - Services offered (3 services)
10. **Happy Clients** - Client logos (6 companies)
11. **Testimonial** - Client testimonials
12. **Contact** - Contact form
13. **Footer** - Footer section

## Design System

### Color Palette
- **Primary**: #A53DFF (Purple)
- **Gray**: Scale from 50 to 900

### Typography
- Font Family: Work Sans
- Weights: 400, 500, 600

## Development

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build

\`\`\`bash
npm run build
\`\`\`

### Start Production Server

\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
picto-portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── Portfolio.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Blog.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── HappyClients.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## Notes

- Images are placeholders. Replace them with actual images as needed.
- Form submission functionality is not implemented. Add backend integration as needed.
- Responsive design is partial. Add additional breakpoints for full mobile support if required.

## License

This project was created for learning and demonstration purposes.
