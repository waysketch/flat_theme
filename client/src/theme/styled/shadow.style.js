import styled from 'styled-components';

export const Shadow = styled.div`
    display: ${props => props.show ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw !important;
    height: 100vh !important;
    padding: 0 !important;
    margin: 0 !important;
    background-color: rgba(0,0,0,.6);
    z-index: 800;
    cursor: pointer;
`;

export const NavShadow = styled(Shadow)`
    background-color: none;
`;