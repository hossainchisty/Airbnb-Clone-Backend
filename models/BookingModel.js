// Require necessary dependencies
const mongoose = require("mongoose");

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  adults: {
    type: Number,
    required: false,
    default: 0,
  },
  children: {
    type: Number,
    required: false,
    default: 0,
  },
  infants: {
    type: Number,
    required: false,
    default: 0,
  },
  pets: {
    type: Number,
    required: false,
    default: 0,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  dateBooked: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
