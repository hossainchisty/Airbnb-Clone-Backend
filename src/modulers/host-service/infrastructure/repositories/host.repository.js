// Require necessary dependencies
const Host = require('../../domain/models/HostModel');

// Handle all the database operations related to the Host model.
const hostRepository = {
  create: async (data) => {
    return Host.create(data);
  },
  findById: async (id) => {
    return Host.findById(id);
  },
  findAll: async () => {
    return Host.find().populate("listings");
  },
  update: async (id, data) => {
    return Host.findByIdAndUpdate(data,{
      new: true,
    });
  },
  delete: async (id) => {
    return Host.findByIdAndDelete(id);
  },
};

module.exports = hostRepository;
