const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  // Define table schema fields here
});

module.exports = mongoose.model('Table', TableSchema);
