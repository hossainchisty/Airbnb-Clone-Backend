// Require necessary dependencies
const mongoose = require("mongoose");
const Listing = require("../../domain/models/ListModel");

// Handle all the database operations related to the Listing model.
const ListingRepository = {
  async create(listingData) {
    const listing = new Listing(listingData);
    await listing.save();
    return listing;
  },

  async findById(id) {
    const listing = await Listing.findById(id);
    return listing;
  },

  async findAll() {
    const listings = await Listing.find().populate("host");
    return listings;
  },

  async update(id, listingData) {
    const listing = await Listing.findByIdAndUpdate(id, listingData, {
      new: true,
    });
    return listing;
  },

  async delete(id) {
    await Listing.findByIdAndDelete(id);
  },

  // async getTotalPrice(id) {
  //   await new Listing.aggregate([
  //     {
  //       $match: {
  //         _id: mongoose.Types.ObjectId(id)
  //       }
  //     },
  //     {
  //       $project: {
  //         totalPrice: {
  //           $sum: ['$price', '$cleaning_fee', '$service_fee', '$taxes']
  //         }
  //       }
  //     }
  //   ]);
  
  //   return result[0].totalPrice;
  // }
};

module.exports = ListingRepository;
