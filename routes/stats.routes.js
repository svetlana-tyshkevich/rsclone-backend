const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');
const router = Router();

// rating
router.post('/rating', async (req, res) => {
  try {
    const {  appLang, learningLang } = req.body;
    const rating = await User.find();
    res.send({
      rating: rating
        .sort(
          (a, b) =>
            b.results[appLang][learningLang].langPoints -
            a.results[appLang][learningLang].langPoints,
        )
        .slice(0, 5)
        .filter((item) => item.results[appLang][learningLang].langPoints > 0)
        .map((item) => [
          item.email,
          item.results[appLang][learningLang].langPoints,
        ]),
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
      const { userId, appLang, learnLang, level, lesson, score } = req.body;

      await User.findOneAndUpdate({ _id: userId }, { [`results.${appLang}.${learnLang}.${level}.${lesson}`]: score });
      // let totalScore = 0;
      // for (let i = 1; i <= levelsNumber; i += 1) {
      // for (let j = 1; j <= lessonsNumber; j += 1)
      // totalScore += stats[appLang][learnLang][`level${i}`][`lesson${j}`];
      // }

      res.status(201).json('Задание принято');
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так' });
    }
  },
);

// getting points
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

// updating total score
router.put(
  '/updateScore',

  async (req, res) => {
    try {
      const { userId,  appLang, learningLang, score } = req.body;

      await User.findOneAndUpdate({ _id: userId }, { [`results.${appLang}.${learningLang}.langPoints`]: score });
      res.status(201).json('Баллы засчитаны!');
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так' });
    }
  },
);

module.exports = router;
