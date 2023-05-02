import React, { useState } from 'react';
import { Combination } from '../combination';
import { store } from '../../../../App';
import { observer } from "mobx-react-lite";

import {
    ScoreInfoStyle,
    ScoreInfoTitle,
    ScoreInfoShowMore,
    ScoreInfoTop,
    ScoreRoundCost,
    ScoreRoundCostTitle,
    ScoreRoundCostPoint
} from './style';

export const ScoreInfo = observer(() => {
    const cardsSorting = [...store.slots[0].cards].sort((a, b) => a.id - b.id);
    const currentNumber = 1;
    const [imgNumber, setImgNumber] = useState<number>(currentNumber);

    const zero = cardsSorting[0];
    const card = cardsSorting[imgNumber];

    const changeCard = () => {
        let newNumber = imgNumber + 1;
        if (newNumber === 8) {
            newNumber = 1;
        }
        setImgNumber((prev) => prev = newNumber);
    }

    return (
        <ScoreInfoStyle>
            <ScoreInfoTop>
                <ScoreInfoTitle>
                    Score info
                </ScoreInfoTitle>
                <ScoreInfoShowMore
                    onClick={changeCard}
                >Show more comb</ScoreInfoShowMore>
            </ScoreInfoTop>
            <ScoreRoundCost>
                <ScoreRoundCostTitle>Round Cost</ScoreRoundCostTitle>
                <ScoreRoundCostPoint>{store.pointMap.roundCost} point</ScoreRoundCostPoint>
            </ScoreRoundCost>
            <Combination images={[zero.url, zero.url]} score={0} />
            <Combination images={[zero.url, zero.url, zero.url]} score={0} />
            <Combination images={[card.url, card.url]} score={store.pointMap.bonus} />
            <Combination images={[card.url, card.url, card.url]} score={store.pointMap.jackpot} />
        </ScoreInfoStyle>
    );
});