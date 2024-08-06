const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');

// Create a new guest
router.post('/', async (req, res) => {
  const guest = new Guest(req.body);
  try {
    await guest.save();
    res.status(201).send(guest);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).send(guests);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
