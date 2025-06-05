# 📘 JEE Main Chapter-wise PYQ Explorer

A responsive, theme-aware, chapter-wise Previous Year Questions (PYQ) explorer for JEE Main, built using **Next.js (App Router)**, **Tailwind CSS**, **Redux**, **shadcn/ui**, and **Framer Motion**.

## ✨ Features

- 🔄 **Tab-based Subject Navigation** — Switch between Physics, Chemistry, and Mathematics with smooth transitions.
- 🧭 **Filters** — Multi-select filters for:
  - Class
  - Units
  - Status (`Not Started`)
  - Weak Chapters (mock logic)
- 🔃 **Sorting Toggle** — Sort chapters based on criteria (e.g., name/questions).
- 🌗 **Dark Mode** — Theme switcher based on system preference or manual toggle.
- 📱 **Fully Responsive** — Smooth experience across all screen sizes.
- 📊 **Data-Driven UI** — Dynamically renders chapter stats from mock JSON.
- 🎨 **Pixel-Perfect UI** — UI closely follows the Figma design with accurate colors, typography, spacing, and layout.
- 🧩 **Chapter Icons** — Icons assigned from [Phosphor Icons](https://phosphoricons.com/) randomly to each chapter.
- 🚀 **Smooth Animations** — Built-in page transitions and animated components using **Framer Motion**.
- 📂 **Subject-based Routing** — Separate pages for Physics, Chemistry, and Mathematics.

---

## 📂 Folder Structure


src/
├── app/ # Next.js App Router structure
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ └── providers.tsx # Theme & Redux providers
│
├── components/ # UI components
│ ├── Header/
│ ├── MainContent/
│ ├── Sidebar/
│ └── ui/ # Reusable UI components (buttons, icons, etc.)
│
├── contexts/ # Theme context (light/dark mode)
│ └── ThemeContext.tsx
│
├── Data/
│ └── data.ts # Mock JSON data
│
├── lib/
│ └── utils.ts # Utility functions
│
├── store/ # Redux store and slices
│ ├── slices/
│ └── store.ts
│
└── types/ # TypeScript types
└── index.ts



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jee-pyq-explorer.git
cd jee-pyq-explorer


### 2. Install Dependancies

npm install

### 3. Run the Development Server

npm run dev


### Tech Stack
Framework: Next.js (App Router)

Styling: Tailwind CSS

Components: shadcn/ui

Icons: Phosphor Icons

State Management: Redux Toolkit

Animations: Framer Motion

### Behavioral Requirements Implemented
Filters update count and list in real-time

"Weak Chapters" and "Not Started" apply mock logic filtering

All filters are multi-selectable

Sorting and visual indicators (arrows with colors) implemented

Extracted unique Classes & Units dynamically from data

Clean, reusable state management using Redux




###Deployment

Live URL (Vercel): https://mathango-frontend-task-omega.vercel.app/
