# 🏋️ URO FITNESS

> **Premium Gym Website — Built with Next.js 14, Tailwind CSS & Framer Motion**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-ff69b4?style=flat-square&logo=framer)](https://framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

![URO FITNESS Banner](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Adding Images](#-adding-your-own-images)
- [Changing WhatsApp Number](#-changing-whatsapp-number)
- [Changing Map Location](#-changing-map-location)
- [Deploying to Vercel](#-deploying-to-vercel)
- [Running Again](#-running-the-project-again)

---

## 🧠 Overview

**URO FITNESS** is a fully production-ready, multi-page gym website built for a premium fitness brand based in Pimpri, Pune. It features a cinematic black-and-yellow design, smooth Framer Motion animations, a WhatsApp-integrated contact form, and a real Google Maps embed.

---

## 🌐 Live Demo

> Deploy to Vercel and paste your live URL here.

---

## 🛠 Tech Stack

| Technology       | Purpose                              | Version  |
|------------------|--------------------------------------|----------|
| Next.js          | React Framework (App Router)         | 14.2.5   |
| TypeScript       | Type Safety                          | ^5.0     |
| Tailwind CSS     | Utility-first Styling                | ^3.4.1   |
| Framer Motion    | Animations & Transitions             | ^11.3.8  |
| Google Fonts     | Playfair Display, Bebas Neue, Barlow | CDN      |
| WhatsApp API     | Contact Form (wa.me deep link)       | —        |
| Google Maps      | Embedded Location Map                | —        |

---

## ✨ Features

- ⚡ **Blazing Fast** — Next.js App Router with static generation
- 🎬 **Cinematic Design** — Black & yellow luxury gym aesthetic
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes
- 🖱️ **Custom Cursor** — Magnetic yellow dot cursor with ring follow effect
- 🔢 **Animated Stats** — Number counter animation on scroll
- 💬 **WhatsApp Form** — Contact form sends pre-filled message directly to WhatsApp
- 🗺️ **Google Maps** — Embedded dark-themed location map
- 🎭 **Framer Motion** — Smooth scroll reveals, staggered animations
- 📜 **Marquee Ticker** — Auto-scrolling brand marquee
- 🔍 **SEO Ready** — Meta tags, Open Graph, page titles per route
- 🌙 **Dark Mode Default** — Designed for dark theme from ground up

---

## 📁 Project Structure

```
uro-fitness/
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← Root layout, fonts, SEO metadata
│   │   ├── page.tsx                ← Home page
│   │   ├── globals.css             ← Global styles & keyframe animations
│   │   ├── about/
│   │   │   └── page.tsx            ← About page
│   │   └── contact/
│   │       └── page.tsx            ← Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          ← Sticky navbar with mobile menu
│   │   │   └── Footer.tsx          ← Footer with links & socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx            ← Full-screen hero with zoom bg
│   │   │   ├── Stats.tsx           ← Animated number counters
│   │   │   ├── Programs.tsx        ← Training program cards
│   │   │   ├── Testimonials.tsx    ← Horizontal scroll testimonials
│   │   │   └── ContactForm.tsx     ← WhatsApp form + map + hours
│   │   └── ui/
│   │       ├── CustomCursor.tsx    ← Magnetic cursor effect
│   │       ├── Marquee.tsx         ← Auto-scrolling ticker
│   │       ├── SectionTag.tsx      ← Reusable section label
│   │       └── PageLoader.tsx      ← Cinematic page loader
│   └── lib/
│       └── constants.ts            ← ⚙️ All site content lives here
├── public/                         ← Drop your images here
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed.
Download it from [nodejs.org](https://nodejs.org) (LTS version recommended).

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/uro-fitness.git
cd uro-fitness
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:3000
```

---

## ⚙️ Customization Guide

All website content — phone number, WhatsApp, trainers, stats, programs, testimonials, hours — is stored in **one single file:**

```
src/lib/constants.ts
```

Open that file and edit anything. Changes reflect across the entire site automatically.

| What to Change         | Location in `constants.ts`        |
|------------------------|-----------------------------------|
| WhatsApp number        | `SITE_CONFIG.whatsappNumber`      |
| Phone number           | `SITE_CONFIG.phone`               |
| Email address          | `SITE_CONFIG.email`               |
| Gym address            | `SITE_CONFIG.address`             |
| Social media links     | `SITE_CONFIG.socials`             |
| Stats (members etc.)   | `STATS` array                     |
| Training programs      | `PROGRAMS` array                  |
| Testimonials           | `TESTIMONIALS` array              |
| Trainer names & photos | `TRAINERS` array                  |
| Equipment list         | `EQUIPMENT` array                 |
| Business hours         | `BUSINESS_HOURS` array            |

---

## 🖼️ Adding Your Own Images

### Option 1 — Upload Online (Easiest, No Code)
1. Go to [imgbb.com](https://imgbb.com) — free, no account needed
2. Upload your gym photo
3. Copy the **Direct link** (e.g. `https://i.ibb.co/abc123/gym.jpg`)
4. Paste it into the relevant component replacing the Unsplash URL

### Option 2 — Local Images
1. Drop your image file into the `/public` folder
2. Reference it as `/your-image.jpg` in the component

### Where Each Image Is Used

| Image                  | File to Edit                                    |
|------------------------|-------------------------------------------------|
| Hero background        | `src/components/sections/Hero.tsx`              |
| About page background  | `src/app/about/page.tsx`                        |
| Contact page background| `src/app/contact/page.tsx`                      |
| Brand story photo      | `src/app/about/page.tsx`                        |
| Trainer photos         | `src/lib/constants.ts` → `TRAINERS[].image`     |

---

## 💬 Changing WhatsApp Number

Open `src/lib/constants.ts` and find:

```ts
whatsappNumber: "919876543210",
```

Replace `919876543210` with your number:
- Format: **country code + number** with no `+`, spaces, or dashes
- Example for India (+91): `919876543210`
- Example for US (+1): `11234567890`

---

## 🗺️ Changing Map Location

1. Go to [maps.google.com](https://maps.google.com)
2. Search your exact gym address
3. Click **Share** → **Embed a map** → Copy the `<iframe>` code
4. Open `src/components/sections/ContactForm.tsx`
5. Find the `<iframe>` tag and replace the `src="..."` URL with your copied one

---

## 🌐 Deploying to Vercel

Deploy your site live in under 60 seconds — **free forever** for personal projects.

**Step 1** — Push your code to GitHub:
```bash
git init
git add .
git commit -m "🏋️ URO FITNESS — initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/uro-fitness.git
git push -u origin main
```

**Step 2** — Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New Project** → Select `uro-fitness`
4. Click **Deploy**

✅ Your site is live. Every `git push` auto-deploys the latest version.

---

## 🔁 Running the Project Again

Every time you want to run the website locally:

1. Open your project folder in **File Explorer**
2. Click the address bar → type `cmd` → press **Enter**
3. Run:
```bash
npm run dev
```
4. Open browser → go to `http://localhost:3000`

> `npm install` only needs to be run **once**. After that, always just `npm run dev`.

---

## 📜 Available Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start development server           |
| `npm run build` | Build for production               |
| `npm run start` | Start production server            |
| `npm run lint`  | Run ESLint checks                  |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for your business.

---

<div align="center">

Built with ❤️ for **URO FITNESS**, Pune 🏋️

</div>
