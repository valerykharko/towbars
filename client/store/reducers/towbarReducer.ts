import {
  TowbarAction,
  TowbarActionsTypes,
  TowbarState,
} from "interfaces/towbar";

const initialState: TowbarState = {
  towbars: [],
  ballTypes: [],
};

export const towbarReducer = (
  state = initialState,
  action: TowbarAction
): TowbarState => {
  switch (action.type) {
    case TowbarActionsTypes.FETCH_TOWBARS:
      return {
        ...state,
        towbars: action.payload,
      };
    default:
      return state;
  }
};
