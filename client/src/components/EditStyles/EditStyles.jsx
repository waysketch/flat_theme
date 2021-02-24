import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../theme';

export default function EditStyles() {
    const darkMode = useSelector(state => state.darkMode);
    const palette = [
        "#000",
        "#1e272e",
        "#2d3436",
        "#596275",
        "#3498db",
        "#2980b9",
        "#2ecc71",
        "#27ae60",
        "#e74c3c",
        "#c0392b",
        "#f39c12",
        "#ccae62",
        "#f6e58d",
        "#f6e58d",
        "#dfe6e9",
        "#fff",
    ];

    return (
        <Fragment>

            <S.Frame>
                <h2>Style</h2>
                <h4>Default Mode</h4>
                <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>

                <S.Frame>
                    <h4>Paint Swatches</h4>
                    <S.FlexFrame max_width="10em">
                        {palette.map((swatch, index) => {
                            return <S.Swatch background_color={swatch} key={index} title={swatch} />
                        })}
                    </S.FlexFrame>
                    {/* TODO: RegEx for hex or rgba */}
                    <input type="text" placeholder="#000000" />
                </S.Frame>
            </S.Frame>

            <S.Frame>
                <h2>Branding</h2>
                <h4>Logo</h4>
            </S.Frame>

        </Fragment>
    )
}
