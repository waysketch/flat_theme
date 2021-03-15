import { updateComponents, updateToastVisible } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../../theme';

export default function Blocks(props) {
    // ============= //
    // === STATE === //
    // ============= //
    const dispatch = useDispatch();
    const components = useSelector(state => state.components);
    
    // =================== //
    // === Blank Block === //
    // =================== //
    const addHTMLCSSJS_Block = () => {

        const foo = {
            name: "Blank",
            data: ""
        };

        const bar = components;
        bar.push(foo);

        console.log(bar);

        dispatch(updateComponents(bar));
        dispatch(updateToastVisible(false));
        props.buildBlocks();
    };

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <div>
            Block Options
            

            <S.Button onClick={addHTMLCSSJS_Block}>
                Add A Default Block
            </S.Button>
        </div>
    )
}
