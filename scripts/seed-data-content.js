// Seed data content for Dennis Karuri Portfolio

// Admin users
const userData = [
  {
    email: 'admin@dianaluvanda.com',
    password: 'diana2024',
    name: 'Diana Luvanda',
    role: 'admin'
  },
  {
    email: 'editor@dianaluvanda.com',
    password: 'editor2024',
    name: 'Content Editor',
    role: 'editor'
  }
];

// Portfolio items
const portfolioData = [
  // Acting Projects
  {
    title: 'Netflix Series - Country Queen',
    description: 'Played a supporting role in the first Kenyan Netflix series, Country Queen. The drama explores the clash between a mining company and the rural community that faces exploitation.',
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
    description: 'Featured in the Showmax original drama series Pepeta, a gritty coming-of-age story about a young footballer who gets ensnared in the criminal world.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepeta-showmax-1lVRjMZJRLHqrpOdVFWOFHPZdYBRRt.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2022-11-24'),
    featured: true,
    platform: 'Showmax',
    order: 2
  },
  {
    title: 'Maisha Magic Drama - Selina',
    description: 'Recurring role in the popular Kenyan telenovela Selina, which follows the story of a young girl whose life changes dramatically after meeting a wealthy family.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selina-maisha-magic-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2021-06-10'),
    featured: false,
    platform: 'Maisha Magic East',
    order: 3
  },
  {
    title: 'Feature Film - Disconnect',
    description: 'Supporting role in the Kenyan romantic comedy film Disconnect, which explores the complexities of modern relationships in urban Nairobi.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disconnect-film-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2020-09-05'),
    featured: false,
    platform: 'Theatrical Release',
    order: 4
  },
  {
    title: 'TV Commercial - Safaricom',
    description: 'Lead actress in a national TV commercial for Safaricom, Kenya\'s largest telecommunications provider, showcasing their new mobile money service.',
    category: 'acting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safaricom-commercial-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2023-01-15'),
    featured: true,
    platform: 'National Television',
    order: 5
  },

  // Modeling Projects
  {
    title: 'Fashion Week Kenya',
    description: 'Walked the runway for top designers at Fashion Week Kenya, showcasing the latest collections from both established and emerging African designers.',
    category: 'modeling',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-week-kenya-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    date: new Date('2023-03-18'),
    featured: true,
    order: 1
  },
  {
    title: 'Vogue Africa Cover Shoot',
    description: 'Featured on the cover of Vogue Africa\'s special edition highlighting emerging talent in the African fashion and entertainment industry.',
    category: 'modeling',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vogue-africa-cover-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    date: new Date('2022-12-01'),
    featured: true,
    platform: 'Vogue Africa',
    order: 2
  },
  {
    title: 'Fenty Beauty Campaign',
    description: 'Selected as one of the faces for Fenty Beauty\'s expansion into the East African market, representing the brand\'s commitment to diversity and inclusion.',
    category: 'modeling',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fenty-beauty-campaign-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    date: new Date('2023-05-20'),
    featured: true,
    platform: 'Fenty Beauty',
    order: 3
  },
  {
    title: 'Nike Sportswear Lookbook',
    description: 'Featured in Nike\'s seasonal lookbook showcasing their sportswear collection designed specifically for the African market.',
    category: 'modeling',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nike-sportswear-lookbook-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    date: new Date('2022-08-15'),
    featured: false,
    platform: 'Nike',
    order: 4
  },

  // Influencing Projects
  {
    title: 'TikTok Brand Campaign - Coca Cola',
    description: 'Led a viral TikTok campaign for Coca Cola reaching over 2 million views, creating engaging content that resonated with the youth market in East Africa.',
    category: 'influencing',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-campaign-coca-cola-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    videoUrl: 'https://www.tiktok.com/@dianaluvanda/video/123456789',
    date: new Date('2023-06-12'),
    featured: true,
    platform: 'TikTok',
    order: 1
  },
  {
    title: 'Instagram Partnership - Samsung',
    description: 'Partnered with Samsung for the launch of their new Galaxy smartphone, creating a series of lifestyle content showcasing the device\'s camera capabilities.',
    category: 'influencing',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram-partnership-samsung-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    date: new Date('2023-04-05'),
    featured: true,
    platform: 'Instagram',
    order: 2
  },
  {
    title: 'YouTube Series - "A Day in My Life"',
    description: 'Created and hosted a popular YouTube series giving viewers a behind-the-scenes look at my life as an actress and model, with episodes regularly exceeding 500,000 views.',
    category: 'influencing',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-series-day-in-my-life-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2022-10-10'),
    featured: true,
    platform: 'YouTube',
    order: 3
  },
  {
    title: 'Travel Content Partnership - Kenya Tourism Board',
    description: 'Collaborated with the Kenya Tourism Board to create content showcasing Kenya\'s top destinations, helping to promote domestic tourism post-pandemic.',
    category: 'influencing',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travel-content-kenya-tourism-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    date: new Date('2023-02-28'),
    featured: false,
    platform: 'Multiple Platforms',
    order: 4
  },

  // Presenting Projects
  {
    title: 'Event Host - Nairobi Fashion Gala',
    description: 'Served as the main presenter for the annual Nairobi Fashion Gala, managing the flow of the event and interviewing designers and celebrities on the red carpet.',
    category: 'presenting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nairobi-fashion-gala-host-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    date: new Date('2023-09-30'),
    featured: true,
    order: 1
  },
  {
    title: 'TV Show Host - "Trend Talk"',
    description: 'Regular host of "Trend Talk," a weekly entertainment and lifestyle show on NTV Kenya covering the latest trends in fashion, music, and pop culture.',
    category: 'presenting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tv-show-host-trend-talk-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2022-05-15'),
    featured: true,
    platform: 'NTV Kenya',
    order: 2
  },
  {
    title: 'Awards Ceremony - Africa Magic Viewers\' Choice Awards',
    description: 'Co-hosted the red carpet segment for the prestigious Africa Magic Viewers\' Choice Awards, interviewing nominees and winners from across the continent.',
    category: 'presenting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/awards-ceremony-amvca-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: new Date('2023-07-08'),
    featured: true,
    platform: 'Africa Magic',
    order: 3
  },
  {
    title: 'Corporate Event - Tech Summit East Africa',
    description: 'Master of ceremonies for the three-day Tech Summit East Africa, facilitating panel discussions and keynote presentations from tech industry leaders.',
    category: 'presenting',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate-event-tech-summit-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    date: new Date('2023-11-15'),
    featured: false,
    order: 4
  }
];

