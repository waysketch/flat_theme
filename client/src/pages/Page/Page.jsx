import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import { Builder } from './Builder.jsx';
import * as S from '../../theme';

export default function Page(props) {
    // === HOOKS === //
    const [sections, updateSections] = useState([]);
    const [hideFooter, updateHideFooter] = useState(false);
    const [navHidden, updateNavHidden] = useState(false);

    // === ON LOAD === //
    useEffect(() => {
        const renderThese = [];

        props.components.forEach((block, index) => {
            Builder(block, index, renderThese);
        });

        updateHideFooter(props.hideFooter)
        updateSections(renderThese);

    }, [props.components, props.hideFooter]);

    const hideNavToggle = () => {
        updateNavHidden(!navHidden);
    };

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
                {/* FOOTER */}
                {
                    hideFooter
                        ?
                        ""
                        :
                        <Footer />
                }
            </S.Bundle>
        </S.Wrap>
    );
};
