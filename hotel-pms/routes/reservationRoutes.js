const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

// Create a new reservation
router.post('/', async (req, res) => {
  const reservation = new Reservation(req.body);
  try {
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('guest').populate('room');
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
