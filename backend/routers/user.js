const express = require('express');
const router = express.Router();
const { User } = require('../schema');

router.post('/', async (req, res) => {
  const { user } = req.body;
  const newUser = new User(user);
  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/:id', (req, res) => {
  const { user } = req.body;
  try {
    const updatedUser = User.findByIdAndUpdate(req.params.id, user);
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id);
    res.status(200).send('User deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
