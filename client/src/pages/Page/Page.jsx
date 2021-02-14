import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer";

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
                    renderThese.push(<Header key={component.name + index} title={props.title} />);
                    break;
                case "Footer":
                    renderThese.push(<Footer key={component.name + index} />);
                    break;
                default:
                    console.log(`Could not render ${component.name} at index ${index} in the component tree.`);
                    break;
            };
        });

        updateSections(renderThese);

    }, []);

    return (
        <Fragment>
            {sections.map( section => {
                return section;
            })}
        </Fragment>
    )
}
