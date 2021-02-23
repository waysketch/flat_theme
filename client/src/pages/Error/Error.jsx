import Header from '../../blocks/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import * as S from '../../theme';

export default function Error() {
    return (
        <S.Bundle>
            <S.Page>
                <Header data={{title: "404 Error"}} />
            </S.Page>
            <Footer />
        </S.Bundle>
    )
};