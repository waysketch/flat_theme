import styled from 'styled-components';

export const Toolbox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: calc(100vh - 1em);
    z-index: 900;
    padding: .5em;
    background-color:${props => props.theme.palette.light};
    color: ${props => props.theme.palette.dark};
    transition: transform .3s;
`;