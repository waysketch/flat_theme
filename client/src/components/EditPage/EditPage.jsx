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
    const [hideFooter, updateHideFooter] = useState(false);
    const [navOptions, updateNavOptions] = useState([]);

    const submitPageHandler = () => {
        // === ROUTE === //
        const url = "/api/pages/create";

        // === BODY === //
        const page = {
            name: pageName,
            route: pageUrl,
            nav: navOptions,
            hide_footer: hideFooter,
            components: [
                {
                    name: "Header",
                    data: {
                        title: `${pageName} Page`
                    }
                },
                
                {
                    name: "Deck",
                    data: {
                        cards: [
                            {
                                title: "Card One",
                                body: "hello world"
                            },
                            {
                                title: "Card Two",
                                body: "just type anything here"
                            },
                            {
                                title: "Flat Card",
                                body: "Ok no more typing"
                            }
                        ]
                    }
                }
            ],
            last_updated: {
                by: "sketch@waysketch.com",
                date: new Date()
            }
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

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <S.Frame>
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

                <p>Navigation:</p>
                <label htmlFor="add_to_menu">Main Menu</label>
                <input onChange={() => navOptions.indexOf('header') === -1 ? updateNavOptions([...navOptions,'header']) : updateNavOptions(navOptions.filter(menu => menu !== 'header'))} type="checkbox" name="add_to_menu" />
                <label htmlFor="add_to_footer">Footer</label>
                <input onChange={() => navOptions.indexOf('footer') === -1 ? updateNavOptions([...navOptions,'footer']) : updateNavOptions(navOptions.filter(menu => menu !== 'footer'))} type="checkbox" name="add_to_footer" />

                <label htmlFor="hide_footer">Hide Footer?</label>
                <input onChange={() => updateHideFooter(!hideFooter)} type="checkbox" name="hide_footer"/>

                <S.SolidButton onClick={submitPageHandler}>
                    Create Page
                </S.SolidButton>

            </S.Frame>

            <S.Frame>
                <h2>Search Page</h2>
                <S.Search>
                    <input type="text" placeholder="Search" />
                    <S.SolidButton>{S.svg.search}</S.SolidButton>
                </S.Search>
            </S.Frame>

            <S.Frame>
                <h2>Edit Page</h2>
                <S.SubMenu>
                    <h4>Page Title</h4>
                    <input type="text" placeholder="Page Name" />

                    <h4>Link Locations</h4>
                    <p>[ ] Menu</p>
                    <p>[ ] Footer</p>

                    <h4>Hide Footer?</h4>
                    <p>[ ]</p>
                    
                    <S.SolidButton
                    background_color={props => props.theme.palette.darkRed}
                    hover_background_color={props => props.theme.palette.red}
                    onClick={() => {updateToastData(<p>Feature Not Added Yet</p>)}}
                >
                    Delete Page
                </S.SolidButton>
                </S.SubMenu>
            </S.Frame>


        </S.Frame>
    )
}
