import mongoose, { Schema } from 'mongoose';

// Media Schema for images, videos, and other media files
const MediaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    required: true,
    enum: ['image', 'video', 'audio', 'document'],
  },
  url: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  tags: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
MediaSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Check if the model already exists to prevent overwriting
export default mongoose.models.Media || mongoose.model('Media', MediaSchema);
