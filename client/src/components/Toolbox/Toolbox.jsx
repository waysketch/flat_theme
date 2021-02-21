import { useState, useEffect } from 'react';
import * as S from '../../theme';
import CreatePage from '../CreatePage/CreatePage.jsx';
import CreateUser from '../CreateUser/CreateUser.jsx';

export default function Toolbox() {
    // === STATE === //
    const [openToolboxToggle, updateOpenToolboxToggle] = useState(false);
    const [openTab, updateOpenTab] = useState('none');
    const [activeComponent, updateActiveComponent] = useState('');
    const tabs = [
        { title: "Pages", svg: "file", component: <CreatePage />},
        { title: "Style", svg: "swatchbook"},
        { title: "Users", svg: "user_edit", component: <CreateUser />},
        { title: "Photos", svg: "images"},
        { title: "Settings", svg: "tools"}
    ];

    // === ON LOAD === //
    useEffect(() => {
        // check if user is gold keyed?
        
    }, []);

    // === FUNCTIONS === //
    const closeToolbox = () => {
        !openToolboxToggle ? updateActiveComponent(tabs[0].component) : updateActiveComponent("");
        !openToolboxToggle ? updateOpenTab(tabs[0].title) : updateOpenTab('Main Menu');
        updateOpenToolboxToggle(!openToolboxToggle);
    };

    // === RETURN === //
    return (
        <S.Toolbox isOpen={openToolboxToggle}>

            {/* ============ */}
            {/* SIDE BUTTONS */}
            {/* ============ */}
            <S.ToggleBar>

                <S.Tab onClick={closeToolbox} title={openToolboxToggle ? "close" : "open"} open={openToolboxToggle}>
                    {openToolboxToggle ? S.svg.sign_out : S.svg.toolbox}
                </S.Tab>
                
                {/* ========= */}
                {/* LOAD TABS */}
                {/* ========= */}
                {tabs.map( tab => {
                    return ( 
                    <S.Tab
                    key={tab.title}
                    title={tab.title}
                    active={openTab === tab.title ? true : false}
                    open={openToolboxToggle}
                    onClick={() => { updateOpenTab(tab.title); updateActiveComponent(tab.component);}}
                    >
                        {S.svg[tab.svg]}
                    </S.Tab> );
                })}

            </S.ToggleBar>
            
            {/* ================ */}
            {/* WHAT CAN BE SEEN */}
            {/* ================ */}
            <S.ToolBoxMenu>
                {activeComponent}
            </S.ToolBoxMenu>
            
        </S.Toolbox>
    )
}
