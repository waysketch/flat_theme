import React, { Fragment, useState, useEffect } from 'react';
import loadable from '@loadable/component';

// TODO: Add code splitting to this to reduce load size
// EDGECASE: Order matters push and pop only

export default function Page(props) {
    // === HOOKS === //
    const [sections, updateSections] = useState([]);

    // === ON LOAD === //
    useEffect(() => {

        const renderThese = [];

        props.components.forEach((component, index) => {

            switch (component.name) {
                case "Header":
                    const Header = loadable(() => import('../../components/Header/Header.jsx'));
                    renderThese.push(<Header key={component.name + index} title={props.title} />);
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

        updateSections(renderThese);

    }, [props.components, props.title]);

    return (
        <Fragment>
            {sections.map( section => {
                return section;
            })}
        </Fragment>
    )
}
