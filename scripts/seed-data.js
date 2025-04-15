// MongoDB Atlas Seed Script for Diana Luvanda Portfolio
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// MongoDB Atlas connection string
const MONGODB_URI = "mongodb+srv://dianaluvanda:WhLgW1glrv92D2Qq@diana-luvanda-potfolio.g9incln.mongodb.net/?retryWrites=true&w=majority&appName=Diana-Luvanda-Potfolio";

// MongoDB client options with Stable API version
const clientOptions = { 
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  }
};

// Define schemas
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
});

const portfolioItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['acting', 'modeling', 'influencing', 'presenting'],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
  },
  platform: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const socialStatsSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    enum: ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook', 'linkedin'],
  },
  followers: {
    type: Number,
    required: true,
    default: 0,
  },
  handle: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const mediaSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
    enum: ['image', 'video', 'audio', 'document'],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnailUrl: String,
  category: String,
  tags: [String],
  uploadDate: {
    type: Date,
    default: Date.now
  },
  size: Number,
  duration: Number, // for videos/audio in seconds
  dimensions: {
    width: Number,
    height: Number
  }
});

const settingsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  value: mongoose.Schema.Types.Mixed,
  category: String,
  description: String,
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const logSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true
  },
  user: {
    type: String
  },
  details: mongoose.Schema.Types.Mixed,
  timestamp: {
    type: Date,
    default: Date.now
  },
  ipAddress: String,
  userAgent: String
});

// Create models
const User = mongoose.model('User', userSchema);
const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);
const SocialStats = mongoose.model('SocialStats', socialStatsSchema);
const Media = mongoose.model('Media', mediaSchema);
const Settings = mongoose.model('Settings', settingsSchema);
const Log = mongoose.model('Log', logSchema);

// Import seed data
const { 
  userData, 
  portfolioData, 
  socialStatsData, 
  mediaData,
  settingsData,
  logData
} = require('./seed-data-content');

// Seed function
async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI, clientOptions);
    console.log('Connected to MongoDB Atlas');

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await PortfolioItem.deleteMany({});
    await SocialStats.deleteMany({});
    await Media.deleteMany({});
    await Settings.deleteMany({});
    await Log.deleteMany({});
    console.log('Existing data cleared');

    // Create admin users
    console.log('Creating admin users...');
    for (const user of userData) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await User.create({
        ...user,
        password: hashedPassword
      });
    }
    console.log('Admin users created');

    // Create portfolio items
    console.log('Creating portfolio items...');
    await PortfolioItem.insertMany(portfolioData);
    console.log('Portfolio items created');

    // Create social stats
    console.log('Creating social stats...');
    await SocialStats.insertMany(socialStatsData);
    console.log('Social stats created');

    // Create media entries
    console.log('Creating media entries...');
    await Media.insertMany(mediaData);
    console.log('Media entries created');

    // Create settings
    console.log('Creating settings...');
    await Settings.insertMany(settingsData);
    console.log('Settings created');

    // Create logs
    console.log('Creating logs...');
    await Log.insertMany(logData);
    console.log('Logs created');

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

// Export the seed function
module.exports = { seedDatabase };
