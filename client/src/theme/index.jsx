import styled from 'styled-components';

// ========================== //
// === EXPORT FROM FOLDER === //
// ========================== //
export * from './components/toolbox.style';

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

export const NoDatabase = styled.div`
    z-index: 1;
`;

export const Setup = styled.div`
    z-index: 1;
`;

export const Toast = styled.div`
    display: ${props => props.show ? "block" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw !important;
    height: 100vh !important;
    padding: 0 !important;
    margin: 0 !important;
    z-index: 800;
`;

export const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw !important;
    height: 100vh !important;
    padding: 0 !important;
    margin: 0 !important;
    background-color: rgba(0,0,0,.6);
    z-index: -1;
    cursor: pointer;
`;