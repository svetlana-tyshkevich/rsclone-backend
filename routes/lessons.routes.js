const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const Content = require('../models/Content');
const router = Router();

// const content = new Content({
//   appLang: 'english',
//   learnLang: 'french',
//   content: {},
// });

// content.save();

router.get(
  '/',

  async (req, res) => {
    try {
      const { appLang, learnLang } = req.query;
      const lessons = await Content.findOne({ appLang, learnLang });

      res.send({ content: lessons.content});
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

module.exports = router;
