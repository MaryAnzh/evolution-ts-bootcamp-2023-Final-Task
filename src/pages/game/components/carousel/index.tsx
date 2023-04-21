import React, { useState } from "react";
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
    const fairyRadius = 20;

    const fairyTop = [...Array(5).keys()].map((el, i) => {
        const posX = `calc((5% + (${i} * (95%/5))) + (7.5px))`;
        return (
            <Fairy key={el} style={{ left: `${posX}`, top: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></Fairy>
        );
    })
    const fairyBottom = [...Array(5).keys()].map((el, i) => {
        const posX = `calc((5% + (${i} * (95%/5))) + (7.5px))`;
        return (
            <Fairy key={el} style={{ left: `${posX}`, bottom: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></Fairy>
        );
    })
    const fairyLeft = [...Array(3).keys()].map((el, i) => {
        const posX = `calc((15% + (${i} * (85%/3))) + (5px))`;

        return (
            <Fairy key={el} style={{ top: `${posX}`, left: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></Fairy>
        );
    })
    const fairyRight = [...Array(3).keys()].map((el, i) => {
        const posX = `calc((15% + (${i} * (85%/3))) + (5px))`;

        return (
            <Fairy key={el} style={{ top: `${posX}`, right: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></Fairy>
        );
    })

    const cardList = store.slots[props.number].cards.map((el: ICard, i: number) => {
        const img = el.url !== '' ? el.url : '';
        return (
            <CarouselCard
                key={el.id}
                style={{
                    transform: `rotateX(${rotateAngle * i}deg) translateZ(200px)`,
                    backgroundImage: `url(${img})`
                }}>
                {fairyTop}
                {fairyRight}
                {fairyBottom}
                {fairyLeft}
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