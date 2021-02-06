import { ThemeProvider } from "styled-components";

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Theme;