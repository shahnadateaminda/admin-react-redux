import api from "../../axios";
import { LoginBegins, LoginSuccess, LogoutBegins, LogoutSuccess } from "../../redux/action/AuthActions";
import { decrypt } from './../../crypto/index'





export const UserLogin = (payload) => {
    return (dispatch) => {
        dispatch(LoginBegins());
        api.post('/auth/login', payload).then((res) => {
            const data = decrypt(res.data.data)
            console.log(data, '999999999999');
            dispatch(LoginSuccess({}));
        }).catch((err) => {
            console.log(err, 'rrrr');
        })


    };
};

export const UserLogout = () => {
    return (dispatch) => {
        dispatch(LogoutBegins())
        localStorage.clear();
        dispatch(LogoutSuccess())
    }
}