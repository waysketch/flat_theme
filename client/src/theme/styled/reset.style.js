import styled from 'styled-components';

export const Reset = styled.main`
    position: relative;
    font-family: ${props => props.theme.font.body};
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.background};
    overflow-x: hidden;

    * {
        &::selection {
            color: ${props => props.theme.palette.white};
            background-color: ${props => props.theme.color.splash};
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 900;
        font-family: ${props => props.theme.font.header};
    }


    a {
        color: ${props => props.theme.color.splash_off};
    }

    input {
        display: block;
        border: none;
        padding: 2px 4px;
        margin-bottom: 2px;

        &:focus {
            outline: 2px dotted ${props => props.theme.color.splash_off}
        }
    }

    ul {
        list-style: none;

        li {
            padding-right: .5em;
        }
    }

    svg {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        user-select: none;
    }
`;