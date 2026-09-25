<div align="center">

# 🏋️ FitLog — Workout Library

### *Train with intent. Log every set.*

A dark, no-nonsense gym companion built with Next.js — pick a lift, lock it into today's plan, and watch the week's work add up.

[![Live Demo](https://img.shields.io/badge/Live-Demo-b6f000?style=for-the-badge)](https://my-fit-log-app.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**[🔗 Live Website](https://my-fit-log-app.vercel.app/)**

</div>

---

## 📖 About The Project

**FitLog** is a modern, fully responsive workout tracking web app that helps users browse a curated library of exercises, build a daily workout plan, save lifts for later, and track their progress — all wrapped in a sleek, dark, gym-inspired UI. Built with the Next.js App Router, FitLog fetches live workout data from an external API and lets users manage their fitness routine without ever leaving the browser.

Whether you're planning today's session or bookmarking moves for next week, FitLog keeps your training organized, one set at a time.

---

## 🚀 Live Link

🔗 **[https://my-fit-log-app.vercel.app/](https://my-fit-log-app.vercel.app/)**

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **Next.js (App Router)** | Core framework — routing, server & client components |
| **React** | Component-based UI architecture |
| **TypeScript** | Type-safe development experience |
| **Tailwind CSS** | Utility-first styling & full responsiveness |
| **React Context API** | Global state management (Today's Plan & Saved items) |
| **React Toastify** | Toast notifications for user actions |
| **Lucide React** | Clean, consistent icon set |
| **Vercel** | Deployment & hosting |

---

## ✨ Key Features

### 1. 🧭 Fully Responsive, Dark-Themed UI
A pixel-matched, mobile-first design that adapts seamlessly across mobile, tablet, and desktop — from the navbar and hero banner down to the exercise grid and detail pages.

### 2. 📚 Dynamic Workout Library
Browse a live-fetched collection of exercises displayed as rich cards — each showing an image, muscle-group tags, equipment, duration, calories burned, and rating — arranged in a responsive 3-column grid.

### 3. 🗂️ Today's Plan & Saved Tabs
Add any workout to **Today's Plan** or **Save for Later** with a single click. Both lists live in a global Context, update instantly, and persist across the app — complete with duplicate-prevention logic and toast confirmations.

### 4. 📊 Live Stats & Smart Sorting
The **My Plan** page shows real-time totals for exercises, minutes, and calories, plus a **Sort By** dropdown (Duration / Calories / Rating) that instantly re-orders your list — no page reload needed.

### 5. 🔔 Real-Time Navbar Badges & Toast Feedback
The navbar's **Plan** and **Saved** counters update live as you add workouts, and every key action (add, save, remove, mark as done) triggers a clear toast notification — keeping the experience transparent and satisfying.

---

## 🖥️ Pages Overview

| Route | Description |
|---|---|
| `/` | Home — Hero banner + full workout library grid |
| `/exercises/[id]` | Workout Detail — full specs, instructions, and action buttons |
| `/my-plan` | My Plan — Today's Plan & Saved tabs with live stats |
| `*` | Custom 404 page for unknown routes |

---

## 📱 Responsive Breakpoints

FitLog is designed mobile-first and tested across:

- 📱 **Mobile** (< 640px)
- 📟 **Tablet** (640px – 1024px)
- 🖥️ **Desktop** (1024px+)

---

## 🎨 Design Highlights

- Dark, high-contrast theme (`#0d0d0d` / `#1a1a1a`) with a signature lime-green (`#b6f000`) accent
- Bold, uppercase display typography for headings
- Pill-shaped badges, buttons, and tab toggles throughout
- Smooth anchor-scroll from the hero CTA straight to the workout library

---

## 📸 Preview

> 🏠 **Home** — Hero banner + The Library grid
> 🔍 **Workout Detail** — Two-column layout with specs & instructions
> 📋 **My Plan** — Stats summary, tabs, and sortable workout list

*(Add your own screenshots or a GIF walkthrough here!)*

---

## ⚙️ Getting Started Locally

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd fitlog

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🙌 Acknowledgements

Built as part of a frontend development assignment, focused on API integration, global state management, and pixel-accurate responsive UI implementation with Next.js.

---

<div align="center">

**FitLog** — *Train hard, log honest.*

⭐ If you like this project, consider giving it a star!

</div>
