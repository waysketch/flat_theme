import { useState, useEffect } from 'react';
import * as S from '../../theme';
import CreatePage from '../CreatePage/CreatePage.jsx';
import CreateUser from '../CreateUser/CreateUser.jsx';

export default function Toolbox() {
    // === STATE === //
    const [openToolboxToggle, updateOpenToolboxToggle] = useState(false);

    // === ON LOAD === //
    useEffect(() => {
        // check if user is gold keyed?
        
    }, []);

    // === FUNCTIONS === //
    const closeToolbox = () => {
        updateOpenToolboxToggle(!openToolboxToggle);
    };

    // === RETURN === //
    return (
        <S.Toolbox isOpen={openToolboxToggle}>

            <div className="toggle">

                <S.Tab onClick={closeToolbox} title={openToolboxToggle ? "close" : "open"} open={openToolboxToggle}>
                    {openToolboxToggle ? S.svg.sign_out : S.svg.toolbox}
                </S.Tab>

                <S.Tab title="Pages" open={openToolboxToggle}>
                    {S.svg.file}
                </S.Tab>

                <S.Tab title="Style" open={openToolboxToggle}>
                    {S.svg.swatchbook}
                </S.Tab>

                <S.Tab title="Users" open={openToolboxToggle}>
                    {S.svg.user_edit}
                </S.Tab>

                <S.Tab title="Users" open={openToolboxToggle}>
                    {S.svg.images}
                </S.Tab>

                <S.Tab title="Settings" open={openToolboxToggle}>
                    {S.svg.tools}
                </S.Tab>

            </div>

            <h2>Toolbox!</h2>

            <ul>
                <li>Create User</li>
                <li>SAVE</li>
            </ul>
            <div>
                <CreatePage />
            </div>
            <div>
                <CreateUser />
            </div>
        </S.Toolbox>
    )
}
