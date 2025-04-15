import mongoose from 'mongoose';
import { hash } from 'bcrypt';
import dbConnect from './models';

// Import models
import User from './models/user';
import PortfolioItem from './models/portfolio';
import SocialStats from './models/social';

// Sample data
const userData = {
  email: 'admin@dianaluvanda.com',
  password: 'diana2024', // This will be hashed
  name: 'Diana Luvanda',
  role: 'admin'
};

const portfolioData = [
  {
    title: 'Netflix Series - Country Queen',
    description: 'Played a supporting role in the first Kenyan Netflix series, Country Queen.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/country-queen-netflix-Gd2TyRUBRcZQbMDnWyMkODXMFDXpXA.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=CwcxrYMr2xo',
    date: new Date('2022-07-15'),
    featured: true,
    platform: 'Netflix',
    order: 1
  },
  {
    title: 'Showmax Drama - Pepeta',
    description: 'Featured in the Showmax original drama series Pepeta.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepeta-showmax-1lVRjMZJRLHqrpOdVFWOFHPZdYBRRt.jpg',
    date: new Date('2022-11-24'),
    featured: true,
    platform: 'Showmax',
    order: 2
  },
  {
    title: 'Fashion Week Kenya',
    description: 'Walked the runway for top designers at Fashion Week Kenya.',
    category: 'modeling',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-week-kenya-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    date: new Date('2023-03-18'),
    featured: true,
    order: 1
  },
  {
    title: 'TikTok Brand Campaign - Coca Cola',
    description: 'Led a viral TikTok campaign for Coca Cola reaching over 2 million views.',
    category: 'influencing',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-campaign-coca-cola-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    videoUrl: 'https://www.tiktok.com/@dianaluvanda/video/123456789',
    date: new Date('2023-06-12'),
    featured: true,
    platform: 'TikTok',
    order: 1
  },
  {
    title: 'Event Host - Nairobi Fashion Gala',
    description: 'Served as the main presenter for the annual Nairobi Fashion Gala.',
    category: 'presenting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nairobi-fashion-gala-host-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    date: new Date('2023-09-30'),
    featured: true,
    order: 1
  }
];

const socialStatsData = [
  {
    platform: 'instagram',
    followers: 125000,
    handle: '@dianaluvanda',
    url: 'https://instagram.com/dianaluvanda',
    icon: 'instagram'
  },
  {
    platform: 'tiktok',
    followers: 250000,
    handle: '@dianaluvanda',
    url: 'https://tiktok.com/@dianaluvanda',
    icon: 'tiktok'
  },
  {
    platform: 'youtube',
    followers: 50000,
    handle: 'Diana Luvanda',
    url: 'https://youtube.com/c/dianaluvanda',
    icon: 'youtube'
  },
  {
    platform: 'twitter',
    followers: 35000,
    handle: '@dianaluvanda',
    url: 'https://twitter.com/dianaluvanda',
    icon: 'twitter'
  }
];

// Seed function
export async function seedDatabase() {
  try {
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Connected to database');

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await PortfolioItem.deleteMany({});
    await SocialStats.deleteMany({});
    console.log('Existing data cleared');

    // Create admin user
    console.log('Creating admin user...');
    const hashedPassword = await hash(userData.password, 10);
    await User.create({
      ...userData,
      password: hashedPassword
    });
    console.log('Admin user created');

    // Create portfolio items
    console.log('Creating portfolio items...');
    await PortfolioItem.insertMany(portfolioData);
    console.log('Portfolio items created');

    // Create social stats
    console.log('Creating social stats...');
    await SocialStats.insertMany(socialStatsData);
    console.log('Social stats created');

    console.log('Database seeded successfully!');
    return { success: true };
  } catch (error) {
    console.error('Error seeding database:', error);
    return { success: false, error };
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log('Database connection closed');
  }
}

// If this file is run directly (not imported)
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Seed script failed:', error);
      process.exit(1);
    });
}
