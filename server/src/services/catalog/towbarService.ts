import sequelize, { Op } from "sequelize";
import { Rating, Towbar } from "../../database/models/models";

export default class TowbarService {
  static async findAndCountAll(carId, limit, offset, options) {
    try {
      const cutOut = options.isBumperCutOut === true ? "Да" : "Нет";

      const sortBy =
        options.sortValue === "Сначала дорогие"
          ? "max(price) DESC"
          : options.sortValue === "Сначала дешевые"
          ? "max(price)"
          : "";

      const where1 =
        options.manufacturers.length !== 0
          ? {
              cutout: cutOut,
              autoId: carId,
              price: {
                [Op.gte]: options.price[0],
                [Op.lte]: options.price[1],
              },
              manufacturerId: {
                [Op.in]: options.manufacturers,
              },
            }
          : {
              cutout: cutOut,
              autoId: carId,
              price: {
                [Op.gte]: options.price[0],
                [Op.lte]: options.price[1],
              },
            };

      const where2 =
        options.manufacturers.length !== 0
          ? {
              cutout: cutOut,
              price: {
                [Op.gte]: options.price[0],
                [Op.lte]: options.price[1],
              },
              manufacturerId: {
                [Op.in]: options.manufacturers,
              },
            }
          : {
              cutout: cutOut,
              price: {
                [Op.gte]: options.price[0],
                [Op.lte]: options.price[1],
              },
            };

      const towbars = sortBy
        ? carId
          ? await Towbar.findAndCountAll({
              where: where1,
              order: sequelize.literal(sortBy),
              group: ["id"],
            })
          : await Towbar.findAndCountAll({
              where: where2,
              limit,
              offset,
              order: sequelize.literal(sortBy),
              group: ["id"],
            })
        : carId
        ? await Towbar.findAndCountAll({
            where: where1,
          })
        : await Towbar.findAndCountAll({
            where: where2,
            limit,
            offset,
          });

      const data = await Promise.all(
        towbars.rows.map(async (elem) => {
          const ratingData = await Rating.findOne({
            where: { towbarId: elem.id },
          });
          return {
            ...elem,
            ratingValue: ratingData.rating,
          };
        })
      );

      return {
        rows: sortBy
          ? data
          : data.sort(function (a: any, b: any) {
              return parseFloat(b.ratingValue) - parseFloat(a.ratingValue);
            }),
        count: sortBy ? towbars.count.length : towbars.count,
      };
    } catch (e) {
      console.log(e);
    }
  }

  static async findOne(towbarId) {
    return await Towbar.findOne({
      where: { id: towbarId },
    });
  }

  static async findAllByCode(vendor_code) {
    return await Towbar.findAll({
      where: {
        vendor_code: {
          [Op.substring]: vendor_code,
        },
      },
    });
  }
}
