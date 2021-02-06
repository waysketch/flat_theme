import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
// import { darkMode } from '../redux/reducer';

// FILL FROM DATABASE //
let darkMode = true;

// ========= //
//   FONTS   //
// ========= //
const headerUrl = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&family=Roboto+Slab:wght@100;400;800;900&display=swap';
const bodyUrl = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap';

const headerFamily = "Roboto Slab, serif";
const bodyFamily = "Open Sans, sans-serif";
const splashFamily = "Roboto Slab, serif";

// ========== //
//   COLORS   //
// ========== //
const palette = {
    black:"#000",
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

    color: {
        font: darkMode ? palette.light : palette.dark,
        background: darkMode ? palette.dark : palette.light,

        primary: darkMode ? palette.dark : palette.light,
        primary_off: darkMode ? palette.grey : palette.fogDog,

        secondary: darkMode ? palette.gold : palette.red,
        secondary_off: darkMode ? palette.light : palette.dark,

        splash: palette.gold,
    },

    breakpoint: {
        mobile: "767px",
        tablet: "768px",
        desktop: "1040px",
    },

    font: {
        header: "",
        body: "",
        splash: "",
    },

    max: {
        width: "1200px",
    },
};

// ======== //
//   WRAP   //
// ======== //
const StyledRoot = styled.main`
    @import url(${props => props.foo});
    @import url(${props => props.bar});
`;

// ============= //
//   THEME JSX   //
// ============= //
const Theme = ({children}) => (
    <StyledRoot foo={headerUrl} bar={bodyUrl}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </StyledRoot>
);

export default Theme;