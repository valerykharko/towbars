import { createStore, applyMiddleware, Store, AnyAction, compose } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import { store, RootState } from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore = (context: Context) =>
  createStore(store, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
