import styled from 'styled-components';

export const Page = styled.div`
    min-height: calc(100vh - 200px);
`;

export const Wrap = styled.div`
    width: auto; // Nav 80vw and Bundle 100vw;
    display:flex;
    flex-wrap: nowrap;
    transform: translateX(${props => props.hidden ? "auto" : "-" + props.navWidth});
    transition: transform .3s ease-out;
`;

export const Bundle = styled.div`
    
`;