require("dotenv").config();
// Server setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");

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

// App listening
app.listen(PORT, () => {
  console.log("App listening on port", PORT);
  if (process.env.NODE_ENV !== "production")
    console.log("https://localhost:" + PORT);
});
