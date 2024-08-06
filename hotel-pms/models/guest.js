const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  bookingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }]
});

module.exports = mongoose.model('Guest', guestSchema);
