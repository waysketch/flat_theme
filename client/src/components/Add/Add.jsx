import { useDispatch } from 'react-redux';
import { updateToastData } from '../../redux/actions';
import * as S from '../../theme';
import Blocks from '../Blocks/Blocks.jsx';

export default function Add() {
    // === STATE === //
    const dispatch = useDispatch();

    // ================= //
    // === FUNCTIONS === //
    // ================= //
    const addBlockHandler = () => {
        dispatch(updateToastData(<Blocks />));
    };

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <S.Add>
            <S.DashedFrame>
                <div className="box">
                    <h2
                        onClick={addBlockHandler}
                        title="Add A Block"
                    >
                        {S.svg.plus}
                    </h2>
                </div>
            </S.DashedFrame>
        </S.Add>
    )
}
