import React from 'react';

import type { CombinationProps } from './types';
import * as S from './styled';

export const Combination: React.FC<CombinationProps> = (props) => {
    const icons = props.images.map((img, i) => {
        return (
            <S.CombinationIcon key={img + i}>
                <img src={img} alt='slot image' />
            </S.CombinationIcon>
        );
    });

    return (
        <S.CombinationStyle>
            <S.CombinationSet>
                {icons}
            </S.CombinationSet>
            <S.CombinationPoint>
                {props.score} point
            </S.CombinationPoint>
        </S.CombinationStyle>
    );
}