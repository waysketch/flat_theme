import styled from 'styled-components';

export const Toolbox = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    min-width: 250px;
    max-width: calc(100vw - 4em);
    height: calc(100vh - 1em);
    padding: .5em;
    border-right: 5em solid ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.font};
    color: ${props => props.theme.color.background};
    transition: transform 0.7s cubic-bezier(0.68, -0.9, 0.32, 1.6);
    transform: translateX(${props => props.isOpen ? "5em" : "101%"});
    z-index: 900;
`;

export const ToggleBar = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 3em;
    top: 0;
    left: calc(-3em);

    &:hover {
        cursor: pointer;
    }
`;

export const Tab = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.active ? props.theme.color.font : "none"};
    color: ${props => props.active ? props.theme.color.splash : props.theme.color.font};
    opacity: ${props => props.active ? "1" : ".5"};
    align-items: center;
    text-align: center;
    height: ${props => props.open ? "2em" : ".5em"};
    width: ${props => props.open ? "2em" : ".5em"};
    padding: .5em;
    border: 1px dotted ${props => props.theme.color.font};
    transition: width .3s .3s, height .3s .3s, border-radius .3s .3s;

    &:hover {
        opacity: 1;
        color: ${props => props.theme.color.splash};
        background-color: ${props => props.theme.color.font};
    }

    &:active svg {
        transform: translateY(3px);
    }

    &:first-child {
        border-radius: ${props => props.open ? '.5em 0 0 0' : '.5em 0 0 .5em'};
        height: 2em;
        width: 2em;

        &:active svg {
            transform: none;
        }
    }

    &:nth-child(2) {
        border-top: 0;
    }

    &:nth-child(even) {
        border-bottom: none;
    }

    &:last-child {
        border-radius: 0 0 0 .5em;
        border-bottom: 1px dotted ${props => props.theme.color.font};
    }

    @media (max-width: ${props => props.theme.breakpoint.mobile}) {
        background-color: ${props => props.active ? props.theme.color.font : "rgba(0, 0, 0, .67)"};
    }
`;

export const ToolBoxMenu = styled.div`
    height: calc( 100vh - 2em );
    width: auto;
    padding: .5em;
    overflow-y: auto;
`;
