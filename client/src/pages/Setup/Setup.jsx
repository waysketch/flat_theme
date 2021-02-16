import * as S from '../../theme';

export default function Setup() {
    return (
        <S.Setup>
            <h1>Setup Page</h1>
            <p>Welcome. It looks like this website has not yet been setup.</p>
            <input type="email" name="email" id="email" placeholder="example@waysketch.com"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="re-type password"/>
        </S.Setup>
    )
}
