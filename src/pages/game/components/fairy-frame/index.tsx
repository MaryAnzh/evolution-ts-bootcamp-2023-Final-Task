import React from "react";
import {
    FairyFrameStyle,
    FairySTyle
} from './styled';

export const FairyFrame = () => {
    const fairyRadius = 20;

    const fairyTop = [...Array(5).keys()].map((el, i) => {
        const posX = `calc((5% + (${i} * (95%/5))) + (7.5px))`;
        return (
            <FairySTyle key={el} style={{ left: `${posX}`, top: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></FairySTyle>
        );
    })
    const fairyBottom = [...Array(5).keys()].map((el, i) => {
        const posX = `calc((5% + (${i} * (95%/5))) + (7.5px))`;
        return (
            <FairySTyle key={el} style={{ left: `${posX}`, bottom: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></FairySTyle>
        );
    })
    const fairyLeft = [...Array(3).keys()].map((el, i) => {
        const posX = `calc((15% + (${i} * (85%/3))) + (5px))`;

        return (
            <FairySTyle key={el} style={{ top: `${posX}`, left: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></FairySTyle>
        );
    })
    const fairyRight = [...Array(3).keys()].map((el, i) => {
        const posX = `calc((15% + (${i} * (85%/3))) + (5px))`;

        return (
            <FairySTyle key={el} style={{ top: `${posX}`, right: '0', width: `${fairyRadius}p}px`, height: `${fairyRadius}p}px` }}></FairySTyle>
        );
    })

    return (
        <FairyFrameStyle>
            {fairyTop}
            {fairyRight}
            {fairyBottom}
            {fairyLeft}
        </FairyFrameStyle>
    );
}