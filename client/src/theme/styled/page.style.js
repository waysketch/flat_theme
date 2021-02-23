import styled from 'styled-components';

export const Page = styled.div`
    min-height: calc(100vh - 200px);
`;

export const Wrap = styled.div`
    width: 130vw;
    display:flex;
    flex-wrap: nowrap;
    transform: translateX(${props => props.hidden ? "0" : "-30vw"});
    background-color: ${props => props.hidden ? props.theme.color.primary_off : props.theme.color.background};
    transition: transform .3s ease-out, background-color .3s;

    @media (max-width: ${props => props.theme.breakpoint.mobile}) {
        width: 170vw;
        transform: translateX(${props => props.hidden ? "0" : "-70vw"});
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        width: 100vw;
        transform: none;
    }
`;

export const Bundle = styled.div`
    width: 100vw;
`;