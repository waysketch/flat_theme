import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateToastVisible } from '../../redux/actions';
import * as S from '../../theme';

export default function Toast(props) {
    // === HOOKS && REDUX === //
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.toast.visible);
    const toastData = useSelector(state => state.toast.data);

    // === FUNCTIONS === //
    const hideToastHandler = () => {
        dispatch( updateToastVisible(!isVisible) );
    };

    // === RETURN === //
    return (
        <Fragment>
            <S.Shadow show={isVisible} onClick={hideToastHandler}/>
            <S.Toast show={isVisible}>
                {toastData}
            </S.Toast>
        </Fragment>
    )
}
