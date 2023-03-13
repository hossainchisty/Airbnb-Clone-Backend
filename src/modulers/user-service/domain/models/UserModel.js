// Require necessary dependencies
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  country: {
    type: String,
    enum: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', /*... and so on for all countries... */],
    required: false
  },
  government_id: {
    type: String,
    required: false,
    unique: true,
  },
  address: {
    type: String,
    required: false,
  },
  emergency_contact: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wishlist",
    },
  ],
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
