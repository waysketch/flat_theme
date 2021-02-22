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

export const WireFrame = styled(Frame)`
    border: 1px dotted ${props => props.theme.color.primary};
    border-radius: .5em;
    padding: .25em;
    margin-top: .5em;
    margin-bottom: .5em;

    h2 {
        border-bottom: 1px dotted ${props => props.theme.color.primary};
    }
`;