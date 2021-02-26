import styled from 'styled-components';

export const Add = styled.section`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${props => props.theme.color.secondary_off};
    color: ${props => props.theme.color.splash_off};
    flex-wrap: nowrap;
    z-index: 900;
    padding: 2em .5em;
    margin: 0;

    h2 {
        font-size: 3em;

        &:hover {
            color: ${props => props.theme.color.splash};
            cursor: pointer;
        }

        &:active {
            transform: translateY(4px);
        }
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 25vh;
    }
`;