const mongoose = require('mongoose');

// Replace with your actual MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/PROJECT-1-BACKEND';

// Mongoose connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // Uncomment if using older versions of Mongoose
    // useFindAndModify: false, // Uncomment if using older versions of Mongoose
};

mongoose.connect(MONGODB_URI, options)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Export the mongoose connection
module.exports = mongoose.connection;