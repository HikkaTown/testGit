const PaymentData = require("../models/paymentData");

module.exports.createPaymentData = (req, res, next) => {
  const { CardNumber, ExpDate, Amount, Cvv } = req.body;
  PaymentData.create({
    CardNumber,
    ExpDate,
    Amount,
    Cvv,
  })
    .then((paymentDataInfo) =>
      res.status(200).send({
        data: {
          RequestId: paymentDataInfo._id,
          Amount: paymentDataInfo.Amount,
        },
      })
    )
    .catch((e) => {
      res.status(500).send({ message: "Incorrect Data" });
    });
};
