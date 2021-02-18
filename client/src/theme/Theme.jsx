import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import './reset.css';

// ============= //
//   THEME JSX   //
// ============= //
export default function Theme({ children }) {

    // FILL FROM DATABASE //
    const [darkMode] = useState(useSelector(state => state.darkMode));

    // ========= //
    //   FONTS   //
    // ========= //
    let headerUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;900&display=swap';
    let bodyUrl = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap';

    const headerFamily = "Open Sans, sans-serif";
    const bodyFamily = "'Roboto Slab', serif";
    const splashFamily = "'Roboto Slab', serif";

    // ========== //
    //   COLORS   //
    // ========== //
    const palette = {
        black: "#000",
        dark: "#2d3436",
        grey: "#596275",
        white: "#fff",
        light: "#dfe6e9",
        blue: "#3498db",
        darkBlue: "#2980b9",
        green: "#2ecc71",
        darkGreen: "#27ae60",
        red: "#e74c3c",
        darkRed: "#c0392b",
        orange: "#f39c12",
        yellow: "#f6e58d",
        darkYellow: "#f6e58d",
        gold: "#ccae62",

        // rad colors
        fogDog: "#f06d06",
    }

    // ================ //
    //   THEME OBJECT   //
    // ================ //
    const theme = {

        palette: palette,

        color: {
            font: darkMode ? palette.light : palette.dark,
            background: darkMode ? palette.dark : palette.light,

            primary: darkMode ? palette.dark : palette.light,
            primary_off: darkMode ? palette.grey : palette.fogDog,

            secondary: darkMode ? palette.gold : palette.red,
            secondary_off: darkMode ? palette.light : palette.dark,

            splash: darkMode ? palette.darkBlue : palette.gold,
            splash_off: darkMode ? palette.blue : palette.red,
        },

        breakpoint: {
            mobile: "767px",
            tablet: "768px",
            desktop: "1040px",
        },

        font: {
            header: headerFamily,
            body: bodyFamily,
            splash: splashFamily,
        },

        max: {
            width: "1200px",
        },
    };

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <Reset
            foo={headerUrl}
            bar={bodyUrl}
            textFontFamily={bodyFamily}
            headerFontFamily={headerFamily}
            fontColor={theme.color.font}
            backgroundColor={theme.color.background}
            splashColor={theme.color.splash}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Reset>
    )
};

// ========= //
//   RESET   //
// ========= //
const Reset = styled.main`
    font-family: ${props => props.textFontFamily};
    width: 100vw;
    height: 100vh;
    color: ${props => props.fontColor};
    background-color: ${props => props.backgroundColor};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 900;
        font-family: ${props => props.headerFontFamily};
    }

    a {
        color: ${props => props.splashColor};
    }
`;