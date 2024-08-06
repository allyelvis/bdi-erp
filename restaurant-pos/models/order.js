const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  // Define order schema fields here
});

module.exports = mongoose.model('Order', OrderSchema);
