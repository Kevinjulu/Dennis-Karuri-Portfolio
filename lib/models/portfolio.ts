import mongoose, { Schema } from 'mongoose';

// Project/Portfolio Item Schema
const PortfolioItemSchema = new Schema({
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

// Check if the model already exists to prevent overwriting
export default mongoose.models.PortfolioItem || mongoose.model('PortfolioItem', PortfolioItemSchema);
