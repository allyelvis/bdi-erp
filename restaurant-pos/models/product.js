const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  // Define product schema fields here
});

module.exports = mongoose.model('Product', ProductSchema);
