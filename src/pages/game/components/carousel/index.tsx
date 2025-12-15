import React from "react";

import { FairyFrame } from "../fairy-frame";
import {
    CarouselStyle,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard
} from "./styled";
import { store } from "../../../../App";
import { observer } from "mobx-react-lite";

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

    const cardList = store.slots[props.number].cards.map(({ id, url }, i: number) => {
        const img = url !== '' ? url : '';

        return (
            <CarouselCard
                key={id}
                style={{
                    transform: `rotateX(${rotateAngle * i}deg) translateZ(200px)`,
                }}>
                <img src={img} />
                <FairyFrame
                    cardIndex={i}
                    cardId={id}
                    slotIndex={props.number}
                />
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