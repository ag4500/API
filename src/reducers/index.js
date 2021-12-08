import { combineReducers } from "redux";
import authenticationReducer from "./authentication";
import pagesReducers from "./dashboard";
export default combineReducers({
    authenticationReducer,
    pagesReducers
});
