import React, { useState } from "react";

import { FairyFrame } from "../fairy-frame";
import {
    CarouselStyle,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
    CardBorderStyle,
    Fairy,
} from "./styled";
import { store } from "../../../../App";
import { observer } from "mobx-react-lite";
import { ICard } from "../../../../data/cards";

type CarouselProps = {
    number: number
}

export const Carousel: React.FC<CarouselProps> = observer((props) => {
    const rotate = 0;
    const rotateAngle = 45;

    const animation = `spin 0.5s linear infinite`;

    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
        animation: store.slots[props.number].isSpin ? animation : 'none',
    }

    const cardList = store.slots[props.number].cards.map((el: ICard, i: number) => {
        const img = el.url !== '' ? el.url : '';
        return (
            <CarouselCard
                key={el.id}
                style={{
                    transform: `rotateX(${rotateAngle * i}deg) translateZ(200px)`,
                    backgroundImage: `url(${img})`
                }}>
                <FairyFrame cardIndex={i} cardId={el.id} />
            </CarouselCard >
        );
    });

    return (
        <CarouselStyle>
            <CarouselContainer>
                <CarouselBodyWrap>
                    <CarouselBody
                        style={rotateStyle}
                    >
                        {cardList}
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
        </CarouselStyle>)
})