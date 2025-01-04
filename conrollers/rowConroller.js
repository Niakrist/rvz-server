const { Row } = require("../models/models");

const ApiError = require("../error/ApiError");

class RowConroller {
  async creatre(req, res) {
    const { name, title, description, url } = req.body;
    const row = await Row.create({ name, title, description, url });
    return res.json(row);
  }
  async getAll(req, res) {
    const rows = await Row.findAll();
    return res.json(rows);
  }
  async put(req, res) {
    const { id, name, title, description, url } = req.body;
    const row = await Row.findOne({ where: { id } });
    row.name = name;
    row.title = title;
    row.description = description;
    row.url = url;
    row.save();
    return res.json(row);
  }
  async delete(req, res) {
    const { id } = req.body;
    const row = await Row.destroy({ where: { id } });
    return res.json(row);
  }
}

module.exports = new RowConroller();
