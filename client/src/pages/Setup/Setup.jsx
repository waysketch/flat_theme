import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as S from '../../theme';
import Footer from '../../components/Footer/Footer.jsx';
import loadable from '@loadable/component';

export default function Setup() {
    // ============= //
    // === STATE === //
    // ============= //
    const [thereIsAGoldKeyUsers, updateThereIsAGoldKeyUsers] = useState(true);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [verifyPassword, updateVerifyPassword] = useState("");
    const user = useSelector(state => state.user)

    // =============== //
    // === ON LOAD === //
    // =============== //
    useEffect(() => {
        axios.get('/locked/api/users/goldkey')
            .then(anyUsers => {
                if (anyUsers.data.areThereUsers === "false") {
                    updateThereIsAGoldKeyUsers(false);
                };
            })
    }, []);

    // ================= //
    // === FUNCTIONS === //
    // ================= //
    const createUserHandler = () => {

        // TODO: bad for validation
        if (email.length < 0 || email.indexOf("@") === -1 || password.length < 8 || password !== verifyPassword) {
            // update toast you need a better email
            console.log('blocked');
            return;
        };

        // Create new user
        axios.post('/locked/api/users', {
            email,
            password
        })
            .then(res => {
                console.log(res.data);
                updateThereIsAGoldKeyUsers(true);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const addUserButtonHandler = (e) => {
        if (e.keyCode === 13) {
            createUserHandler();
        };
    };

    const loginHandler = () => {
        const Login = loadable(() => import('../../components/Login/Login.jsx'));
        return <Login />;
    };

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <Fragment>
            {
                thereIsAGoldKeyUsers
                    ?
                    <S.Setup>
                        {
                            user.verified
                                ?
                                <S.Frame>
                                    <h1>Welcome</h1>
                                    <p>To coninue lets create your homepage!</p>
                                </S.Frame>
                                :
                                <S.Frame>
                                    <h1>Setup Page</h1>
                                    <p>Please sign in to set up your first page.</p>
                                    {loginHandler()}
                                </S.Frame>
                        }
                    </S.Setup>
                    :
                    <S.Setup>
                        <S.Frame>
                            <h1>Setup Page</h1>
                            <p>Welcome. It looks like this website has not yet been setup.</p>
                            <input value={email} onChange={e => updateEmail(e.target.value)} type="email" name="email" placeholder="example@waysketch.com" required />
                            <input value={password} onChange={e => updatePassword(e.target.value)} type="password" placeholder="password" required />
                            <input value={verifyPassword} onChange={e => updateVerifyPassword(e.target.value)} onKeyDown={addUserButtonHandler} type="password" placeholder="re-type password" required />
                            <S.Button onClick={createUserHandler}>Add User</S.Button>
                        </S.Frame>
                    </S.Setup>
            }
            <Footer />
        </Fragment>
    );
};
