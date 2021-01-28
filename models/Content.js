const { Schema, model, Types } = require('mongoose');

const contentSchema = new Schema({
  lang: String,
  appLang: String,
  content: { type: Object, required: true},
});

module.exports = model('Content', contentSchema);
