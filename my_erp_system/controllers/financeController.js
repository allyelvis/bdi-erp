const { models } = require('../models');

exports.createAccount = async (req, res) => {
  try {
    const account = await models.Account.create(req.body);
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
