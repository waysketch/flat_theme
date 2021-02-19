import * as S from '../../theme';

Header.defaultProps = {
    data: {
        title: "Welcome"
    }
};

export default function Header(props) {
    return (
        <S.Frame>
            <h1>{props.data.title}</h1>
        </S.Frame>
    )
}
