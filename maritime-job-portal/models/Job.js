const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobCode: {
        type: String,
        required: true,
        unique: true
    },
    rankVessel: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ['Deck', 'Engine', 'Navigation', 'Catering', 'Communication']
    },
    category: {
        type: String,
        enum: ['Mainfleet', 'Offshore', 'Oil and Gas', 'Shore Jobs']
    },
    type: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Contract']
    },
    qualification: {
        type: String
    },
    experience: {
        type: String
    },
    location: {
        type: String
    },
    jobDescription: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    updatedOn: {
        type: Date,
        default: Date.now
    },
    keywords: [String]
}, { timestamps: true });

// Add text search index
JobSchema.index({ 
    jobTitle: 'text', 
    jobDescription: 'text', 
    keywords: 'text',
    companyName: 'text'
});

module.exports = mongoose.model('Job', JobSchema);