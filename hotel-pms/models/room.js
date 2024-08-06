const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  number: String,
  type: String,
  price: Number,
  status: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' }
});

module.exports = mongoose.model('Room', roomSchema);
