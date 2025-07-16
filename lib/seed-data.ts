import mongoose from 'mongoose';
import { hash } from 'bcrypt';
import dbConnect from './models';

// Import models
import User from './models/user';
import PortfolioItem from './models/portfolio';
import SocialStats from './models/social';

// Sample data
const userData = {
  email: 'admin@denniskaruri.com',
  password: 'dennis2024', // This will be hashed
  name: 'Dennis Karuri',
  role: 'admin'
};

const portfolioData = [
  {
    title: 'Celebrity Makeup Transformation',
    description: 'Makeup transformation for a high-profile Kenyan celebrity for a magazine cover shoot.',
    category: 'makeup',
    imageUrl: '/images/Karuri (10).jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    date: new Date('2023-07-15'),
    featured: true,
    platform: 'Magazine',
    order: 1
  },
  {
    title: 'Bridal Makeup Masterclass',
    description: 'Hosted a sold-out masterclass teaching professional bridal makeup techniques.',
    category: 'teaching',
    imageUrl: '/images/Karuri (13).jpg',
    date: new Date('2023-11-24'),
    featured: true,
    platform: 'Workshop',
    order: 2
  },
  {
    title: 'Fashion Week Kenya',
    description: 'Lead makeup artist for multiple designers at Fashion Week Kenya.',
    category: 'fashion',
    imageUrl: '/images/Karuri (14).jpg',
    date: new Date('2024-03-18'),
    featured: true,
    order: 1
  },
  {
    title: 'Beauty Brand Collaboration',
    description: 'Collaborated with a major beauty brand to create a limited edition makeup collection.',
    category: 'influencing',
    imageUrl: '/images/Karuri (15).jpg',
    videoUrl: 'https://www.tiktok.com/@denniskaruri/video/123456789',
    date: new Date('2023-06-12'),
    featured: true,
    platform: 'TikTok',
    order: 1
  },
  {
    title: 'Celebrity Red Carpet Makeup',
    description: 'Created stunning red carpet looks for celebrities at the Nairobi Fashion Gala.',
    category: 'makeup',
    imageUrl: '/images/Karuri (16).jpg',
    date: new Date('2023-09-30'),
    featured: true,
    order: 1
  }
];

const socialStatsData = [
  {
    platform: 'instagram',
    followers: 238000,
    handle: '@_denniskaruri',
    url: 'https://instagram.com/_denniskaruri',
    icon: 'instagram'
  },
  {
    platform: 'tiktok',
    followers: 231500,
    handle: '@denniskaruri',
    url: 'https://tiktok.com/@denniskaruri',
    icon: 'tiktok'
  },
  {
    platform: 'facebook',
    followers: 13000,
    handle: 'Dennis Karuri',
    url: 'https://facebook.com/denniskaruri',
    icon: 'facebook'
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
