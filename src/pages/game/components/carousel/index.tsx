import React, { useState } from "react";
import {
    CarouselStyle,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
} from "./styled";

export const Carousel = () => {
    // const [rotate, setRotate] = useState(0);
    // const rotateAngle = 45;
    
    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCard
                key={el}
                style={{ transform: `rotateX(${45 * i}deg) translateZ(200px)` }}>
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
}