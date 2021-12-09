export default interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  isActivated: boolean;
  role: string;
}

export interface UserState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
}

export enum UserActionsTypes {
  SET_USER = "SET_USER",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_IS_LOADING = "SET_IS_LOADING",
}

interface SetUser {
  type: UserActionsTypes.SET_USER;
  payload: IUser | null;
}

interface SetIsAuth {
  type: UserActionsTypes.SET_IS_AUTH;
  payload: boolean;
}

interface SetIsLoading {
  type: UserActionsTypes.SET_IS_LOADING;
  payload: boolean;
}

export type UserAction = SetUser | SetIsAuth | SetIsLoading;