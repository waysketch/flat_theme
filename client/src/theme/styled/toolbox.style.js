import styled from 'styled-components';

export const Toolbox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: calc(100vh - 1em);
    z-index: 900;
    padding: .5em;
    border-right: 5em solid ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.font};
    color: ${props => props.theme.color.background};
    transition: transform 0.7s cubic-bezier(0.68, -0.9, 0.32, 1.6);
    transform: translateX(${props => props.isOpen ? "5em" : "100%"});

    /* 
    &:after {
        position: absolute;
        top: 0;
        right: -5em;
        height: calc(100vh - 1em);
        width: 5em;
        content: "";
    } */

    .toggle {
        position: absolute;
        top: 0;
        left: calc(-3em - 2px);
        color: ${props => props.theme.color.font};

        &:hover {
            cursor: pointer;
        }
    }
`;

export const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 2em;
    width: 2em;
    padding: .5em;
    border: 1px dotted ${props => props.theme.color.font};
    opacity: .5;

    svg {
        max-width: 1.5em;
        max-height: 1.5em;
        user-select: none;
    }

    &:hover {
        opacity: 1;
        color: ${props => props.theme.color.splash};
        background-color: ${props => props.theme.color.font};
    }

    &:active svg {
        transform: translateY(3px);
    }

    &:first-child {
        border-bottom: none;
        border-radius: .5em 0 0 0;

        &:active svg {
            transform: none;
        }
    }

    &:last-child {
        border-radius: 0 0 0 .5em;
    }

    &:nth-child(even) {
        border-bottom: none;
    }
`;