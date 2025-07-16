# Dennis Karuri Portfolio

<img src="public/images/Karuri (1).jpg" alt="Dennis Karuri" width="200" style="border-radius: 10px;"/>

## Overview

A modern, responsive portfolio website for Dennis Karuri, a renowned Kenyan makeup artist, beauty influencer, and creative visionary. This platform showcases his exceptional work in makeup artistry, brand collaborations, and digital content creation. Built with cutting-edge web technologies and designed for optimal user experience.

## 🌟 Key Features

- 🎨 Modern, responsive design with dark/light mode support
- 🚀 Lightning-fast page loads with Next.js 14 App Router
- 💅 Stunning animations powered by Framer Motion
- 🎭 Dynamic content management system
- 📱 Mobile-first design approach
- 🔒 Secure admin dashboard
- 🖼️ Advanced image optimization and lazy loading
- 🎬 Integrated video player with custom controls
- 🌓 Smooth transitions and micro-interactions
- 📊 Real-time analytics tracking
- 📧 Contact form with email notifications
- 🔍 SEO optimized with meta tags and OpenGraph
- 📦 PWA support for offline access

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Styling:** 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn/ui](https://ui.shadcn.com/)
  - [Framer Motion](https://www.framer.com/motion/)
- **Database & Storage:** 
  - [MongoDB](https://www.mongodb.com/) with Mongoose
  - [Supabase](https://supabase.com/) for media storage
- **Authentication:** JWT with bcrypt
- **Content Management:**
  - Custom CMS with MongoDB
  - Media management system
- **Performance:**
  - [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
  - [Sharp](https://sharp.pixelplumbing.com/) for image processing
- **UI Components:**
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide Icons](https://lucide.dev/)
- **Form Handling:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/) for validation
- **Analytics:**
  - [Vercel Analytics](https://vercel.com/analytics)
  - [Speed Insights](https://vercel.com/docs/speed-insights)
- **Development Tools:**
  - TypeScript
  - ESLint
  - Prettier

## 📱 Features Breakdown

### Portfolio Showcase
- Dynamic portfolio grid with filtering
- Custom video player integration
- Image galleries with lazy loading
- Animated transitions between items

### Admin Dashboard
- Secure authentication system
- Content management interface
- Media upload and management
- Analytics dashboard
- Settings management

### User Experience
- Responsive navigation
- Dark/light mode toggle
- Loading states and animations
- Error boundaries
- Offline support

### Performance Optimizations
- Image optimization
- Code splitting
- Route prefetching
- Service worker caching
- Performance monitoring

## 🚀 Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file with the following:

```env
MONGODB_URI=your_mongodb_uri
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret
```

## 👨‍💻 Developer

Developed by [Kevin Julu (Ghost)](https://github.com/kevinjulu) - A passionate full-stack developer specializing in modern web applications and user experiences.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dennis Karuri for the opportunity to showcase his amazing work
- All the open-source projects that made this possible
- The creative community for inspiration
