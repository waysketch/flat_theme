import styled from 'styled-components';

export const Toolbox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: calc(100vh - 1em);
    z-index: 900;
    padding: .5em;
    background-color:${props => props.theme.color.font};
    color: ${props => props.theme.color.background};
    transition: transform .3s;
    transform: translateX(${props => props.isOpen ? "0" : "100%"});

    .toggle {
        position: absolute;
        top: .2em;
        left: -1.7em;
        width: 1.5em;
        height: 1.5em;
        color: ${props => props.theme.color.font};

        &:hover {
            cursor: pointer;
        }
    }
`;