import * as S from './styled';
import type { ImageProps } from './types';

export const Image = ({ src, alt, ...rest }: ImageProps) => {
    return (
        <S.ImageWrap {...rest}>
            <img src={src} alt={alt} />
        </S.ImageWrap>
    );
}