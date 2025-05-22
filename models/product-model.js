const mongoose = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
            maxlength: [2000, 'Description cannot exceed 2000 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price cannot be negative'],
        },
        category: {
            type: String,
            required: [true, 'Product category is required'],
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
            default: 'Generic',
        },
        stock: {
            type: Number,
            required: [true, 'Stock quantity is required'],
            min: [0, 'Stock cannot be negative'],
            default: 0,
        },
        images: [
            {
                url: { type: String, required: true },
                public_id: { type: String },
            },
        ],
        ratings: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        numReviews: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true,
                },
                name: { type: String, required: true },
                rating: { type: Number, required: true, min: 1, max: 5 },
                comment: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        isFeatured: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: {
            type: Date,
        },
        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        discountPrice: {
            type: Number,
            default: 0,
            min: 0,
        },
        warranty: {
            type: String,
            default: 'No warranty',
        },
        specifications: {
            type: String,
            default: 'No specifications available',
        },
        tags: {
            type: [String],
            default: [],
        },
        bgcolor: {
            type: String,
            default: '#ffffff',
        },
        panelcolor: {
            type: String,
            default: '#f5f5f5',
        },
        textcolor: {
            type: String,
            default: '#000000',
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);