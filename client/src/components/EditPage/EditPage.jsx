import { useState } from 'react';
import * as S from '../../theme';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateToastData } from '../../redux/actions';

export default function EditPage() {
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
                
                <label htmlFor="hide_footer">Hide Footer?</label>
                <input type="checkbox" name="hide_footer"/>

                <S.SolidButton onClick={submitPageHandler}>
                    Create Page
                </S.SolidButton>

                <S.SolidButton
                    background_color={props => props.theme.palette.darkRed}
                    hover_background_color={props => props.theme.palette.red}
                    onClick={() => {updateToastData(<p>Feature Not Added Yet</p>)}}
                >
                    Delete Page
                </S.SolidButton>

            </S.Frame>

            <S.Frame>
                <h2>Menu</h2>
                
            </S.Frame>

            <S.Frame>
                <h2>Footer</h2>
            </S.Frame>
        </div>
    )
}
