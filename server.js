const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Agency = require('./agenciesData'); // Adjust the path as needed
const { MongoClient } = require('mongodb');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://FurkanAndac:jwhbkvm9321@agencies-shared-cluster.c5ugmev.mongodb.net/agencies-website', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/agencies-website', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/api/agencies', async (req, res) => {
    try {
      const agencies = await Agency.find();
      console.log('Fetched agencies:', agencies); // Add this line
      res.json(agencies);
    } catch (error) {
      console.error('Error fetching agencies:', error);
      res.status(500).send('Internal Server Error');
    }
  });

mongoose.set('debug', true);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
