require("dotenv").config();
// Server setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
// console.log(mongoose);
const User = mongoose.model("User");
// console.log(User, 'HELLO');
const bodyParser = require("body-parser");
const passport = require("passport");
// const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
  issuer: "accounts.examplesoft.com",
  audience: "yoursite.net"
};

passport.use(
  new JwtStrategy(options, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport MW
app.use(passport.initialize());
app.use(passport.session());

// Static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// App routing
app.use(routes);

// Connection to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgreen");

// App listening
app.listen(PORT, () => {
  console.log("App listening on port", PORT);
  if (process.env.NODE_ENV !== "production")
    console.log("https://localhost:" + PORT);
});
