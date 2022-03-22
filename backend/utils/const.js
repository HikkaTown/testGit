const { PORT = 3454 } = process.env;
const mongoServerPath = "mongodb://localhost:27017/testPayment";
const mongoConnectionSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  PORT,
  mongoServerPath,
  mongoConnectionSettings,
};
