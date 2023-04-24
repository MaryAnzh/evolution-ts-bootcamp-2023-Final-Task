import React from "react";
import { MemoCardStyle, MemoCardFront, MemoBackCard } from "./styled";
import { store } from '../../../../App';

type CardProps = {
    img: string,
    value: number,
    isOpen: boolean,
    index: number
}

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
        store.openCard(props.index);
    }
    const check = () => {
        store.checkEqual();
    }

    return (
        <MemoCardStyle onClick={show}>
            <MemoCardFront style={frontCardStyle} onTransitionEnd={check}></MemoCardFront>
            <MemoBackCard style={backCardStyle}> </MemoBackCard>
        </MemoCardStyle>
    )
}