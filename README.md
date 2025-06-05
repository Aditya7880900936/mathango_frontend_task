
# 📘 JEE Main Chapter-wise PYQ Explorer

A responsive, theme-aware, chapter-wise Previous Year Questions (PYQ) explorer for JEE Main, built using **Next.js (App Router)**, **Tailwind CSS**, **Redux Toolkit**, **shadcn/ui**, and **Framer Motion**.

---

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
- 🎨 **Pixel-Perfect UI** — Matches the Figma design with accurate colors, spacing, and layout.
- 🧩 **Chapter Icons** — Randomly assigned icons from [Phosphor Icons](https://phosphoricons.com/) for each chapter.
- 🚀 **Smooth Animations** — Transitions and interactions enhanced using **Framer Motion**.
- 📂 **Subject-based Routing** — Separate pages for Physics, Chemistry, and Mathematics.

---

## 📂 Folder Structure

```
src/
├── app/                     # Next.js App Router structure
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx        # Theme & Redux providers
│
├── components/              # UI components
│   ├── Header/
│   ├── MainContent/
│   ├── Sidebar/
│   └── ui/                  # Reusable UI components
│
├── contexts/                # Theme context (light/dark mode)
│   └── ThemeContext.tsx
│
├── Data/
│   └── data.ts              # Mock JSON data
│
├── lib/
│   └── utils.ts             # Utility functions
│
├── store/                   # Redux store and slices
│   ├── slices/
│   └── store.ts
│
└── types/                   # TypeScript types
    └── index.ts
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jee-pyq-explorer.git
cd jee-pyq-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧱 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Phosphor Icons
- **State Management**: Redux Toolkit
- **Animations**: Framer Motion

---

## ✅ Behavioral Requirements Implemented

- ✅ Filters update chapter count and list in real-time
- ✅ "Weak Chapters" and "Not Started" filters use mock logic
- ✅ All filters are multi-selectable
- ✅ Sorting toggle with visual indicators (arrows + color)
- ✅ Dynamic extraction of unique Classes & Units from data
- ✅ Clean, reusable state management with Redux Toolkit

---

## 🌍 Deployment

Live URL (Vercel):  
👉 [https://mathango-frontend-task-omega.vercel.app/](https://mathango-frontend-task-omega.vercel.app/)

---

## 📜 License

This project was developed for a frontend internship task. All assets are for evaluation/demo purposes only.

---
