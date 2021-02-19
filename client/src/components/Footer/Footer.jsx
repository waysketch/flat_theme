import * as S from '../../theme';
import { Link } from 'react-router-dom';
import Toggle from '../../components/Toggle/Toggle.jsx';
import Login from '../../components/Login/Login.jsx';
import { updateDarkMode, updateToastData, updateLogin, updateUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Footer() {
    // === HOOKS & REDUX === //
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    // === FUNCTIONS === //
    const toggleDarkMode = () => {
        dispatch( updateDarkMode(!darkMode) );
    };

    const loginHandle = () => {
        const toastData = (
            <Login />
        );

        dispatch(updateToastData(toastData));
    };

    const logoutHandler = () => {
        axios.post('/auth/logout', {
    
        })
        .then ( _ => {
            dispatch(updateLogin(false));
            dispatch(updateUser({}));
        })
        .catch( err => {
            console.log(err);
        });
    };

    // === RETURN === //
    return (
        <S.Footer>
            <S.FlexFrame>

                {/* LOGO & BRANDING */}
                <S.FooterSection>
                    <h2>Footer</h2>
                </S.FooterSection>

                {/* NAVIGATION */}
                <S.FooterSection>
                    <Link to="/setup">Setup Page</Link>
                </S.FooterSection>

                {/* TOOLS */}
                <S.FooterSection>

                    <S.RowRight>
                        <Toggle on={darkMode} toggleFunction={toggleDarkMode} iconOn={S.svg.moon} iconOff={S.svg.sun}/>
                    </S.RowRight>

                    <S.RowRight>
                        {
                            isLoggedIn
                            ?
                            <S.Button onClick={logoutHandler}>
                                Logout
                            </S.Button>
                            :
                            <S.Button onClick={loginHandle}>
                                Login
                            </S.Button>
                        }
                    </S.RowRight>
                    
                </S.FooterSection>

            </S.FlexFrame>

            {/* COPYWRITE */}
            <S.Copywrite>
                copywrite&copy; {new Date().getFullYear()}
            </S.Copywrite>

        </S.Footer>
    )
}
