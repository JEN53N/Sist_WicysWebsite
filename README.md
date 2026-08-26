# WiCyS Sathyabama Student Chapter Website 🛡️✨

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](LICENSE)

Official website for the **Women in CyberSecurity (WiCyS) Student Chapter** at **Sathyabama Institute of Science and Technology**, Chennai, Tamil Nadu.

Our mission is to recruit, retain, and advance women in cybersecurity through technical workshops, industry mentorship, competitive CTF events, and an inclusive student community.

---

## 🚀 Features

- 🌌 **Modern Cyber Aesthetic**: Custom dark theme with interactive canvas starfield animations, glassmorphism, and responsive design system.
- 👥 **Interactive Team Directory**: Categorized showcase of chapter leadership, faculty coordinators, department leads, and event organizers.
- 📅 **Events & Archives**: Dedicated event listings for upcoming workshops, national CTFs, and past event archives.
- 📝 **Integrated Team Recruitment**: Direct CTA form integration for prospective members to join the chapter.
- 📱 **Mobile First & Accessible**: Fully responsive navigation drawer, smooth transitions, and high accessibility standards.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 15](https://nextjs.org/)** | App Router, Server Components & SEO optimization |
| **[React 19](https://react.dev/)** | Component-driven UI framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and autocompletion |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom cyber-theme design tokens |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth micro-animations and page transitions |
| **[Lucide React](https://lucide.dev/)** | Modern vector icon system |

---

## 📁 Project Structure

```text
Sist_WicysWebsite/
├── public/                  # Static assets (logos, images, graphics)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout & global SEO metadata
│   │   ├── page.tsx         # Home page (Hero, Mission, Stats, Events CTA)
│   │   ├── HeroClient.tsx   # Interactive canvas particle hero component
│   │   ├── archive/         # Past event archives & gallery
│   │   ├── team/            # Chapter leadership & team directory
│   │   └── upcoming/        # Upcoming event announcements
│   ├── components/
│   │   ├── layout/          # Navbar & Footer components
│   │   └── ui/              # Reusable UI cards (EventCard, TeamCard)
│   ├── data/
│   │   └── index.ts         # Centralized team & event data sources
│   └── lib/
│       └── utils.ts         # Utility helpers & class merger (clsx + tailwind-merge)
├── tailwind.config.ts       # Custom color palettes, fonts, and animations
└── tsconfig.json            # TypeScript configuration
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JEN53N/Sist_WicysWebsite.git
   cd Sist_WicysWebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## ⚙️ Configuration & Content Updates

- **Team Members & Event Data**: Managed in [`src/data/index.ts`](file:///c:/Users/gopin/Downloads/Projects/Sist_WicysWebsite/src/data/index.ts).
- **Navbar Links & CTA Forms**: Configured in [`src/components/layout/Navbar.tsx`](file:///c:/Users/gopin/Downloads/Projects/Sist_WicysWebsite/src/components/layout/Navbar.tsx).
- **Design Tokens & Theme Colors**: Configured in [`tailwind.config.ts`](file:///c:/Users/gopin/Downloads/Projects/Sist_WicysWebsite/tailwind.config.ts) and [`src/app/globals.css`](file:///c:/Users/gopin/Downloads/Projects/Sist_WicysWebsite/src/app/globals.css).

---

## ☁️ Deployment

The project is optimized for zero-config deployment on **Vercel**:

```bash
# Deploy using Vercel CLI
npx vercel
```

Or connect the GitHub repository directly to [Vercel](https://vercel.com/) for automatic CI/CD preview deployments on every push.

---

## 🌐 Connect With Us

- 📧 **Email**: [admin@sathyabama-wicys.org](mailto:admin@sathyabama-wicys.org)
- 💼 **LinkedIn**: [WiCyS Sathyabama Student Chapter](https://www.linkedin.com/company/wicys-sathyabama-student-chapter/posts/?feedView=all)
- 📸 **Instagram**: [@wicys_sathyabama](https://instagram.com/wicys_sathyabama/)
- 📍 **Location**: Sathyabama Institute of Science and Technology, Chennai, India

---

<p center>
  Designed & Built with 💜 by <b>WiCyS Sathyabama Tech Team</b>
</p>
