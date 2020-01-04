import { createStore } from "redux";
import reducer from "./reducers";

const isBrowserEnvironment = () => typeof window === "object";
const areReduxDevToolsAvailable = () =>
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";

const store = createStore(
  reducer,
  isBrowserEnvironment() && areReduxDevToolsAvailable()
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default store;
