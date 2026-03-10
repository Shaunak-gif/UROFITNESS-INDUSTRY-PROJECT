# 🏋️ URO FITNESS — Premium Gym Website

Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

> Elite training. Premium design. Built Different.

---

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/uro-fitness.git
cd uro-fitness
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Customization — Edit ONE file for all content

All site content (phone, WhatsApp number, trainers, programs, stats, hours) lives in:

```
src/lib/constants.ts
```

| What to change         | Where                                           |
|------------------------|-------------------------------------------------|
| WhatsApp number        | `SITE_CONFIG.whatsappNumber` in constants.ts    |
| Phone / Email          | `SITE_CONFIG` in constants.ts                   |
| Trainer names & photos | `TRAINERS` array in constants.ts                |
| Stats (members etc.)   | `STATS` array in constants.ts                   |
| Programs               | `PROGRAMS` array in constants.ts                |
| Testimonials           | `TESTIMONIALS` array in constants.ts            |
| Business hours         | `BUSINESS_HOURS` array in constants.ts          |
| Google Maps location   | iframe src in `ContactForm.tsx`                 |
| Hero / bg images       | `src` attributes in each section component      |

---

## 🖼️ Adding Your Own Images

**Option 1 — Upload online (easiest):**
1. Go to [imgbb.com](https://imgbb.com) — free, no account needed
2. Upload your photo → copy the **Direct link**
3. Paste it into the relevant component replacing the Unsplash URL

**Option 2 — Local images:**
1. Drop your image into the `/public` folder
2. Reference it as `src="/your-image.jpg"` in the component

**Where images are used:**
| Image                  | File to edit                                  |
|------------------------|-----------------------------------------------|
| Hero background        | `src/components/sections/Hero.tsx`            |
| About page hero        | `src/app/about/page.tsx`                      |
| Contact page hero      | `src/app/contact/page.tsx`                    |
| Brand story photo      | `src/app/about/page.tsx`                      |
| Trainer photos         | `src/lib/constants.ts` → TRAINERS[].image     |

---

## 📁 Project Structure

```
uro-fitness/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout, fonts, SEO metadata
│   │   ├── page.tsx            ← Home page
│   │   ├── globals.css         ← Global styles & animations
│   │   ├── about/page.tsx      ← About page
│   │   └── contact/page.tsx    ← Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Navigation bar
│   │   │   └── Footer.tsx      ← Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Programs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ContactForm.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       ├── Marquee.tsx
│   │       └── SectionTag.tsx
│   └── lib/
│       └── constants.ts        ← ⚙️ Edit all content here
├── public/                     ← Drop your images here
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 🌐 Deploy to Vercel (Free, 60 seconds)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
3. Click **Add New Project** → select `uro-fitness`
4. Click **Deploy**

Every `git push` auto-deploys to your live URL. No extra steps needed.

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| Next.js 14     | React framework, App Router    |
| TypeScript     | Type safety                    |
| Tailwind CSS   | Utility-first styling          |
| Framer Motion  | Smooth animations              |
| Google Fonts   | Playfair Display, Bebas Neue   |
| WhatsApp API   | Contact form → wa.me link      |
| Google Maps    | Embedded location map          |

---

## 📞 Support

Built by Claude (Anthropic) for URO FITNESS, Pimpri, Pune.
