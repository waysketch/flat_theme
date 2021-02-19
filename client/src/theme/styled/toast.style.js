import styled from 'styled-components';

export const Toast = styled.div`
    display: ${props => props.show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    width: fit-content;
    max-width: 100vw;
    max-height: 90vh;
    padding: 1em !important;
    margin: 0 !important;
    z-index: 800;
    transition: transform .3s;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.color.background};
    border-radius: .5em;
`;

export const TinyToast = styled.div`
    display: ${props => props.show ? "block" : "none"};
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    padding: 0 !important;
    margin: 0 1em 0 0 !important;
    z-index: 800;
`;