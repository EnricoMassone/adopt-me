import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";

const reducer = combineReducers({ location, theme });

export default reducer;
