// agenciesData.js

const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({
  name: String,
  niche: String,
  description: String,
  pricing: String,
  reviews: Number,
  phoneNumber: String,
  email: String,
  premium: Boolean,
  website: String,
});

const Agency = mongoose.model('Agency', agencySchema, 'agencies');

module.exports = Agency;
