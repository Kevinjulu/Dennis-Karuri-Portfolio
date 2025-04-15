import mongoose, { Schema } from 'mongoose';

// Social Media Stats Schema
const SocialStatsSchema = new Schema({
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

// Check if the model already exists to prevent overwriting
export default mongoose.models.SocialStats || mongoose.model('SocialStats', SocialStatsSchema);
