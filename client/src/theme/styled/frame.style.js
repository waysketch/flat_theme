import styled from 'styled-components';

export const Frame = styled.section`
    max-width: ${props => props.theme.max.width};
    margin-left: auto;
    margin-right: auto;
`;

export const FlexFrame = styled(Frame)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;