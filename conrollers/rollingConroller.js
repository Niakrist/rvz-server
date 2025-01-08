const { Rolling } = require("../models/models");

const ApiError = require("../error/ApiError");

class RollingConroller {
  async create(req, res) {
    const { name, title, description, url } = req.body;
    const rolling = await Rolling.create({ name, title, description, url });
    return res.json(rolling);
  }
  async getAll(req, res) {
    const rollings = await Rolling.findAll();
    return res.json(rollings);
  }
  async put(req, res) {
    const { id, name, title, description, url } = req.body;
    const rolling = await Rolling.findOne({ where: { id } });
    rolling.name = name;
    rolling.title = title;
    rolling.description = description;
    rolling.url = url;
    rolling.save();
    return res.json(rolling);
  }
  async delete(req, res) {
    const { id } = req.body;
    const rolling = await Rolling.destroy({ where: { id } });
    return res.json(rolling);
  }
}

module.exports = new RollingConroller();
