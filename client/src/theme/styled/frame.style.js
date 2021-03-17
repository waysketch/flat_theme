import styled from 'styled-components';

export const Frame = styled.section`
    max-width: ${props => props.theme.max.width};
    margin: ${props => props.margin ? `${props.margin}` : "auto auto 2em auto"};
`;

export const FlexFrame = styled(Frame)`
    width: 100%;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: ${props => props.max_width ?? props.theme.max.width};
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

export const SubMenu = styled.div`
    background-color: ${props => props.theme.palette.white};
    border-radius: .5em;
    overflow-y: auto;
    overflow-x: hidden;
    padding: .5em;
    margin: .5em auto;
`;

export const DashedFrame = styled(Frame)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 2px dashed ${props => props.theme.color.splash_off};
    border-radius: .5em;
    margin: 0 auto;
`;

export const Section = styled.section`
    position: relative;
`;