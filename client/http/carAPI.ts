import { AxiosResponse } from "axios";
import { IBodyStyle, IBrand, IGeneration, IModel } from "interfaces/car";
import $api from "./index";

export default class CarService {
  static async getBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $api.get<IBrand[]>("/autos/brands");
  }

  static async getModels(brandId: number): Promise<AxiosResponse<IModel[]>> {
    return $api.get<IModel[]>("/autos/models", { params: { brandId } });
  }

  static async getGenerations(
    brandId: number,
    modelId: number
  ): Promise<AxiosResponse<IGeneration[]>> {
    return $api.get<IGeneration[]>("/autos/generations", {
      params: { brandId, modelId },
    });
  }

  static async getBodyStyles(
    brandId: number,
    modelId: number,
    generationId: number
  ): Promise<AxiosResponse<IBodyStyle[]>> {
    return $api.get<IBodyStyle[]>("/autos/body-styles", {
      params: { brandId, modelId, generationId },
    });
  }
}
