import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    height: 200px;
    outline: 1px solid ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.primary};
    overflow: hidden;
`;

export const FooterSection = styled.section`

    &:nth-child(1){
        width: 25%;
    }
    
    &:nth-child(2){
        width: 50%;
    }

    &:nth-child(3) {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
        width: 25%;
    }

`;

export const Copywrite = styled.section`
    width: 100%;
    padding: .2em 0 .4em;
    background-color: ${props => props.theme.color.primary_off};
    text-align: center;
`;