import Social from '../Social/Social.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../../theme';

export default function Nav(props) {
    const menu = useSelector(state => state.menu);
    
    const createMenu = () => {
        if (menu.length < 1) {
           return <li> <Link to="/">Home</Link> </li>;
        } else {
            return menu.map((link, index) => {
                return (
                    <li key={index}>
                        <Link to={link.route}>{link.name}</Link>
                    </li>
                );
            });
        };
    };

    // === RETURN === //
    return (
        <S.Nav >
            <S.DesktopNav>
                <S.Frame>
                    <ul>
                        {createMenu()}
                    </ul>
                </S.Frame>
            </S.DesktopNav>

            <S.MobileNav id="mobile_nav">
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
                        {createMenu()}
                    </ul>

                    <div>
                        <Social />
                    </div>
                </S.NavFrame>

            </S.MobileNav>
        </S.Nav>
    );
};
