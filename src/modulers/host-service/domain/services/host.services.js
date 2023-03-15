const hostRepository = require('../../infrastructure/repositories/host.repository');

// Handle all the services related to the hostRepository.
const hostService = {
  create: async (data) => {
    return hostRepository.create(data);
  },
  findById: async (id) => {
    return hostRepository.findById(id);
  },
  findAll: async () => {
    return hostRepository.findAll();
  },
  update: async (id, data) => {
    return hostRepository.update(id, data);
  },
  delete: async (id) => {
    return hostRepository.delete(id);
  },
};

module.exports = hostService;
