import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import { Builder } from './Builder.jsx';
import Add from '../../components/Add/Add.jsx';
import * as S from '../../theme';

export default function Page(props) {
    // ============= //
    // === HOOKS === //
    // ============= //
    const [sections, updateSections] = useState([]);
    const [navHidden, updateNavHidden] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    // =============== //
    // === ON LOAD === //
    // =============== //
    useEffect(() => {
        const renderThese = [];

        props.components.forEach((block, index) => {
            Builder(block, index, renderThese);
        });

        if (isLoggedIn) renderThese.push(<Add />);
        if (!props.hideFooter) renderThese.push(<Footer />);
        updateSections(renderThese);

    }, [props.components, props.hideFooter, isLoggedIn]);

    // ================= //
    // === FUNCTIONS === //
    // ================= //
    const hideNavToggle = () => {
        updateNavHidden(!navHidden);
    };

    // ================= //
    // === COMPONENT === //
    // ================= //
    return (
        <S.Wrap hidden={navHidden}>
            <Nav hideNav={hideNavToggle} />
            <S.Bundle>
                <S.NavShadow onClick={() => updateNavHidden(false)} show={navHidden} />
                {/* PAGE VIEW */}
                <S.Page>
                    {sections.map((section) => {
                        return section;
                    })}
                </S.Page>
            </S.Bundle>
        </S.Wrap>
    );
};
