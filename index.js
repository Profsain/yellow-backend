const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config()

// Connect to MongoDB
const dbUrl = process.env.MONGODB_URL;

mongoose
    .connect(dbUrl)
    .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const port = 8080;

    // middleware
        app.use(express.json());
        app.use(cors());
        
    // connect routers
    app.use('/api', postRoutes);
    app.use('/api', userRoutes);

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
    })
    .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    });


