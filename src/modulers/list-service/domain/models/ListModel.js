// Require necessary dependencies
const mongoose = require("mongoose");

// Define the listing schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
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
  location: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  amenities: [
    {
      type: String,
    },
  ],
  facilities: [
    {
      type: String,
    },
  ],
  activities: [
    {
      type: String,
    },
  ],
  not_included: [
    {
      type: String,
    },
  ],
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  viewed: [
    {
      type: Number,
      default: 0,
    },
  ],
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
