import path from "path";
import { Towbar } from "../../database/models/models";
import ApiError from "../../errors/ApiError";

class TowbarController {
  async create(req, res, next) {
    try {
      const {
        brandF,
        country,
        vendor_code,
        max_hor,
        max_ver,
        cutout,
        ball_type,
        price,
        rating,
        farkopInfoId,
        brandId,
        modelId,
        generationId,
        bodyStyleId,
      } = req.body;

      const { img } = req.files;
      const imgName = `towbar-${vendor_code}` + ".jpg";
      img.mv(path.resolve(__dirname, "..", "database/static/images", imgName));

      const { doc } = req.files;
      const docName = `towbar-${vendor_code}` + ".pdf";
      doc.mv(
        path.resolve(__dirname, "..", "database/static/documents", docName)
      );

      const towbar = await Towbar.create({
        brandF,
        country,
        vendor_code,
        max_hor,
        max_ver,
        cutout,
        ball_type,
        price,
        rating,
        farkopInfoId,
        brandId,
        modelId,
        generationId,
        bodyStyleId,
        img: imgName,
        doc: docName,
      });

      return res.json(towbar);
    } catch (e) {
      next(ApiError.BadRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, modelId, generationId, bodyStyleId, limit, page } =
      req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    let farkops;
    if (!brandId && !modelId && !generationId && !bodyStyleId) {
      farkops = await Towbar.findAndCountAll({ limit, offset });
    }
    if (brandId && !modelId && !generationId && !bodyStyleId) {
      farkops = await Towbar.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (brandId && modelId && !generationId && !bodyStyleId) {
      farkops = await Towbar.findAndCountAll({
        where: { brandId, modelId },
        limit,
        offset,
      });
    }
    if (brandId && modelId && generationId && !bodyStyleId) {
      farkops = await Towbar.findAndCountAll({
        where: { brandId, modelId, generationId },
        limit,
        offset,
      });
    }
    if (brandId && modelId && generationId && bodyStyleId) {
      farkops = await Towbar.findAndCountAll({
        where: { brandId, modelId, generationId, bodyStyleId },
        limit,
        offset,
      });
    }

    return res.json(farkops);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const towbar = await Towbar.findOne({
      where: { id },
    });
    return res.json(towbar);
  }
}

export default new TowbarController();
