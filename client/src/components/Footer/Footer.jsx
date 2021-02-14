import * as S from '../../theme';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <S.Footer>
            Footer
            <Link to="/about">About Page</Link>
        </S.Footer>
    )
}
