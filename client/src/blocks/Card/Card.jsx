import * as S from '../../theme';

export default function Card(props) {
    return (
        <S.Card>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </S.Card>
    )
}
