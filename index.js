const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./router/api.js");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});
mongoose
  .connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(`final_exam connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.Promise = global.Promise;
app.listen(process.env.PORT, () => {
  console.log(`app starting at ${process.env.PORT}`);
});
