import { combineReducers } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import pagesReducers from "./pageReducers";
export default combineReducers({
    authenticationReducer,
    pagesReducers
});
