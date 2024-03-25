const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const bottleRoutes = require('./routes/bottleRoutes');

// Mount routes
app.use('/api/user', userRoutes);
app.use('/api/bottle', bottleRoutes);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
