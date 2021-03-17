import { updateComponents, updateToastVisible } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../../theme';

export default function Blocks(props) {
    // ============= //
    // === STATE === //
    // ============= //
    const dispatch = useDispatch();
    const components = useSelector(state => state.components);
    
    
    const buildABlockFactory = (blockName, blockData) => {

        const tempBlock = {
            name: `${blockName}`,
            data: blockData ?? [],
        };

        components.push(tempBlock);

        dispatch(updateComponents(components));
        dispatch(updateToastVisible(false));
        props.buildBlocks();
    };

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <S.Frame>
            <h1>Block Options</h1>
            
            <S.Button onClick={() => buildABlockFactory("Deck")}>
                Add a Deck
            </S.Button>

            <S.Button onClick={() => buildABlockFactory("Blank")}>
                Add A Default Block
            </S.Button>
        </S.Frame>
    )
}
