import { useState, useEffect } from 'react';
import * as S from '../../theme';
import CreatePage from '../CreatePage/CreatePage.jsx';
import CreateUser from '../CreateUser/CreateUser.jsx';
import EditStyles from '../EditStyles/EditStyles.jsx';
import EditPhotos from '../EditPhotos/EditPhotos.jsx';
import EditSettings from '../EditSettings/EditSettings.jsx';

export default function Toolbox() {
    // === STATE === //
    const [openToolboxToggle, updateOpenToolboxToggle] = useState(false);
    const [openTab, updateOpenTab] = useState('none');
    const [lastOpenTab, updateLastOpenTab] = useState("");
    const [activeComponent, updateActiveComponent] = useState('');
    const tabs = [
        { title: "Pages", svg: "file", component: <CreatePage />},
        { title: "Style", svg: "swatchbook", component: <EditStyles />},
        { title: "Users", svg: "user_edit", component: <CreateUser />},
        { title: "Photos", svg: "images", component: <EditPhotos />},
        { title: "Settings", svg: "tools", component: <EditSettings />}
    ];

    // === ON LOAD === //
    useEffect(() => {
        // check if user is gold keyed?
        
    }, []);

    // === FUNCTIONS === //
    const closeToolbox = () => {
        if (!openToolboxToggle && activeComponent === "") { updateActiveComponent(tabs[0].component) };

        if (!openToolboxToggle && lastOpenTab !== "") {
            updateOpenTab(lastOpenTab);
        } else if (!openToolboxToggle && lastOpenTab === ""){
            updateOpenTab(tabs[0].title);
        } else {
            updateOpenTab("");
        };

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
                
                {/* ==== */}
                {/* TABS */}
                {/* ==== */}
                {tabs.map( tab => {
                    return ( 
                    <S.Tab
                    key={tab.title}
                    title={tab.title}
                    active={openTab === tab.title ? true : false}
                    open={openToolboxToggle}
                    onClick={() => { 
                        updateOpenTab(tab.title);
                        updateLastOpenTab(tab.title);
                        updateActiveComponent(tab.component);
                        if (!openToolboxToggle) { updateOpenToolboxToggle(true) };
                    }}>
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
