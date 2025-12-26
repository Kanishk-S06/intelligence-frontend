# 🎨 Inventory Intelligence – Frontend

This repository contains the **frontend application** for the Inventory Intelligence system.
It provides a clean, responsive user interface for managing inventory, viewing reorder insights,
and interacting with the backend services.

The frontend is built with a focus on **usability, clarity, and real-world workflows**.

---

## 🚀 Features

- Home / Landing page
- User authentication (Login & Register)
- Auth-protected dashboard
- Inventory management UI
- CSV-based inventory import (modal-based UX)
- Reorder insights with explainable logic
- Auth-aware navigation bar
- Responsive and clean UI

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Auth Handling:** JWT (via backend API)
- **Deployment:** Vercel

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── page.tsx        # Home
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   ├── inventory/
│   └── reorder/
├── components/         # Reusable UI components
├── lib/                # API & auth helpers
└── styles/
```

---

## 🔐 Authentication Flow

- Users can register and login via backend APIs
- JWT is stored in localStorage
- Protected routes redirect unauthenticated users
- Logged-in users are redirected away from public pages

---

## 📦 Inventory Management

Users can:
- View all products
- Add new products via modal
- Bulk upload inventory using CSV
- View stock levels and reorder points

CSV upload is handled through a dialog-based interface for better UX.

---

## 🔁 Reorder Insights

The Reorder page displays:
- Average daily sales
- Current stock
- Lead time
- Recommended reorder quantity
- Clear explanation for each recommendation

This ensures transparency and trust in system decisions.

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=https://<backend-url>
```

---

## ▶️ Running Locally

```
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## ☁️ Deployment

The frontend is designed to be deployed on **Vercel**.

Deployment steps:
- Connect GitHub repository to Vercel
- Add environment variables
- Deploy

---

## 🧠 Design Philosophy

- Simple and intuitive UI
- Minimal cognitive load
- Clear separation of public and protected routes
- Business-friendly workflows over flashy design

---

## 📌 Note

This frontend works in conjunction with the Inventory Intelligence backend service.
The backend is deployed separately and exposed via REST APIs.

---

## 📄 License

This project was built as part of a technical assignment and is intended for evaluation purposes.
