import { combineReducers, } from "redux";
import auth from "./authReducer";

import users from "./UserReducer";

export default combineReducers({
    auth,
    users
});
