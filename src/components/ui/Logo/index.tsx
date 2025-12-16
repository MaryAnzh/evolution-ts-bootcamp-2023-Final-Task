import { DOLLARS_LOGO } from "./constants";
import * as S from "./styled";

export const Logo = () => {

    return (
        <S.LogoStyle>
            <S.LogoDollarWrap>
                {DOLLARS_LOGO.map(({ dollarWidth, src, key }) => (
                    <S.LogoDollar
                        key={key}
                        dollarWidth={dollarWidth}
                        src={src}
                    />
                ))}
            </S.LogoDollarWrap>
            <S.LogoTextWrap>
                {['S', 'L', 'O', 'T'].map(l => (
                    <S.LogoText key={l}>{l}</S.LogoText>
                ))}
            </S.LogoTextWrap>
        </S.LogoStyle>
    );
}