import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import loadable from '@loadable/component';
import * as S from '../../theme';

export default function Page(props) {
    // === HOOKS === //
    const [sections, updateSections] = useState([]);
    const [hideFooter, updateHideFooter] = useState(false);
    const [navHidden, updateNavHidden] = useState(false);

    // === ON LOAD === //
    useEffect(() => {
        const renderThese = [];

        props.components.forEach((component, index) => {

            switch (component.name) {
                case "Header":
                    const Header = loadable(() => import('../../blocks/Header/Header.jsx'));
                    renderThese.push(<Header key={component.name + index} data={component.data} />);
                    break;
                case "Footer":
                    const Footer = loadable(() => import('../../components/Footer/Footer'));
                    renderThese.push(<Footer key={component.name + index} />);
                    break;
                default:
                    console.log(`Could not render ${component.name} at index ${index} in the component tree.`);
                    break;
            };
        });
        updateHideFooter(props.hideFooter)
        updateSections(renderThese);

    }, [props.components, props.title, props.hideFooter]);

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
