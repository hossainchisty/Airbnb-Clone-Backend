// Require necessary dependencies
const mongoose = require("mongoose");

// Define the wishlist schema
const wishlistSchema = new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    listings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing'
    }],
    dateCreated: {
      type: Date,
      default: Date.now
    }
  });
  
  const Wishlist = mongoose.model('Wishlist', wishlistSchema);
  
  module.exports = Wishlist;