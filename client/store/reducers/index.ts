import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { userReducer } from "./userReducer";
import { manufacturerReducer } from "./manufacturerReducer";

export const store = combineReducers({
  car: carReducer,
  user: userReducer,
  manufacturer: manufacturerReducer,
});

export type RootState = ReturnType<typeof store>;
