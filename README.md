# 🎬 Cineku

A modern web platform for showcasing, discovering, and interacting with Indonesian film creators.

---

## 🚀 Overview

Cineku is a full-stack web application designed to support Indonesian filmmakers by providing a platform to:

- Showcase film projects  
- Build professional portfolios  
- Discover new films  
- Interact with audiences  

This platform combines the concepts of:
- Instagram → social interaction  
- Netflix → film discovery  
- IMDb → creator portfolio  

---

## ✨ Features

- Google Authentication (NextAuth)
- User onboarding system
- Film showcase & discovery
- Like & comment system
- Smart search (film, creator, genre)
- Creator profile (portfolio style)
- Role-based system (User, Creator, Admin)
- Fully responsive UI (mobile & desktop)
- Modern UI (Netflix-inspired)

---

## 🛠️ Tech Stack

- Frontend: Next.js (App Router), React, TypeScript  
- Styling: Tailwind CSS  
- Backend: Next.js API Routes  
- Auth: NextAuth.js (Google OAuth)  
- Database: PostgreSQL  
- ORM: Prisma  
- API Communication: Axios / Fetch API  

---

## ⚙️ Core Systems

### Authentication
- Google OAuth login only  
- JWT-based session  
- Auto user creation  
- Onboarding after first login  

### Film System
- Film upload (metadata-based)  
- Genre & tagging system  
- SEO-friendly URLs  

### Interaction System
- Like, comment, and engagement  
- Protected API (requires login)  

### Creator System
- Professional creator profile  
- Portfolio-style display  

---

## 🧠 Architecture

Cineku uses modern Next.js features:

- App Router  
- Server & Client Components  
- API Route Handlers  
- Dynamic Routing (/film/[slug], /creator/[username])  
- Middleware / Proxy for route protection  

---

## 🗄️ Database

Managed using Prisma ORM + PostgreSQL

Main tables:
- users  
- creator_profiles  
- films  
- genres  
- comments  
- likes  
- follows  

---

## ⚡ Installation

git clone https://github.com/your-username/cineku.git  
cd cineku  
npm install  

---

## 🔐 Environment Variables

Create .env file:

DATABASE_URL=your_database_url  
NEXTAUTH_SECRET=your_secret  
GOOGLE_CLIENT_ID=your_google_client_id  
GOOGLE_CLIENT_SECRET=your_google_client_secret  

---

## ▶️ Run Locally

npx prisma generate  
npx prisma migrate dev  
npm run dev  

---

## 🌍 Deployment

Recommended:
- Vercel  

Optional:
- VPS (Linux + Nginx)
- Docker  

---

## 🚀 Roadmap

- AI Tag Generator  
- Recommendation system  
- Collaboration system (crew hiring)  
- Film festival mode  
- Monetization system  

---

## 👨‍💻 Author

Dafa Rizqy  
GitHub: https://github.com/MemoriesEndX  
Portfolio: https://tokodaffa.my.id/portofolio  
LinkedIn: https://linkedin.com/in/daffa-rizqy-738950237  

---

## 📄 License

This project is built for educational and portfolio purposes.