import { combineReducers, } from "redux";
import auth from "./authReducer";
import home from "./HomeReducer";

export default combineReducers({
    auth,
    home
});
