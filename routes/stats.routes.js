const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');
const router = Router();

// rating
router.get(
  '/rating',

  async (req, res) => {
    try {
      const rating = await User.find();

      res.send({ rating: rating.sort((a,b) => (a.points - b.points)).slice(0,5) });
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

// updating points
router.put(
  '/points',

  async (req, res) => {
    try {
      const { userId, updateLesson, score } = req.body;

      await User.findOneAndUpdate(
        { _id: userId },
        { [updateLesson]: score },
      );
      res.status(201)
      .json("Задание принято");
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так" });
    }
  },
);

module.exports = router;
