import { Manufacturer } from "../../database/models/models";
import ApiError from "../../errors/ApiError";
import manufacturerService from "../../services/manufacturer/manufacturerService";

export default class ManufacturerController {
  static async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await Manufacturer.create({ name });
      return res.json(brand);
    } catch (e) {
      next(ApiError.BadRequest(e.message));
    }
  }

  static async getAll(req, res, next) {
    try {
      const manufacturers = await manufacturerService.getAll();
      return res.json(manufacturers);
    } catch (e) {
      next(e);
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const brand = await Manufacturer.findOne({
      where: { id },
    });
    return res.json(brand);
  }
}
