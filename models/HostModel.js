// Require necessary dependencies
const mongoose = require("mongoose");

// Define the host schema
const hostSchema = new mongoose.Schema({
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
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "English",
  },
  joined_at: {
    type: Date,
    default: Date.now,
  },
  is_superhost: {
    type: Boolean,
    default: false,
  },
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  reply_review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  identity_verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
  place: {
    type: String,
    enum: [
      "House",
      "Apartment",
      "Barn",
      "Bed & breakfast",
      "Boat",
      "Cabin",
      "Camper/RV",
      "Case particular",
      "Castle",
      "Cave",
      "Container",
      "Cycladic Home",
    ],
    required: false,
  },
  place_type: {
    type: String,
    enum: ["An entire place", "A private room", "A shared room"],
    required: false,
  },

  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Host = mongoose.model("Host", hostSchema);

module.exports = Host;
