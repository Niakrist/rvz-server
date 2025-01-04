const path = require("path");
const uuid = require("uuid");

const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceConroller {
  async create(req, res, next) {
    try {
      let {
        name,
        price,
        title,
        description,
        url,
        info,
        rollingId,
        brandId,
        loadId,
        rowId,
      } = req.body;

      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        title,
        description,
        url,
        img: fileName,
        rollingId,
        brandId,
        loadId,
        rowId,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          return Device.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    let { rollingId, brandId, loadId, rowId, limit, page } = req.query;

    page = page || 1;
    limit = limit || 5;

    let offset = page * limit - limit;

    let device = null;

    if (!brandId && !rollingId && !loadId && !rowId) {
      device = await Device.findAndCountAll({ limit, offset });
    }
    if (!brandId && !rollingId && !loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { rowId },
        limit,
        offset,
      });
    }
    if (!brandId && !rollingId && loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { loadId },
        limit,
        offset,
      });
    }
    if (!brandId && !rollingId && loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { loadId, rowId },
        limit,
        offset,
      });
    }
    if (!brandId && rollingId && !loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { rollingId },
        limit,
        offset,
      });
    }

    if (!brandId && rollingId && !loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { rollingId, rowId },
        limit,
        offset,
      });
    }
    if (!brandId && rollingId && loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { rollingId, loadId },
        limit,
        offset,
      });
    }
    if (!brandId && rollingId && loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { rollingId, loadId, rowId },
        limit,
        offset,
      });
    }
    if (brandId && !rollingId && !loadId && !rowId) {
      device = await Device.findAndCountAll({
        here: { brandId },
        limit,
        offset,
      });
    }

    if (brandId && !rollingId && !loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, rowId },
        limit,
        offset,
      });
    }

    if (brandId && !rollingId && loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, loadId },
        limit,
        offset,
      });
    }

    if (brandId && !rollingId && loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, loadId, rowId },
        limit,
        offset,
      });
    }

    if (brandId && rollingId && !loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, rollingId },
        limit,
        offset,
      });
    }

    if (brandId && rollingId && !loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, rollingId, rowId },
        limit,
        offset,
      });
    }

    if (brandId && rollingId && loadId && !rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, rollingId, loadId },
        limit,
        offset,
      });
    }

    if (brandId && rollingId && loadId && rowId) {
      device = await Device.findAndCountAll({
        where: { brandId, rollingId, loadId, rowId },
        limit,
        offset,
      });
    }

    return res.json(device);
  }
  async getItem(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceConroller();
