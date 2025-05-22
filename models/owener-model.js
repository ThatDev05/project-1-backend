const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    // Basic Information
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    // Authentication
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    // Address
    address: {
        street: { type: String, trim: true, maxlength: 100 },
        city: { type: String, trim: true, maxlength: 50 },
        state: { type: String, trim: true, maxlength: 50 },
        zip: { type: String, trim: true, maxlength: 20 },
        country: { type: String, trim: true, maxlength: 50 }
    },
    // Profile
    avatarUrl: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    // Business Details
    businessName: {
        type: String,
        trim: true,
        maxlength: 100
    },
    businessType: {
        type: String,
        trim: true,
        maxlength: 50
    },
    registrationNumber: {
        type: String,
        trim: true,
        maxlength: 50
    },
    // Status & Timestamps
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

// Middleware to update updatedAt
ownerSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;