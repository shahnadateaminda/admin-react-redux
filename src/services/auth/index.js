import { LoginBegins, LoginSuccess, LogoutBegins, LogoutSuccess } from "../../redux/action/AuthActions";

export const UserLogin = (payload) => {
    return (dispatch) => {
        dispatch(LoginBegins(payload));
        dispatch(LoginSuccess(payload));
        
    };
};

export const UserLogout = () => {
    return (dispatch) => {
        dispatch(LogoutBegins())
        localStorage.clear();
        dispatch(LogoutSuccess())
    }
}