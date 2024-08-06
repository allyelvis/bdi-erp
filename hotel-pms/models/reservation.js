const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  checkInDate: Date,
  checkOutDate: Date,
  totalAmount: Number
});

module.exports = mongoose.model('Reservation', reservationSchema);
