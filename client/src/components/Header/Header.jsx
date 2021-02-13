import * as S from '../../theme';

Header.defaultProps = {
    title: "Welcome"
}

export default function Header(props) {
    return (
        <S.Frame>
            <h1>{props.title}</h1>
        </S.Frame>
    )
}
