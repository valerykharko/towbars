import axios from "axios";
import { API_URL } from "http/index";
import AuthService from "http/userAPI";
import IUser, { UserAction, UserActionsTypes } from "interfaces/user";
import { Dispatch } from "redux";
import { AuthResponse } from "http/response/AuthResponse";

export function setUser(data: IUser | null): UserAction {
  return { type: UserActionsTypes.SET_USER, payload: data };
}

export function setIsAuth(bool: boolean): UserAction {
  return { type: UserActionsTypes.SET_IS_AUTH, payload: bool };
}

export function setIsLoading(bool: boolean): UserAction {
  return { type: UserActionsTypes.SET_IS_AUTH, payload: bool };
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.login(email, password);
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.registration(email, password);
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setIsAuth(false));
      dispatch(setUser(null));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 5000);
    }
  };
};
