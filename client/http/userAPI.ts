import { AxiosResponse } from "axios";
import { AuthResponse } from "http/response/AuthResponse";
import $api from "./index";

export default class AuthService {
  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/registration", { email, password });
  }

  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/login", { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/auth/logout");
  }
}
