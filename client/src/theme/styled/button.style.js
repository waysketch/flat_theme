import styled from 'styled-components';

export const Button = styled.p`
    padding: .5em 1em;
    border: 1px solid ${props => props.theme.color.font};
    border-radius: 5px;
    color: ${props => props.theme.color.font};
    font-weight: 900;
    width: fit-content;
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.color.splash};
        border: 1px solid ${props => props.theme.color.splash};
    }

    &:active {
        transform: translateY(4px);
    }
`;

export const SolidButton = styled(Button)`
    background-color: ${props => props.theme.color.splash};
    border: 1px solid ${props => props.theme.color.splash};

    &:hover {
        border: 1px solid ${props => props.theme.color.splash_off};
        background-color: ${props => props.theme.color.splash_off};
    }
`;