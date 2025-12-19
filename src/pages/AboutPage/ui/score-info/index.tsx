import { useState } from 'react';
import { observer } from "mobx-react-lite";

import { store } from '~stores';
import { Typography } from '~components';
import { POINT, ROUND_COST, SCORE_INFO, SHOW_MORE_COMB } from '~constants';

import { Combination } from '../combination';

import * as S from './style';

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
        setImgNumber(() => newNumber);
    }

    return (
        <S.ScoreInfoStyle>
            <S.ScoreInfoTop>
                <Typography asTag='h2' textView='headingSMedium'>
                    {SCORE_INFO}
                </Typography>
                <Typography
                    textView='bodySMedium'
                    callback={changeCard}
                >
                    {SHOW_MORE_COMB}
                </Typography>
            </S.ScoreInfoTop>
            <S.ScoreRoundCost>
                <Typography
                    asTag='h4'
                    textView='headingSRegular'>
                    {ROUND_COST}
                </Typography>
                <Typography
                    textView='bodyMMedium'
                >{store.pointMap.roundCost} {POINT}
                </Typography>
            </S.ScoreRoundCost>
            <Combination images={[zero.url, zero.url]} score={0} />
            <Combination images={[zero.url, zero.url, zero.url]} score={0} />
            <Combination images={[card.url, card.url]} score={store.pointMap.bonus} />
            <Combination images={[card.url, card.url, card.url]} score={store.pointMap.jackpot} />
        </S.ScoreInfoStyle>
    );
});