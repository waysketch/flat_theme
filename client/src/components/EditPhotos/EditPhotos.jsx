import * as S from '../../theme';

export default function EditPhotos() {
    return (
        <S.Frame>
            <h2>Photos</h2>

            <S.SolidButton>
                Upload
            </S.SolidButton>

            <S.SolidButton
                background_color={props => props.theme.palette.darkRed}
                hover_background_color={props => props.theme.palette.red}
            >
                Delete
            </S.SolidButton>
        </S.Frame>
    )
}
