import styled from `styled-components`;
import './reset.css';

// ============== //
//   COMPONENTS   //
// ============== //
export const Root = styled.div`
    font-family: ${props => props.theme.font.body};
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.primary};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 900;
        font-family: ${props => props.theme.color.primary}
    }
`;

export const Frame = styled.div`

`;