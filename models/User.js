const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  results: {
      english: 
        {
            points: { type: Number, default: 0 },
            level: { type: Number, default: 1 }
        }
},
  
});

module.exports = model('User', schema);