import * as S from '../../theme';

Header.defaultProps = {
    data: {
        title: "Welcome"
    }
};

export default function Header(props) {
    return (
        <S.HalfHeader>
            <h1>{props.data.title}</h1>
        </S.HalfHeader>
    )
}
