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
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reactgreen', { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection
connection.then((db) => {
  console.log('The connection to the database was successful');
  return db
}).catch((err) => {
  console.log("There was an error connecting to the database", err)
})

// App listening
app.listen(PORT, () => {
  console.log("App listening on port", PORT);
  if (process.env.NODE_ENV !== "production")
    console.log("https://localhost:" + PORT);
});