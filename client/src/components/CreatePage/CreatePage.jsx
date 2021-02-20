import { useState } from 'react';
import * as S from '../../theme';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateToastData } from '../../redux/actions';

export default function CreatePage() {
    // === STATE === //
    const dispatch = useDispatch();
    const [pageName, updatePageName] = useState("");
    const [pageUrl, updatePageUrl] = useState("");

    const submitPageHandler = () => {
        // === ROUTE === //
        const url = "/api/pages/create";

        // === BODY === //
        const page = {
            user: "waysketch@gmail.com",
            name: pageName,
            route: `/${pageUrl}`,
            nav: ["header"],
            hide_footer: false,
            components: [{
                name: "Header",
                data: {
                    title: `${pageName} Page`
                }
            }]
        };

        // === SUBMIT USER === //
        axios.post(url, page)
        .then( _ => {
            const goThere = () => {
                window.location = `/${pageUrl}`;
            };
            goThere();
        })
        .catch( _ => {
            dispatch(updateToastData(`Unable to create Page`));
        })
        .finally( _ => {
            updatePageName("");
            updatePageUrl("");
        });
    }

    // === RETURN === //
    return (
        <div>
            <h2>Create Page</h2>
            <S.Frame>
                
                <label htmlFor="page_name">Name:</label>
                <input
                value={pageName}
                onChange={e => updatePageName(e.target.value)}
                type="text"
                name="page_name"
                />

                <label htmlFor="route">Url:</label>
                <p>yourwebsite.com/
                    <input
                    value={pageUrl}
                    onChange={e => updatePageUrl(e.target.value)}
                    type="text"
                    name="route"
                    />
                </p>

                <label htmlFor="nav">Navigation:</label>
                
                {/* navMenus.map(navMenu => return options) */}
                <option value="nav">Menu</option>
                <option value="footer">Footer</option>
                <option value="custom1">Custom Menu</option>
                
                <label htmlFor="hide_footer">Hide Footer?</label>
                <input type="checkbox" name="hide_footer"/>

                <S.SolidButton onClick={submitPageHandler}>
                    Create Page
                </S.SolidButton>

            </S.Frame>
        </div>
    )
}
