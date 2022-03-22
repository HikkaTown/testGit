const router = require("express").Router();

const {
  createPaymentData,
  checkResult,
} = require("../controllers/paymentData");

router.post("/", createPaymentData);
module.exports = router;
