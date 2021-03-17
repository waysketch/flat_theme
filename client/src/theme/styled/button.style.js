import styled from 'styled-components';

export const Button = styled.p`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: .5em 1em;
    border: 1px solid ${props => props.background_color ? props.background_color : props.theme.color.font};
    border-radius: 5px;
    color: ${props => props.font_color ? props.font_color : props.theme.color.font};
    font-weight: 900;
    width: fit-content;
    user-select: none;

    svg {
        height: 1em;
        width: 1em;
    }

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
    background-color: ${props => props.background_color ? props.background_color : props.theme.color.splash};

    &:hover {
        border: 1px solid ${props => props.hover_background_color ? props.hover_background_color : props.theme.color.splash_off};
        background-color: ${props => props.hover_background_color ? props.hover_background_color : props.theme.color.splash_off};
    }
`;

export const AddButton = styled(Button)`

`;

export const DeleteButton = styled.div`
    position: absolute;
    top: 0;
    left: 1em;

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translateY(4px);
    }
`;