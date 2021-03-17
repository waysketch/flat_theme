import { useDispatch, useSelector } from 'react-redux';
import { updateToastData, updateToastVisible, updateComponents } from '../../redux/actions';
import * as S from '../../theme';

// ===================== //
// === DEFAULT PROPS === //
// ===================== //
DeleteButton.defaultProps = {
        title: "Are you sure?",
        body: "",
        yes: "Yes",
        no: "No"
};

export default function DeleteButton(props) {
    // ============= //
    // === STATE === //
    // ============= //
    const dispatch = useDispatch();
    const components = useSelector(state => state.components)

    // ================= //
    // === FUNCTIONS === //
    // ================= //
    const deleteButtonHandler = () => {

        const yes = () => {
            if (props.action && typeof props.action === 'function') {
                props.action();
            };

            // This is bad code but I'm leaving it in
            // This deletes the index from the current component array and should probably be passed from somewhere else.
            if (props.delete && props.index) {
                deleteComponent(props.index);
            };

            dispatch(updateToastVisible(false));
        };

        const no = () => {
            if (props.cancel && typeof props.cancel === 'function') {
                props.cancel();
            };
            
            dispatch(updateToastVisible(false));
        };

        const toast = (
            <S.Frame margin="0" >

                <h2>{props.title}</h2>
                
                <p>{props.body}</p>

                <S.FlexFrame>

                    <S.Button onClick={yes}>
                        {props.yes}
                    </S.Button>

                    <S.SolidButton
                    onClick={no}
                    background_color={props => props.theme.palette.darkRed}
                    hover_background_color={props => props.theme.palette.red}
                    >
                        {props.no}
                    </S.SolidButton>

                </S.FlexFrame>

            </S.Frame>
        );

        dispatch(updateToastData(toast));

    };

    const deleteComponent = (index) => {
        dispatch(updateComponents(components.splice(index, 1)));
        props.buildBlocks();
    };

    // ================= //
    // === COMPONENT === //
    // ================= //
    return (
        <S.DeleteButton onClick={deleteButtonHandler} >{S.svg.trash}</S.DeleteButton>
    )
};
