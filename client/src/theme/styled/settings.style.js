import styled from 'styled-components';

export const Swatch = styled.div`
    min-width: 2em;
    min-height: 2em;
    border-radius: .5em;
    margin: 1px;
    background-color: ${props => props.background_color};

    &:hover {
        cursor: pointer;
    }
`;