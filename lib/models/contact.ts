import mongoose, { Schema } from 'mongoose';

// Contact Form Submission Schema
const ContactSubmissionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new',
  },
});

// Check if the model already exists to prevent overwriting
export default mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema);
