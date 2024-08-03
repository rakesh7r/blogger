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
  User.findByIdAndUpdate(req.params.id, user, (err, user) => {
    if (err) {
      res.status(500).send;
    }
    res.status(200).send(user);
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send;
    }
    res.status(200).send(user);
  });
});

module.exports = router;
