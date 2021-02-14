import styled from 'styled-components';

// ============== //
//   COMPONENTS   //
// ============== //
export const Frame = styled.section`
    max-width: ${props => props.theme.max.width};
    margin: auto;
`;

export const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2d3436;
    z-index: 9000;
`;

export const Footer = styled.footer`
    z-index: 1;
`;