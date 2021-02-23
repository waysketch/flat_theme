import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../theme';

export default function EditStyles() {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <Fragment>
            <S.Frame>
                <h2>Style</h2>
                <h4>Default Mode</h4>
                <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
            </S.Frame>
            
            <S.Frame>
                <h2>Branding</h2>
                <h4>Logo</h4>
            </S.Frame>
        </Fragment>
    )
}
