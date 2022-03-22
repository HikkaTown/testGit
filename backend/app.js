const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  mongoServerPath,
  mongoConnectionSettings,
  PORT,
} = require("./utils/const");
const { route } = require("express/lib/application");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(mongoServerPath, mongoConnectionSettings);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: [
      "Authoriztion",
      "Content-Type",
      "Accept",
      "Accept-Encoding",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(require("./routes/paymentData"));

app.listen(PORT, () => {
  console.log(`Работает на порте ${PORT}`);
});
