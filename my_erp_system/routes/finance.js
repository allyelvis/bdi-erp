const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');
const authMiddleware = require('../middlewares/auth');

router.post('/accounts', authMiddleware, financeController.createAccount);

module.exports = router;
