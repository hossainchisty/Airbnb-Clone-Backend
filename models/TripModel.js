// Require necessary dependencies
const mongoose = require("mongoose");

// Define the trip schema
const tripSchema = new mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  cleaning_fee: {
    type: Number,
    required: false,
  },
  service_fee: {
    type: Number,
    required: false,
  },
  taxes: {
    type: Number,
    required: false,
  },
  total_price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
