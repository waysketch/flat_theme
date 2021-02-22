import * as S from '../../theme';
import { useDispatch } from "react-redux";
import { updateToastData } from '../../redux/actions';
import { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';

export default function NoDatabase() {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(updateToastData(<div>Hello {Date.now()}</div>));
    };

    return (
        <Fragment>
            <S.NoDatabase>
                <h1>Site not setup yet</h1>
                <p>This is a default html page.</p>
                <div onClick={clickHandler}>press</div>
            </S.NoDatabase>
            <Footer />
        </Fragment>
    )
};
