const { Load } = require("../models/models");

const ApiError = require("../error/ApiError");

class LoadConroller {
  async create(req, res) {
    const { name, title, description, url } = req.body;
    const load = await Load.create({ name, title, description, url });
    return res.json(load);
  }
  async getAll(req, res) {
    const loads = await Load.findAll();
    return res.json(loads);
  }
  async put(req, res) {
    const { id } = req.params;
    const { name, title, description, url } = req.body;
    const load = await Load.findOne({ where: { id } });
    load.name = name;
    load.title = title;
    load.description = description;
    load.url = url;
    load.save();
    return res.json(load);
  }
  async delete(req, res) {
    const { id } = req.params;
    const load = await Load.destroy({ where: { id } });
    return res.json(load);
  }
}

module.exports = new LoadConroller();
