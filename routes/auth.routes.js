const { Router } = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('../passport');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: 'Такой пользователь уже существует' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'Пользователь создан' });
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: 'Неверный пароль, попробуйте снова' });
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id, message: 'Здравствуй!' });
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

// /api/auth/github
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] }),
);

// /api/auth/github/callback
router.get(
  '/github/callback',
  passport.authenticate('github'),
  async (req, res) => {
    try {
      const email = req.user.emails[0].value;

      const user = await User.findOne({ email });

      if (!user) {
        const user = new User({ email });

        await user.save();

        return res.status(201).json({ message: 'Пользователь создан' });
      }
      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id, message: `Здравствуй!` });

      //  res.redirect('http://localhost:3000/main');
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте ещё раз' });
    }
  },
);

module.exports = router;
