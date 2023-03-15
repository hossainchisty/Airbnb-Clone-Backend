const ListingService = require('../../domain/services/listing.services')

// Handle HTTP requests related to the Listing model.
const listingController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);
      const listing = await ListingService.create(data);
      res
        .status(201)
        .json({ message: "Listing created successfully", data: listing });
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const listing = await ListingService.findById(id);
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const listings = await ListingService.findAll();
      if (!listings) {
        res.status(200).json({ message: "Listing is empty" });
      } else {
        res.status(200).json(listings);
      }
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      await ListingService.update(id, data);
      res.status(200).json({ message: "Listing updated successfully" });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      await ListingService.delete(id);
      res.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = listingController;
