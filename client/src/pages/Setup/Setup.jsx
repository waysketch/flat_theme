import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from '../../theme';
import { useDispatch } from 'react-redux';
import { updateLogin } from '../../redux/actions';

export default function Setup() {
    const dispatch = useDispatch();
    const [thereIsAGoldKeyUsers, updateThereIsAGoldKeyUsers] = useState(true);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [verifyPassword, updateVerifyPassword] = useState("");

    // === ON LOAD === //
    useEffect(() => {
        axios.get('/locked/api/users/goldkey')
        .then( anyUsers => {
            if ( anyUsers.data.areThereUsers === "false" ) {
                updateThereIsAGoldKeyUsers(false);
            };
        })
    }, []);

    // === FUNCTIONS === //
    const createUserHandler = () => {

        // TODO: bad for validation
        if ( email.length < 0 || email.indexOf("@") === -1 || password.length < 8 || password !== verifyPassword) {
            // update toast you need a better email
            console.log('blocked');
            return;
        };

        // Create new user
        axios.post('/locked/api/users', {
            email,
            password
        })
        .then( res => {
            console.log(res.data);
            updateThereIsAGoldKeyUsers(true);
        })
        .catch( err => {
            console.log(err);
        });
    };

    const loginButtonHandler = () => {
        axios.post('/auth/login', {
            username: email,
            password
        })
        .then( _ => {
            console.log(_.data);
            dispatch(updateLogin(true));
            // TODO: create home page
            // then => nav to home page
        })
        .catch( err => {
            console.log(err);
        });
    };

    const loginEnterHandler = (e) => {
        if (e.keyCode === 13) {
            loginButtonHandler();
        };
    };

    const addUserButtonHandler = (e) => {
        // keyCode 13 === "Enter"
        if (e.keyCode === 13) {
            createUserHandler();
        };
    };

    // === RETURN === //
    return (
        thereIsAGoldKeyUsers
        ?
        <S.Setup>
            <h1>Please Sign In</h1>
            <input value={email} onChange={e => updateEmail(e.target.value)} type="email" name="email" placeholder="example@waysketch.com" required/>
            <input value={password} onChange={e => updatePassword(e.target.value)} onKeyDown={loginEnterHandler} type="password" placeholder="password" required/>
            <S.Button onClick={loginButtonHandler}>Sign in</S.Button>
        </S.Setup>
        :
        <S.Setup>
            <h1>Setup Page</h1>
            <p>Welcome. It looks like this website has not yet been setup.</p>
            <input value={email} onChange={e => updateEmail(e.target.value)} type="email" name="email" placeholder="example@waysketch.com" required/>
            <input value={password} onChange={e => updatePassword(e.target.value)} type="password" placeholder="password" required/>
            <input value={verifyPassword} onChange={e => updateVerifyPassword(e.target.value)} onKeyDown={addUserButtonHandler} type="password" placeholder="re-type password" required/>
            <S.Button onClick={createUserHandler}>Add User</S.Button>
        </S.Setup>
    )
}
