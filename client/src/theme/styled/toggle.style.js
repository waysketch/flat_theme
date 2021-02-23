import styled from 'styled-components';


export const Toggle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 3em;
    height: 1.5em;
    background-color: ${props => props.theme.color.primary_off};
    border-radius: 1em;
    overflow: hidden;
`;

export const Dot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    color: ${props => props.theme.darkMode ? props.theme.color.font : props.theme.color.splash};
    background-color: ${props => props.theme.color.primary};
    transform: translateX(${props => props.toggledOn ? "1px" : "1.5em"});
    transition: transform .2s;

    svg {
        padding: .1em;
    }

    &:hover {
        cursor: pointer;
    }
`;