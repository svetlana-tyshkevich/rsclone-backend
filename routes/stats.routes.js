const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');
const router = Router();

// rating
router.get('/rating', async (req, res) => {
  try {
    const rating = await User.find();

    res.send({
      rating: rating
        .sort(
          (a, b) =>
            b.results.russianApp.english.langPoints -
            a.results.russianApp.english.langPoints,
        )
        .slice(0, 5)
        .filter((item) => item.results.russianApp.english.langPoints > 0)
        .map((item) => [item.email, item.results.russianApp.english.langPoints]),
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
  }
});

// weekProgress
router.post('/weekProgress', async (req, res) => {
  try {
    const { userId, appLang, learningLang } = req.body;
    const currentUser = await User.find({ _id: userId });
    const weekProgress =
      currentUser[0].results[appLang][learningLang].weekProgress;
    res.send({ weekProgress });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
  }
});

// updating points
router.put(
  '/points',

  async (req, res) => {
    try {
      const { userId, updateLesson, score } = req.body;

      await User.findOneAndUpdate({ _id: userId }, { [updateLesson]: score });
      res.status(201).json('Задание принято');
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так' });
    }
  },
);

// updating points
router.post(
  '/getPoints',

  async (req, res) => {
    try {
      const { userId, appLang, learningLang } = req.body;

      const currentUser = await User.find({ _id: userId });
      const lessonPoints = currentUser[0].results[appLang][learningLang];
      res.send(lessonPoints);
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так' });
    }
  },
);

module.exports = router;
