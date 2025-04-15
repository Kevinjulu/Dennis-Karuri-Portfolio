import mongoose, { Schema } from 'mongoose';

// Settings Schema for website configuration
const SettingSchema = new Schema({
  key: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: Schema.Types.Mixed,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['general', 'social', 'contact', 'appearance', 'seo'],
    default: 'general',
  },
  description: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Compound index to ensure key+category uniqueness
SettingSchema.index({ key: 1, category: 1 }, { unique: true });

// Update the updatedAt timestamp before saving
SettingSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Check if the model already exists to prevent overwriting
export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);
