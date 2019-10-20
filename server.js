require("dotenv").config();
// Server setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// App routing
app.use(routes);

// Connection to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgreen");



// app.post("/api/login", (req, res) => {
//   // mock user
//   const user = {
//     id: 1,
//     username: "logan",
//     email: "logan@gmail.com"
//   };
//   jwt.sign({ user }, "secretkey", (err, token) => {
//     res.json({ token });
//   });
// });

// App listening
app.listen(PORT, () => {
  console.log("App listening on port", PORT);
  if (process.env.NODE_ENV !== "production")
    console.log("https://localhost:" + PORT);
});
