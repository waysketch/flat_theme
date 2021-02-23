import Social from '../Social/Social.jsx';
import { Link } from 'react-router-dom';
import * as S from '../../theme';

export default function Nav(props) {
    // === RETURN === //
    return (
        <S.Nav id="mobile_nav" >
            <S.NavFrame>
            <S.MobileTab onClick={props.hideNav}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </S.MobileTab>

            <div>
                Logo
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Another</Link>
                </li>
                <li>
                    <Link to="/">Yet Another</Link>
                </li>
            </ul>

            <div>
                <Social />
            </div>
            </S.NavFrame>
        </S.Nav>
    );
};
