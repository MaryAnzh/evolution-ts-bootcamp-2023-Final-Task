import React from "react";

import { observer } from "mobx-react-lite";
import { store } from "store";

import { FairyFrame } from "../fairy-frame";
import type { CarouselProps } from "./types";

import * as S from "./styled";

export const Carousel: React.FC<CarouselProps> = observer((props) => {
    const rotate = 0;
    const rotateAngle = 45;

    const animation = `spin 0.5s linear infinite`;

    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
        animation: store.slots[props.number].isSpin ? animation : 'none',
    }

    const cardList = store.slots[props.number].cards.map(({ id, url }, i: number) => {

        return (
            <S.CarouselCard
                key={id}
                style={{
                    transform: `rotateX(${rotateAngle * i}deg) translateZ(200px)`,
                }}>
                <img src={url} alt='game card' />
                <FairyFrame
                    cardIndex={i}
                    cardId={id}
                    slotIndex={props.number}
                />
            </S.CarouselCard >
        );
    });

    return (
        <S.CarouselStyle>
            <S.CarouselContainer>
                <S.CarouselBodyWrap>
                    <S.CarouselBody
                        style={rotateStyle}
                    >
                        {cardList}
                    </S.CarouselBody>
                </S.CarouselBodyWrap>
            </S.CarouselContainer>
        </S.CarouselStyle>)
})