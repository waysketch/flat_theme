import { useState } from 'react';
import * as S from '../../theme';

Toggle.defaultProps = {
    toggleFunction: () => { console.log("Toggle is not set up to do anything.") },
    iconOn: "",
    iconOff: "",
    on: true
}

export default function Toggle(props) {
    // === HOOK === //
    const [toggle, updateToggle] = useState(props.on ? true : false);

    // === Functions === //
    const toggleClickedHandler = () => {
        props.toggleFunction();
        updateToggle(!toggle);
    };

    // === RETURN === //
    return (
        <S.Toggle>
            <S.Dot toggledOn={toggle} onClick={toggleClickedHandler}>
                {toggle ? props.iconOn : props.iconOff}
            </S.Dot>
        </S.Toggle>
    )
}
