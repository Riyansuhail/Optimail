<p align="center">
  <img src="public/logo.svg" width="80" alt="OptiMail Logo" />
</p>

<h1 align="center">OptiMail</h1>

<p align="center">
  <strong>AI-Powered Internal University Email Directory</strong><br/>
  Find the right contact. Get a drafted email. Skip the runaround.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/License-BSL_1.1-green?style=flat-square" />
</p>

---

## The Problem

University students, faculty, and staff waste hours searching for the right person to contact. They dig through outdated PDFs, navigate scattered web pages, email wrong departments, and wait days for redirections. A 2020 survey at Northeastern University found that over 60% of students experienced delays in issue resolution due to unclear email routing.

## The Solution

OptiMail is an internal AI-powered directory tool that helps university members:

1. **Search by topic, not by name** — Type "I need scholarship help" instead of guessing which office handles financial aid
2. **Get AI-drafted emails** — Describe your issue in plain English and OptiMail finds the right contact AND drafts a professional email you can edit and send
3. **Browse the full directory** — Explore every department and faculty member with one-click email copy, office hours, and locations

## Key Features

- **Smart AI Search** — Natural language matching to find the right department or person
- **Email Composer** — AI drafts contextual emails based on your described issue, fully editable before sending
- **University Directory** — Departments and faculty with category filters, copy-to-clipboard, and expandable contact cards
- **AI Chat Assistant** — Conversational interface that routes you to the right contact
- **University SSO** — Internal tool secured behind university authentication (students, faculty, staff only)
- **FERPA Compliant** — Built with data privacy regulations in mind
- **Multi-campus Ready** — Architecture designed to scale across universities

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Auth | University SSO (Supabase Auth planned) |
| Database | Supabase (PostgreSQL) planned |
| AI | OpenAI API planned |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/optimail.git

# Navigate to project directory
cd optimail

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
optimail/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main app entry
│   ├── components/       # React components
│   │   ├── Nav.tsx       # Navigation (transparent to glass on scroll)
│   │   ├── Landing.tsx   # Marketing landing page (signed out)
│   │   ├── SearchPage.tsx # Search interface (signed in)
│   │   ├── Directory.tsx # Department and faculty directory
│   │   ├── Chat.tsx      # AI assistant with email composer
│   │   ├── EmailComposer.tsx # Editable email draft component
│   │   ├── Logo.tsx      # OptiMail SVG logo
│   │   └── ScrollReveal.tsx # Intersection Observer animations
│   ├── data/             # Mock data (departments, faculty)
│   │   └── university.ts
│   ├── lib/              # Utility functions
│   │   └── ai.ts         # AI response matching and email generation
│   └── styles/           # Global styles
│       └── globals.css
├── public/               # Static assets
├── package.json
├── LICENSE.md            # Business Source License
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Roadmap

| Quarter | Theme | Key Deliverables |
|---------|-------|-----------------|
| Q1 | Launch and Core MVP | Keyword-to-email matching, admin dashboard, beta launch |
| Q2 | User Feedback and Expansion | NLP improvements, university portal integration, auto-suggestions |
| Q3 | Mobile and Analytics | Mobile-friendly version, admin analytics dashboard, user accounts |
| Q4 | Scalability and Optimization | Multi-department support, AI chatbot, final usability testing |

## Market Opportunity

- **TAM at Northeastern:** 35,000 students + 8,000 faculty/staff
- **Serviceable users:** ~22,050 active users
- **Revenue potential:** $88,200/year per university at $2/user/semester
- **Scale:** $4.41M/year across 50 universities

## Team

Built by **Team 9** at Northeastern University (EMGT 6700: Digital Product Design and Management, Spring 2025):

- **Riyan Abdul Salam** — Product Development and Engineering
- **Ashwini Kuthpadi Ramakantha** — Product Roadmap and Key Metrics
- **Shravya Sree Reddy Telakala** — Performance Analysis and Optimization
- **Shubham Sudhir Rajiwade** — Market Research and Feature Development

## License

This project is licensed under the [Business Source License 1.1](LICENSE.md). You may view, study, and use this code for non-commercial, educational, and portfolio purposes. Commercial use requires written permission from the author.

---

<p align="center">
  <sub>Built with care at Northeastern University. © 2025 OptiMail</sub>
</p>
