const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price_sm: {
    type: Number,
    required: true,
  },
  price_md: {
    type: Number,
    required: true,
  },
  price_lg: {
    type: Number,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },

  img_url: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
