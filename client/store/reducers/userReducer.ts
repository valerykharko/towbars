import { UserAction, UserActionsTypes, UserState } from "interfaces/user";

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionsTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case UserActionsTypes.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
