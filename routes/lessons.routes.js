const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const Content = require('../models/Content');
const router = Router();

// const content = new Content({
//   appLang: 'english',
//   learnLang: 'japanise',
//   content: {
//   },
// });

// content.save();

router.get(
  '/',

  async (req, res) => {
    try {
      const { appLang, lang } = req.body;
      const lessons = await Content.findOne({ appLang, lang });

      res.json({ content: lessons.content});
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

module.exports = router;
