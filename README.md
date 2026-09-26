# FitLog

A dark, no-nonsense workout library and daily training planner. Browse exercises, build today's plan, track it as you go, and pick up right where you left off — even after a reload.

## Description

FitLog lets you explore a library of 12 workouts covering every major muscle group, dive into detailed instructions and stats for each, and build a daily training plan capped at 5 lifts. Saved and planned workouts persist across sessions, live counters keep the navbar in sync, and everything is fully responsive from mobile to desktop.

## Technologies Used

- **Next.js** (App Router) — routing and page structure
- **TypeScript** — type safety across components and data
- **Tailwind CSS** — styling and responsive layout
- **React Context API** — global state for plan/saved workouts
- **localStorage** — persisting plan/saved data across reloads
- **react-toastify** — toast notifications for user actions
- **lucide-react** — icon set
- **FitLog REST API** — workout data source

## Features

- **Workout Library** — browse all 12 workouts in a responsive 3×4 grid, each showing category tags, equipment, duration, calories, and rating
- **Workout Details** — full key-specs table (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions for every lift
- **Today's Plan** — add up to 5 workouts to a daily plan, capped and enforced, with live badge counters in the navbar
- **Save for Later** — bookmark workouts into a separate Saved list without adding them to today's plan
- **Sort & Track** — sort the library or your plan by duration, calories, or rating; mark planned workouts as done, remove items, and watch live metrics (exercises, minutes, calories) update instantly
- **Persistent State** — plan and saved data survive page reloads via localStorage
- **Fully Responsive** — optimized layouts for mobile, tablet, and desktop
- **Custom 404 Page** — graceful handling of unknown or invalid routes

## Live Demo

https://fit-log-three-silk.vercel.app/

---

© 2026 FitLog — Workout Library. Train hard, log honest.