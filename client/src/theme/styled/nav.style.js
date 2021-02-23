import styled from 'styled-components';

export const Nav = styled.nav`
    position: relative;
    display: block;
    width: 30vw;
    background-color: ${props => props.theme.color.background};
    min-height: 100vh;

    @media (max-width: ${props => props.theme.breakpoint.mobile}) {
        width: 70vw;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display: none;
    }
`;

export const NavFrame = styled.div`
    position: sticky;
    top: 0;
    right: 0;
`;

export const MobileTab = styled.div`
    position: absolute;
    top: 0;
    right: -1em;
    width: 1em;

    .bar {
        margin: 4px 0;
        display: block;
        width: 100%;
        border-top: 2px solid ${props => props.theme.color.font};
        user-select: none;
    };

    &:hover {
        cursor: pointer;
    }
`;