// Social Media Stats
const socialStatsData = [
  {
    platform: 'instagram',
    followers: 125000,
    handle: 'Dennis Karuri',
    url: 'https://instagram.com/dianaluvanda',
    icon: 'instagram',
    updatedAt: new Date('2023-12-01')
  },
  {
    platform: 'tiktok',
    followers: 250000,
    handle: 'Dennis Karuri',
    url: 'https://tiktok.com/@dianaluvanda',
    icon: 'tiktok',
    updatedAt: new Date('2023-12-01')
  },
  {
    platform: 'youtube',
    followers: 50000,
    handle: 'Dennis Karuri',
    url: 'https://youtube.com/c/dianaluvanda',
    icon: 'youtube',
    updatedAt: new Date('2023-12-01')
  },
  {
    platform: 'twitter',
    followers: 35000,
    handle: 'Dennis Karuri',
    url: 'https://twitter.com/dianaluvanda',
    icon: 'twitter',
    updatedAt: new Date('2023-12-01')
  },
  {
    platform: 'facebook',
    followers: 45000,
    handle: 'Dennis Karuri',
    url: 'https://facebook.com/dianaluvandaofficial',
    icon: 'facebook',
    updatedAt: new Date('2023-12-01')
  },
  {
    platform: 'linkedin',
    followers: 15000,
    handle: 'Dennis Karuri',
    url: 'https://linkedin.com/in/dianaluvanda',
    icon: 'linkedin',
    updatedAt: new Date('2023-12-01')
  }
];

