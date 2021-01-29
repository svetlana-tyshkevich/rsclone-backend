const { Schema, model, Types } = require('mongoose');

const contentSchema = new Schema({
  appLang: String,
  learnLang: String,
  content: { type: Object, required: true},
});

module.exports = model('Content', contentSchema);
