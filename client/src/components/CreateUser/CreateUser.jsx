import { useState } from 'react';
import * as S from '../../theme';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateToastData } from '../../redux/actions';

export default function CreateUser() {
    // === STATE === //
    const dispatch = useDispatch();
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [rePassword, updateRePassword] = useState("");

    // === FUNCTIONS === //
    function validateEmail(email) {
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegEx.test(String(email).toLowerCase());
    };

    function validatePassword(password) {
        const passwordRegEx = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
        return passwordRegEx.test(String(password));
    };

    const submitUserHandler = () => {

        // === EMAIL FILTER === //
        if ( !validateEmail(email) ) {
            dispatch(updateToastData(<div>Verify your email is entered correctly</div>));
            return;
        };

        // === PASSWORD FILTER === //
        if ( !validatePassword(password) ) {
            dispatch(updateToastData(<div>Passwords must contain 8 characters, a capitol letter, a number, and a special character.</div>));
            return;
        };

        if ( password !== rePassword) {
            dispatch(updateToastData(<div>Passwords didnt match</div>));
            return;
        };

        // === ROUTE === //
        const url = "/locked/api/users";

        // === BODY === //
        const user = {
            email: email.toLowerCase(),
            password
        };

        // === SUBMIT USER === //
        axios.post(url, user)
        .then( _ => {
            dispatch(updateToastData(`Sent verification email to ${email}`));
        })
        .catch( _ => {
            dispatch(updateToastData(`Unable to create user ${email}`));
        })
        .finally( _ => {
            updateEmail("");
            updatePassword("");
            updateRePassword("");
        });
    };

    const submitUserByKeyHandler = (event) => {
        if (event.keyCode === 13) {
            submitUserHandler();
        };
    };

    return (
        <S.Frame>
            <h2>Create User</h2>
            <input
                value={email}
                onChange={e => updateEmail(e.target.value)}
                onKeyDown={submitUserByKeyHandler}
                type="email"
                name="email"
                placeholder="example@microsoft.com"
            />

            <input
                value={password}
                onChange={e => updatePassword(e.target.value)}
                onKeyDown={submitUserByKeyHandler}
                type="password"
                name="password"
                placeholder="password"
            />

            <input
                value={rePassword}
                onChange={e => updateRePassword(e.target.value)}
                onKeyDown={submitUserByKeyHandler}
                type="password"
                name="reenter password"
                placeholder="re-enter password"
            />

            <S.SolidButton onClick={submitUserHandler}>
                Create User
            </S.SolidButton>

            {/* IF GOLD KEY USER THEN MORE OPTIONS */}

        </S.Frame>
    )
}
