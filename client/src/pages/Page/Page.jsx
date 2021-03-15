import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComponents } from '../../redux/actions';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import { Builder } from './Builder.jsx';
import Add from '../../components/Add/Add.jsx';
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
        // TODO currently this refreshes the whole page.
        // Maybe have the Builder skip already built components?
        
        const renderThese = [];

        components.forEach((block, index) => {
            Builder(block, index, renderThese);
        });

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
    useEffect(() => {
        dispatch(updateComponents(props.components));
        updateComponentList(props.components);
        buildBlocks();
    }, [props.components,isLoggedIn]);

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
                    {sections.map((section, index) => {
                        return <section className="todo_replace_this_class" key={index}>{section}</section>;
                    })}
                </S.Page>
            </S.Bundle>
        </S.Wrap>
    );
};
