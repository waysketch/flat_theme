import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComponents } from '../../redux/actions';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import { Builder } from './Builder.jsx';
import Add from '../../components/Add/Add.jsx';
import DeleteButton from '../../components/DeleteButton/DeleteButton.jsx';
import * as S from '../../theme';

export default function Page(props) {
    // ============= //
    // === HOOKS === //
    // ============= //
    const dispatch = useDispatch();
    const [sections, updateSections] = useState([]);
    const [navHidden, updateNavHidden] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [components, updateComponentList ] = useState(useSelector(state => state.components));

    // ================= //
    // === FUNCTIONS === //
    // ================= //
    const buildBlocks = () => {
        console.log('building');
        
        dispatch(updateComponents(props.components));
        updateComponentList(props.components);

        const renderThese = [];

        if (components.length < 1) {
            props.components.forEach((block, index) => {
                Builder(block, index, renderThese);
            });
        } else {
            components.forEach((block, index) => {
                Builder(block, index, renderThese);
            });
        };
        
        if (isLoggedIn) renderThese.push(<Add buildBlocks={buildBlocks} />);
        if (!props.hideFooter) renderThese.push(<Footer />);

        updateSections(renderThese);
    };

    const hideNavToggle = () => {
        updateNavHidden(!navHidden);
    };

    // =============== //
    // === ON LOAD === //
    // =============== //
    useEffect(buildBlocks, [components, isLoggedIn, !props.hideFooter, props.components, props.Footer]); // eslint-disable-line react-hooks/exhaustive-deps

    // ================= //
    // === COMPONENT === //
    // ================= //
    return (
        <S.Wrap hidden={navHidden}>

            {/* =========== */}
            {/* === NAV === */}
            {/* =========== */}
            <Nav hideNav={hideNavToggle} />

            <S.Bundle>
                <S.NavShadow onClick={() => updateNavHidden(false)} show={navHidden} />

                {/* ================= */}
                {/* === PAGE VIEW === */}
                {/* ================= */}
                <S.Page>
                    {sections.map((section, index) => {
                        return (

                            // ============ //
                            // === NOTE ================================================================================================= //
                            // === RegEx will prevent a user from having a trash can on components they should not be able to remove. === //
                            // ========================================================================================================== //

                            <S.Section index={index} key={index}>
                                { isLoggedIn && !section?.type?.name?.toString().match(/^(F|f)ooter|(A|a)dd$/) ? <DeleteButton index={index} buildBlocks={buildBlocks} delete={true} title="Delete this section?" body="This action does not currently have an undo button and this section will be removed permanently." /> : "" }
                                {section}
                            </S.Section>
                        );
                    })}
                </S.Page>
            </S.Bundle>
        </S.Wrap>
    );
};
