import * as S from '../../theme';
import { useSelector, useDispatch } from "react-redux";
import { updateLogin, updateToastData } from '../../redux/actions';

export default function NoDatabase() {
    const dispatch = useDispatch();
    const areWeLoggedIn = useSelector(state => state.isLoggedIn);

    const clickHandler = () => {
        dispatch(updateLogin(!areWeLoggedIn));
        dispatch(updateToastData(<div>Hello {Date.now()}</div>));
    }

    return (
        <S.NoDatabase>
            <h1>No database found</h1>
            <p>This is a default html page.</p>
            <div onClick={clickHandler}>press</div>
        </S.NoDatabase>
    )
};
