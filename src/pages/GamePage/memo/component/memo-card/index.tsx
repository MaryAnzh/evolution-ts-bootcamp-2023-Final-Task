import React from "react";

import { store } from "~stores";

import type { CardProps } from "./types";

import * as S from "./styled";

export const MemoCard: React.FC<CardProps> = (props) => {
    const backCardStyle = {
        transform: store.isMemoStart
            ? store.memoCards[props.index].isOpen
                ? `rotateY(180deg) scale(-1, 1)`
                : `rotateY(0deg) scale(-1, 1)`
            : 'rotateY(0deg) scale(-1, 1)',
        backgroundImage: `url(${props.img})`
    };
    const frontCardStyle = {
        transform: store.isMemoStart
            ? store.memoCards[props.index].isOpen
                ? `rotateY(180deg)`
                : `rotateY(0deg)`
            : 'rotateY(0deg)',
    };

    const show = () => {
        if (!store.memoCards[props.index].isOpen) {
            store.openCard(props.index);
        }
    }

    const check = () => {
        store.checkEqual();
    }

    return (
        <S.MemoCardStyle
            onClick={show}>
            <S.MemoCardFront style={frontCardStyle} onTransitionEnd={check} />
            <S.MemoBackCard style={backCardStyle} />
        </S.MemoCardStyle>
    )
}