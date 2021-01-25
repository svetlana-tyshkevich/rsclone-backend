const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  points: { type: Number },
  level: { type: Number },
});

module.exports = model('User', schema);