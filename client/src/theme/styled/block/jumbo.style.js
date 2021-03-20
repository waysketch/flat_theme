import styled from 'styled-components';

export const JumboSection = styled.div`
    width: 100vw;
    height: 80vh;
    opacity: .5;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: ${props => props.theme.palette.dark};
    background-image: url(${props => props.backgroundImage ?? props.defaultImage});
`;