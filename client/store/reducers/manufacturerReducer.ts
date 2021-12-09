import {
  IManufacturer,
  ManufacturerAction,
  ManufacturerActionsTypes,
  ManufacturerState,
} from "interfaces/manufacturer";

const initialState: ManufacturerState = {
  manufacturers: [],
  stateToFind: [],
};

export const manufacturerReducer = (
  state = initialState,
  action: ManufacturerAction
): ManufacturerState => {
  switch (action.type) {
    case ManufacturerActionsTypes.FETCH_MANUFACTURERS:
      return <ManufacturerState>{
        ...state,
        manufacturers: action.payload,
      };
    case ManufacturerActionsTypes.SET_INITIAL_STATE: {
      let updatedCheckedState: IManufacturer[] = [...state.stateToFind];
      if (state.stateToFind.length >= 6) {
        !!state.stateToFind.find((elem) => elem.name === action.payload.name)
          ? (updatedCheckedState = state.stateToFind.filter(
              (elem) => elem.name !== action.payload.name
            ))
          : alert("Больше выбрать нельзя");
      } else {
        !!state.stateToFind.find((elem) => elem.name === action.payload.name)
          ? (updatedCheckedState = state.stateToFind.filter(
              (elem) => elem.name !== action.payload.name
            ))
          : updatedCheckedState.push(action.payload);
      }
      return {
        ...state,
        stateToFind: updatedCheckedState,
      };
    }
    default:
      return state;
  }
};
