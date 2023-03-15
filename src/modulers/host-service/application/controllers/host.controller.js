const hostService = require('../../domain/services/host.services');

const hostController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const host = await hostService.create(data);
      res.status(201).json({ message: 'Host created successfully', data: host });
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const host = await hostService.findById(id);
      res.status(200).json(host);
    } catch (error) {
      next(error);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const hosts = await hostService.findAll();
      res.status(200).json(hosts);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      await hostService.update(id, data);
      res.status(200).json({ message: 'Host updated successfully' });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      await hostService.delete(id);
      res.status(200).json({ message: 'Host deleted successfully' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = hostController;
