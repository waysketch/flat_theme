import * as S from '../../theme';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLogin, updateToastVisible, updateUser } from '../../redux/actions';
import axios from 'axios';

export default function Login() {
    // === STATE === //
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const toastVisible = useSelector(state => state.toast.isVisible);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    // === ONLOAD === //
    useEffect(() => {
        if (toastVisible) {
            this.username.focus();
        };
    }, [toastVisible]);

    // === FUNCTIONS === //
    const loginHandler = () => {
        axios.post('/auth/login', {
            username: email,
            password
        })
            .then( _ => {
                const user = {
                    username: _.data.user.local.username ?? _.data.user.email,
                    key: _.data.user.key ?? "WOOD",
                    verified: _.data.user.verified ?? false,
                    email: _.data.user.email
                };

                dispatch(updateLogin(true));
                dispatch(updateUser(user));
                dispatch(updateToastVisible(false));
                // TODO: create home page
                // then => nav to home page
            })
            .catch(err => {
                console.log(err);
            });
    };

    const logoutHandler = () => {
        axios.post('/auth/logout', {

        })
            .then(_ => {
                dispatch(updateLogin(false));
                dispatch(updateUser({}));
            })
            .catch(err => {
                console.log(err);
            });
    };

    const loginEnterHandler = (e) => {
        if (e.keyCode === 13) {
            loginHandler();
        };

        if (e.keyCode === 27) {
            dispatch(updateToastVisible(false));
        };
    };

    // === RETURN === //
    return (
        isLoggedIn
            ?
            <S.Login>
                <S.Button onClick={logoutHandler}>
                    Logout
            </S.Button>
            </S.Login>
            :
            <S.Login>
                {/* EMAIL */}
                <input
                    value={email}
                    onChange={e => updateEmail(e.target.value)}
                    onKeyDown={loginEnterHandler}
                    autoFocus
                    type="email"
                    placeholder="example@flat_theme.com"
                />

                {/* PASSWORD */}
                <input
                    value={password}
                    onChange={e => updatePassword(e.target.value)}
                    onKeyDown={loginEnterHandler}
                    type="password"
                    placeholder="password"
                />

                {/* BUTTON */}
                <S.Button onClick={loginHandler}>
                    Login
                </S.Button>
            </S.Login>
    )
}
