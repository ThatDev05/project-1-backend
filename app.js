const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/mongoose-connection');
const cookieParser = require('cookie-parser');
const path = require('path');

const ownerRoutes = require('./routes/owner-routes');
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');



const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use("/owner", ownerRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