// Media Library
const mediaData = [
  // Images
  {
    title: 'Diana Portrait 1',
    type: 'image',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diana-portrait-1-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    category: 'portraits',
    tags: ['headshot', 'professional', 'acting'],
    uploadDate: new Date('2023-01-15'),
    size: 2500000,
    dimensions: {
      width: 2000,
      height: 3000
    }
  },
  {
    title: 'Diana Portrait 2',
    type: 'image',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diana-portrait-2-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    category: 'portraits',
    tags: ['casual', 'lifestyle', 'modeling'],
    uploadDate: new Date('2023-02-20'),
    size: 1800000,
    dimensions: {
      width: 2000,
      height: 3000
    }
  },
  {
    title: 'Fashion Shoot 1',
    type: 'image',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-shoot-1-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    category: 'fashion',
    tags: ['editorial', 'vogue', 'high-fashion'],
    uploadDate: new Date('2023-03-10'),
    size: 3200000,
    dimensions: {
      width: 2400,
      height: 3600
    }
  },
  {
    title: 'Behind the Scenes - Country Queen',
    type: 'image',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bts-country-queen-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    category: 'behind-the-scenes',
    tags: ['netflix', 'acting', 'on-set'],
    uploadDate: new Date('2022-06-25'),
    size: 2100000,
    dimensions: {
      width: 1920,
      height: 1080
    }
  },

  // Videos
  {
    title: 'Acting Showreel 2023',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/showreel-thumbnail-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    category: 'showreels',
    tags: ['acting', 'portfolio', 'professional'],
    uploadDate: new Date('2023-01-30'),
    size: 85000000,
    duration: 180, // 3 minutes
    dimensions: {
      width: 1920,
      height: 1080
    }
  },
  {
    title: 'Modeling Portfolio Video',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modeling-portfolio-thumbnail-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    category: 'showreels',
    tags: ['modeling', 'fashion', 'portfolio'],
    uploadDate: new Date('2023-02-15'),
    size: 65000000,
    duration: 150, // 2.5 minutes
    dimensions: {
      width: 1920,
      height: 1080
    }
  },
  {
    title: 'Coca Cola TikTok Campaign',
    type: 'video',
    url: 'https://www.tiktok.com/@dianaluvanda/video/123456789',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coca-cola-tiktok-thumbnail-nkDQCxYqQTFfXBPBdRHZNNQJMwXyEm.jpg',
    category: 'commercials',
    tags: ['tiktok', 'brand-deal', 'coca-cola'],
    uploadDate: new Date('2023-06-10'),
    size: 25000000,
    duration: 60, // 1 minute
    dimensions: {
      width: 1080,
      height: 1920
    }
  },
  {
    title: 'Interview on Morning Show',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/morning-show-interview-thumbnail-dJcXpLHQPnFfXBPBdRHZNNQJMwXyEm.jpg',
    category: 'interviews',
    tags: ['tv-appearance', 'talk-show', 'career'],
    uploadDate: new Date('2023-04-05'),
    size: 120000000,
    duration: 720, // 12 minutes
    dimensions: {
      width: 1920,
      height: 1080
    }
  },

  // Audio
  {
    title: 'Podcast Appearance - Creative Minds',
    type: 'audio',
    url: 'https://soundcloud.com/creativeminds/diana-luvanda-interview',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/podcast-thumbnail-4Vy8XpqUYnkfNKYJqrFSzWWbQcgkLl.jpg',
    category: 'podcasts',
    tags: ['interview', 'career', 'acting'],
    uploadDate: new Date('2023-05-20'),
    size: 45000000,
    duration: 2700 // 45 minutes
  },
  {
    title: 'Radio Interview - Morning Drive',
    type: 'audio',
    url: 'https://soundcloud.com/morningdrive/diana-luvanda-interview',
    thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/radio-interview-thumbnail-JiXfNjbUCwNxXVZmWHLHJEQGfvJXLW.jpg',
    category: 'interviews',
    tags: ['radio', 'career', 'personal'],
    uploadDate: new Date('2023-03-15'),
    size: 30000000,
    duration: 1800 // 30 minutes
  },

  // Documents
  {
    title: 'Acting Resume',
    type: 'document',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diana-luvanda-acting-resume.pdf',
    category: 'resumes',
    tags: ['acting', 'professional', 'career'],
    uploadDate: new Date('2023-01-10'),
    size: 500000
  },
  {
    title: 'Modeling Portfolio PDF',
    type: 'document',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diana-luvanda-modeling-portfolio.pdf',
    category: 'portfolios',
    tags: ['modeling', 'fashion', 'professional'],
    uploadDate: new Date('2023-02-05'),
    size: 12000000
  }
];

