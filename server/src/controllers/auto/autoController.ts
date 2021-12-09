import { Auto } from "../../database/models/models";
import ApiError from "../../errors/ApiError";

export default class AutoController {
  static async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await Auto.create({ name });
      return res.json(brand);
    } catch (e) {
      next(ApiError.BadRequest(e.message));
    }
  }

  static async getAll(req, res) {
    const brands = await Auto.findAll();
    return res.json(brands);
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const brand = await Auto.findOne({
      where: { id },
    });
    return res.json(brand);
  }
}
