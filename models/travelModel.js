const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    no_of_travellers: Number,
    budget_per_person: Number
  });

const travelModel = mongoose.model('travel',travelSchema);

module.exports = { travelModel };