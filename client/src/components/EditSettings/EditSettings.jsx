import { Fragment } from 'react';
import * as S from '../../theme';
import axios from 'axios';

const nuke = () => {
    axios.get("/api/pages/nuke")
        .then(_ => {
            window.location = "/";
        });
};

export default function EditSettings() {
    return (
        <Fragment>

            <S.Frame>
                <h2>Settings</h2>
                <S.SolidButton
                    background_color={props => props.theme.palette.darkRed}
                    hover_background_color={props => props.theme.palette.red}
                    onClick={nuke}
                >
                    Delete All Pages
                </S.SolidButton>
            </S.Frame>

            <S.Frame>
                <h2>Analytics</h2>

                <p>GA-</p>
                <input type="text" placeholder="GTM-xxxxxxx" />
                <a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer">Google Tag Manager</a>

                <p>UA-</p>
                <input type="text" placeholder="UA-xxxxxxxxx-x" />
                <a href="hhttps://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a>
            </S.Frame>

            <S.Frame>
                <h2>SEO</h2>
                <p>Description</p>
                <input type="text" placeholder="Site description" />
                <p>OGImage</p>
                <p>robots.txt</p>
            </S.Frame>

        </Fragment>
    );
};
