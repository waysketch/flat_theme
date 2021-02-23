import styled from 'styled-components';

export const Deck = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 240px;
    height: 40vh;
    margin: 4px;
    border-radius: .5em;
    background-color: ${props => props.theme.palette.light};
    color: ${props => props.theme.palette.dark};
    box-shadow: 0 0 3px ${props => props.theme.palette.darkdark};
    overflow: hidden;
`;