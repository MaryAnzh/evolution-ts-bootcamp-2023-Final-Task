import type { TypographyProps } from './types';

import * as S from './styled';

export const Typography = ({ children, asTag, callback, ...rest }: TypographyProps) => {
    return (
        <S.TypographyStyle
            as={asTag ?? 'span'}
            onClick={callback}
            {...rest}>
            {children}
        </S.TypographyStyle>
    );
};