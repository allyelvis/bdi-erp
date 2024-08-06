const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const guestRoutes = require('./routes/guestRoutes');
const roomRoutes = require('./routes/roomRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/guests', guestRoutes);
app.use('/rooms', roomRoutes);
app.use('/reservations', reservationRoutes);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/hotel-pms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log();
  });
}).catch(error => {
  console.error('Database connection error:', error);
});
