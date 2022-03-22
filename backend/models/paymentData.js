const mongoose = require("mongoose");

const paymentDataSchema = new mongoose.Schema(
  {
    CardNumber: {
      type: String,
      required: true,
      validate(v) {
        return /\b[0-9]{16}\b/gm.test(v);
      },
    },
    ExpDate: {
      type: String,
      required: true,
      validate(v) {
        return /\b[0-9][0-9]\b\/[0-9]{4}\b/gm.test(v);
      },
    },
    Cvv: {
      type: String,
      required: true,
      validate(v) {
        /\b[0-9]{3}\b/gm.test(v);
      },
    },
    Amount: {
      type: String,
      required: true,
      validate(v) {
        return /[0-9]{1,}/gm.test(v);
      },
    },
  },
  {
    versionKey: false,
  }
);

function toJSON() {
  const obj = this.toObject();
  delete obj.Cvv;
  delete obj.CardNumber;
  delete obj.ExpData;
  return obj;
}

paymentDataSchema.methods.toJSON = toJSON;

module.exports = mongoose.model("paymentData", paymentDataSchema);
