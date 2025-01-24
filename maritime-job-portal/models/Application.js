const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  nationality: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  referralSource: {
    type: String,
    enum: ['LinkedIn', 'Facebook', 'Referral', 'Direct', 'Other']
  },
  resumeUrl: {
    type: String
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'],
    default: 'Pending'
  },
  appliedOn: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);