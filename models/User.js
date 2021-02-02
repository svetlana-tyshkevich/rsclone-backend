const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  results: {
    russianApp: {
      english: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level3: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level4: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level5: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      japanese: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      french: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
    },
    englishApp: {
      japanese: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      french: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      russian: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
    },
    germanApp: {
      english: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level3: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level4: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level5: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      japanese: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
      french: {
        langPoints: { type: Number, default: 0 },
        currentLevel: { type: Number, default: 1 },
        weekProgress: { type: Array, default: [0, 0, 0, 0, 0, 0, 0] },
        level1: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
        level2: {
          lesson1: { type: Number, default: 0 },
          lesson2: { type: Number, default: 0 },
          lesson3: { type: Number, default: 0 },
          lesson4: { type: Number, default: 0 },
        },
      },
    },
  },
});

module.exports = model('User', schema);
