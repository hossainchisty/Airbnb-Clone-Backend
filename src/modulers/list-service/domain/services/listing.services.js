const ListingRepository = require("../../infrastructure/repositories/listing.repository");

// Handle all the services related to the ListingRepository.
const ListingService = {
  create: async (data) => {
    return await ListingRepository.create(data);
  },
  findById: async (id) => {
    return await ListingRepository.findById(id);
  },
  findAll: async () => {
    return await ListingRepository.findAll();
  },
  update: async (id, data) => {
    return await ListingRepository.update(id, data);
  },
  delete: async (id) => {
    return await ListingRepository.delete(id);
  },

  // getTotalPrice: async (id) => {
  //   return await ListingRepository.getTotalPrice(id);

  // }
};

module.exports = ListingService;
