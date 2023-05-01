import React from 'react';

import {
    CombinationIcon,
    CombinationPoint,
    CombinationSet,
    CombinationStyle
} from './styled';

type CombinationProps = {
    images: string[],
    score: number,
}

export const Combination: React.FC<CombinationProps> = (props) => {
    const icons = props.images.map((img, i) => {
        return (
            <CombinationIcon key={img + i}>
                <img src={img} alt='slot image' />
            </CombinationIcon>
        );
    });

    return (
        <CombinationStyle>
            <CombinationSet>
                {icons}
            </CombinationSet>
            <CombinationPoint>
                {props.score} point
            </CombinationPoint>
        </CombinationStyle>
    );
}