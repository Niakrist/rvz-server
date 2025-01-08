const { Brand } = require("../models/models");

const ApiError = require("../error/ApiError");

class BrandConroller {
  async create(req, res) {
    const { name, title, description, url } = req.body;
    const brand = await Brand.create({ name, title, description, url });
    return res.json(brand);
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async put(req, res) {
    const { id, name, title, description, url } = req.body;
    const brand = await Brand.findOne({ where: { id } });
    brand.name = name;
    brand.title = title;
    brand.description = description;
    brand.url = url;
    await brand.save();
    return res.json(brand);
  }
  async delete(req, res) {
    const { id } = req.body;
    const brand = await Brand.destroy({ where: { id } });
    return res.json(brand);
  }
}

module.exports = new BrandConroller();
