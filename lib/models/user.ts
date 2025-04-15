import mongoose, { Schema } from 'mongoose';
import { compare, hash } from 'bcrypt';

// User Schema for Admin Access
const UserSchema = new Schema({
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

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const hashedPassword = await hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword: string) {
  return compare(candidatePassword, this.password);
};

// Check if the model already exists to prevent overwriting
export default mongoose.models.User || mongoose.model('User', UserSchema);
