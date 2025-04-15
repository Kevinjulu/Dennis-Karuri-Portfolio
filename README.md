# Diana Luvanda Portfolio

<div align="center">
  <img src="public/images/diana-profile.jpg" alt="Diana Luvanda" width="200" style="border-radius: 10px;"/>
  
  [![Deployment Status](https://img.shields.io/badge/deployment-cloudflare-F38020?style=for-the-badge&logo=cloudflare)](https://diana-luvanda-portfolio.pages.dev)
  [![Next.js](https://img.shields.io/badge/next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![MongoDB](https://img.shields.io/badge/mongodb-atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/atlas/database)
</div>

A modern, responsive portfolio website for Diana Luvanda, showcasing her work as an actress, model, and digital content creator. Built with Next.js 14, Tailwind CSS, and MongoDB Atlas, featuring a secure admin dashboard for content management.

## 🌟 Features

- 🎨 Modern, responsive design with dark/light mode
- 🚀 Fast page loads with Next.js 14 App Router
- 💅 Beautiful animations with Framer Motion
- 🎭 Dynamic content management with MongoDB Atlas
- 📱 Mobile-first approach
- 🔒 Secure admin dashboard with JWT authentication
- 🖼️ Optimized image loading
- 🎬 YouTube video embeds
- 🌓 Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- **Authentication:** JWT with bcrypt
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 📦 Project Structure

```
diana-luvanda-portfolio/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components from shadcn
│   └── sections/         # Page sections
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── mongodb.ts       # MongoDB client
├── public/              # Static assets
│   └── images/          # Image assets
├── styles/              # Global styles
└── supabase/           # Supabase configurations
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kevinjulu/Diana-Luvanda-Portfolio.git
   cd Diana-Luvanda-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your MongoDB Atlas credentials in `.env.local`

4. **Seed the database**
   ```bash
   npm run seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 🔒 Environment Variables

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net/diana-portfolio?retryWrites=true&w=majority

# JWT Secret for Authentication
JWT_SECRET=your-secret-jwt-key-change-this-in-production
```

## 📦 MongoDB Setup

1. Create a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) account
2. Create a new cluster and database
3. Add your IP address to the IP access list
4. Create a database user with read/write permissions
5. Get your connection string and add it to `.env.local`
6. Run `npm run seed` to populate your database with initial data

## 🔐 Admin Access

After seeding the database, you can log in to the admin dashboard with:

- **Email:** admin@dianaluvanda.com
- **Password:** diana2024

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Diana Luvanda**
- Website: [diana-luvanda-portfolio.pages.dev](https://diana-luvanda-portfolio.pages.dev)
- LinkedIn: [@dianaluvanda](https://www.linkedin.com/in/dianaluvanda/)

---

<div align="center">
  Made with ❤️ by Kevin Julu
</div>
