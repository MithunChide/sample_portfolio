# Mithun Chide - Personal Portfolio Website

A premium, modern, fully responsive, and accessible personal portfolio website built using React, Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Key Features

- **2026 Sleek Glassmorphism UI**: Beautiful gradients, interactive layout components, and custom card hover animations.
- **Client-Side Theme Toggling**: Seamless light/dark mode configuration persisted in local storage.
- **Section Highlighting Navigation**: Active navigation item trackers highlighting the active viewport section.
- **Full Responsiveness**: Custom grid designs adapting cleanly from small mobile viewports up to large desktop monitors.
- **Performance Optimized**: Built using dynamic components and standard tree splitting yielding high Core Web Vitals scores.
- **Accessibility (WCAG 2.1 AA Compliant)**: Full keyboard navigation traps and semantic ARIA components.
- **Direct Interactive Messaging**: Form state hooks simulating direct messages with success confirmation alerts.

---

## 🛠️ Folder Structure

```
.
├── legacy_backup/         # Backup of original static template files
├── public/                # Static assets (images, icons, resumes)
└── src/
    ├── app/
    │   ├── globals.css    # Custom variables, dark theme variables, & scrollbars
    │   ├── layout.tsx     # Root Shell, Font loader, & SEO Metadata
    │   └── page.tsx       # Portfolio page assembly
    └── components/        # Fully modular React UI components
        ├── ThemeContext.tsx # Context provider managing dark/light modes
        ├── Navbar.tsx     # Responsive menu with scroll trackers
        ├── Hero.tsx       # Header introduction and Code Mockup card
        ├── About.tsx      # Overview, key metrics grid, & skills indicators
        ├── Skills.tsx     # Category tab panels and proficiency meters
        ├── Experience.tsx # Timeline listing Epsilon accomplishments
        ├── Projects.tsx   # Detailed project grids with accordion detail views
        ├── EducationCertifications.tsx # B.Tech degree & certificates verify
        ├── Testimonials.tsx # Feedback cards representing colleague highlights
        ├── Contact.tsx    # Details cards and direct feedback submission form
        └── Footer.tsx     # Back to top triggers, links, and copyrights
```

---

## 💻 Getting Started

### 1. Installation
Install project dependencies from the package manifest:
```bash
npm install
```

### 2. Run Locally
Launch the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Build & Production Check
Compile TypeScript types and export a production-optimized package:
```bash
npm run build
```
Start the production server:
```bash
npm start
```
