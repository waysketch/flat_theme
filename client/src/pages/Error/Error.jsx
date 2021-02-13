import React from 'react';
import * as S from '../../theme';
import Header from '../../components/Header/Header.jsx';

export default function Error() {
    return (
        <S.Root>
            <S.Frame>
                <Header title="404 Error" />
            </S.Frame>
        </S.Root>
    )
};