import { combineReducers } from "redux";
import formReducers from "./formReducer";
import ItemsReducers from "./logItemReducer";
export default combineReducers({
    formReducers,
    ItemsReducers
});
