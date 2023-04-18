import React, { useState } from "react";
import {
    CarouselStyle,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
} from "./styled";
import { store } from "../../../../App";
import { observe } from "mobx";
import { observer } from "mobx-react-lite";

type CarouselProps = {
    number: number
}

export const Carousel: React.FC<CarouselProps> = observer((props) => {
    const rotate = 0;
    const rotateAngle = 45;
    const animation = 'spin linear 1s infinite';

    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
        animation: store.slots[props.number].isSpin ? animation : 'none',
        animationPlayState: store.slots[props.number].isPause ? 'paused' : 'running'
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCard
                key={el}
                style={{
                    transform: `rotateX(${rotateAngle * i}deg) translateZ(200px)`
                }}>
            </CarouselCard>
        );
    });

    return (
        <CarouselStyle>
            <CarouselContainer>
                <CarouselBodyWrap>
                    <CarouselBody style={rotateStyle}>
                        {cardList}
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
        </CarouselStyle>)
})