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
            <div className="toggle" onClick={closeToolbox}>
                {openToolboxToggle ? S.svg.sign_out : S.svg.toolbox}
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
