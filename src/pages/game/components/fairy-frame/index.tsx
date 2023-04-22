import React from "react";
import {
    FairyFrameStyle,
    FairySTyle
} from './styled';

export const FairyFrame = () => {
    const fairyRadius = 7.5;
    const fairyInHorizontalLine = 5;
    const fairyInVerticalLine = 3;
    const leftPadding = 5;
    const topPadding = 15;
    const posX = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))) + (${fairyRadius}px))`;
    const posY = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))))`;

    const fairyTop = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const pos = posX(leftPadding, i, fairyInHorizontalLine);
        return (
            <FairySTyle key={el} style={{ left: `${pos}`, top: '0' }}></FairySTyle>
        );
    })
    const fairyBottom = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const pos = posX(leftPadding, i, fairyInHorizontalLine);
        return (
            <FairySTyle key={el} style={{ left: `${pos}`, bottom: '0' }}></FairySTyle>
        );
    })
    const fairyLeft = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const pos = posY(topPadding, i, fairyInVerticalLine);
        return (
            <FairySTyle key={el} style={{ top: `${pos}`, left: '0' }}></FairySTyle>
        );
    })
    const fairyRight = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const pos = posY(topPadding, i, fairyInVerticalLine);
        return (
            <FairySTyle key={el} style={{ top: `${pos}`, right: '0' }}></FairySTyle>
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