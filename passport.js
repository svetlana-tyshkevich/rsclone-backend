const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
// const User = require('./models/User');


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: '8d1ad0a3c0b5024db563',
      clientSecret: '38cf6134c3ca3c19e7461a7a8cdbb0f2777cd5c0',
      scope: ['user:email'],
      callbackURL: 'http://localhost:5000/api/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);
