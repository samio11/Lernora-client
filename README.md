
# Lernora Client

A modern **online course platform** built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **shadcn/ui** components. This repository contains the client-side application that interacts with a backend API to manage courses, upload media, and provide an interactive learning experience.

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cba37ad3-efc5-4f24-942d-fc0d5a9dbbc9" />

## 🌐 Live Link
```
https://lernora-client.vercel.app/
```
## ✨ Features

- **Course Management** – List, view, add, and delete courses.
- **Rich Media Upload** – Drag‑and‑drop image and video upload components with preview.
- **Responsive UI** – Mobile‑first design using Tailwind CSS and DaisyUI.
- **Accessible Components** – Built with Radix UI primitives and shadcn/ui patterns.
- **Server Actions & Revalidation** – Optimized data fetching with Next.js server actions and tag‑based cache invalidation.
- **Theming** – Light/Dark mode support via `next-themes`.
- **Toast Notifications** – Friendly feedback using `sonner`.
- **Form Validation** – Powered by `react-hook-form` and `zod`.

---

## 🛠️ Tech Stack

| Category | Tools & Libraries |
|----------|-------------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript, React 19 |
| **Styling** | Tailwind CSS 4, DaisyUI, shadcn/ui |
| **State / Forms** | React Hook Form, Zod |
| **UI Components** | Radix UI, lucide-react |
| **Notifications** | Sonner |
| **File Upload** | Custom `use-file-upload` hook |
| **Testing** | (Not yet added) |
| **Deployment** | Vercel (recommended) |

---

## 📂 Project Structure

```
├── .gitignore
├── README.md
├── components.json          # shadcn/ui config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── quiz
│   │       └── page.tsx
│   ├── components
│   │   ├── Course
│   │   │   └── AddCourseModal.tsx
│   │   ├── Home
│   │   │   ├── CourseCard.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── shared
│   │   │   ├── SIngleImageUploader.tsx
│   │   │   └── SingleVideoUploader.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       └── textarea.tsx
│   ├── hooks
│   │   └── use-file-upload.ts
│   ├── lib
│   │   └── utils.ts
│   ├── services
│   │   └── course
│   │       └── course.services.ts
│   └── type
│       └── course.interface.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **npm** / **yarn** / **pnpm** / **bun**
- Access to the **Lernora backend API** (set `NEXT_PUBLIC_BACKEND` in a `.env.local` file)

### Installation

```bash
# Clone the repo
git clone https://github.com/samio11/Lernora-client.git
cd Lernora-client

# Install dependencies (choose your package manager)
npm install      # or yarn, pnpm, bun
```

### Environment Variables

Create a `.env.local` file at the project root:

```
NEXT_PUBLIC_BACKEND=https://your-backend-url.com/api
```

### Running the Development Server

```bash
npm run dev      # or yarn dev, pnpm dev, bun dev
```

Open **http://localhost:3000** in your browser. The page will auto‑reload as you edit files.

### Building for Production

```bash
npm run build    # creates an optimized production build
npm start        # serves the built app
```

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts the Next.js development server with hot reloading. |
| `build` | Compiles the app for production. |
| `start` | Runs the production build locally. |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes and push to your fork.
4. Open a Pull Request against the `main` branch.

Please ensure your code follows the existing linting and formatting conventions.

---

## 📄 License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 🙏 Acknowledgements

- **Next.js** – React framework for production.
- **shadcn/ui** – Component library that powers the UI.
- **Radix UI** – Accessible primitives.
- **Tailwind CSS** – Utility‑first CSS framework.
- **Sonner** – Elegant toast notifications.

Enjoy building with Lernora! 🎓
