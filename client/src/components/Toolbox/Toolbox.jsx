import { useState } from 'react';
import * as S from '../../theme';
import EditPage from '../EditPage/EditPage.jsx';
import EditMenu from '../EditMenu/EditMenu.jsx';
import CreateUser from '../CreateUser/CreateUser.jsx';
import EditStyles from '../EditStyles/EditStyles.jsx';
import EditPhotos from '../EditPhotos/EditPhotos.jsx';
import EditUser from '../EditUser/EditUser.jsx';
import EditSettings from '../EditSettings/EditSettings.jsx';

export default function Toolbox() {
    // === STATE === //
    const [openToolboxToggle, updateOpenToolboxToggle] = useState(false);
    const [openTab, updateOpenTab] = useState('none');
    const [lastOpenTab, updateLastOpenTab] = useState("");
    const [activeComponent, updateActiveComponent] = useState('');
    const tabs = [
        { title: "Pages", svg: "file", component: <EditPage />},
        { title: "Menu", svg: "dots", component: <EditMenu />},
        { title: "Style", svg: "swatchbook", component: <EditStyles />},
        { title: "Users", svg: "user_edit", component: [<CreateUser key={0} />, <EditUser key={1} />]},
        { title: "Photos", svg: "images", component: <EditPhotos />},
        { title: "Settings", svg: "tools", component: <EditSettings />}
    ];

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
                {tabs.map( (tab, index) => {
                    return ( 
                    <S.Tab
                    key={index}
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
