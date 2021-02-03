const express = require('express');
const cors = require('cors');
const config = require('config');
const mongoose = require('mongoose');
const passport = require('passport');
require('./passport');

const app = express();

app.use(express.json({ extended: true}));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/lessons', require('./routes/lessons.routes'));
app.use('/api/stats', require('./routes/stats.routes'));

const PORT = process.env.PORT || 5000;
// const PORT =  5000;



async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        const db = mongoose.connection;
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