// Website Settings
const settingsData = [
  {
    key: 'site_title',
    value: 'Dennis Karuri | Makeup Artist & Beauty Influencer',
    category: 'seo',
    description: 'Main website title used for SEO and browser tabs'
  },
  {
    key: 'site_description',
    value: 'Dennis Karuri is a renowned Kenyan makeup artist, beauty influencer, and digital content creator with a strong social media presence.',
    category: 'seo',
    description: 'Main website description used for SEO'
  },
  {
    key: 'contact_email',
    value: 'contact@dianaluvanda.com',
    category: 'contact',
    description: 'Primary contact email for business inquiries'
  },
  {
    key: 'contact_phone',
    value: '+254 700 123 456',
    category: 'contact',
    description: 'Business contact phone number'
  },
  {
    key: 'booking_email',
    value: 'bookings@dianaluvanda.com',
    category: 'contact',
    description: 'Email for booking inquiries'
  },
  {
    key: 'theme_color',
    value: {
      primary: '#FF4D4D',
      secondary: '#FF9999',
      accent: '#FFE5E5'
    },
    category: 'appearance',
    description: 'Main color scheme for the website'
  },
  {
    key: 'featured_video',
    value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'content',
    description: 'Featured video on the homepage'
  },
  {
    key: 'about_text',
    value: 'Dennis Karuri is a versatile Kenyan makeup artist, beauty influencer, and digital content creator. With a strong presence on social media and collaborations with major brands, he has established himself as a leading figure in the African beauty industry.',
    category: 'content',
    description: 'Main about text for the about section'
  },
  {
    key: 'google_analytics_id',
    value: 'UA-123456789-1',
    category: 'analytics',
    description: 'Google Analytics tracking ID'
  },
  {
    key: 'maintenance_mode',
    value: false,
    category: 'system',
    description: 'Enable/disable maintenance mode'
  }
];

// System Logs
const logData = [
  {
    action: 'user_login',
    user: 'admin@dianaluvanda.com',
    details: {
      success: true,
      ip: '196.200.150.123'
    },
    timestamp: new Date('2023-12-01T08:30:45'),
    ipAddress: '196.200.150.123',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  {
    action: 'content_update',
    user: 'admin@dianaluvanda.com',
    details: {
      contentType: 'portfolio',
      itemId: '507f1f77bcf86cd799439011',
      changes: ['title', 'description']
    },
    timestamp: new Date('2023-12-01T09:15:22'),
    ipAddress: '196.200.150.123',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  {
    action: 'media_upload',
    user: 'admin@dianaluvanda.com',
    details: {
      mediaType: 'image',
      fileName: 'new-portrait-2023.jpg',
      fileSize: 3500000
    },
    timestamp: new Date('2023-12-01T10:45:12'),
    ipAddress: '196.200.150.123',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  {
    action: 'settings_update',
    user: 'admin@dianaluvanda.com',
    details: {
      settingKey: 'contact_email',
      oldValue: 'info@dianaluvanda.com',
      newValue: 'contact@dianaluvanda.com'
    },
    timestamp: new Date('2023-12-01T14:22:36'),
    ipAddress: '196.200.150.123',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  {
    action: 'user_logout',
    user: 'admin@dianaluvanda.com',
    details: {
      sessionDuration: 21600 // 6 hours in seconds
    },
    timestamp: new Date('2023-12-01T14:30:45'),
    ipAddress: '196.200.150.123',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
];

module.exports = {
  userData,
  portfolioData,
  socialStatsData,
  mediaData,
  settingsData,
  logData
};
