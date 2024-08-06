const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// Create a new room
router.post('/', async (req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).send(room);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).send(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
