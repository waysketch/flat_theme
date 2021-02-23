import styled from 'styled-components';

export const Header = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5em;
`;

export const HalfHeader = styled(Header)`
    height: 50vh;
`;

export const ButtonHeader = styled(Header)`
    font-size: 1em;
`;