import styled from 'styled-components';

export const Search = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border: 2px solid rgba(0,0,0,0);
    border-radius: .5em;

    input {
        height: 2em;
        border-radius: .5em 0 0 .5em;
        border: none;
        flex-grow: 2;
        margin: 0 !important;

        &:focus {
            outline: none !important;
        }
    }

    p {
        padding: 0;
        flex-grow: 1;
        border-radius: 0 .5em .5em 0;
        border: none;

        &:hover {
            border: none;
        }

        &:active {
            transform: none;
        }

        &:active svg {
            transform: translateY(3px);
        }

        svg {
            width: 2em;
        }
    }

    &:focus-within {
        border: 2px dashed ${props => props.theme.color.splash_off};
    }
`;