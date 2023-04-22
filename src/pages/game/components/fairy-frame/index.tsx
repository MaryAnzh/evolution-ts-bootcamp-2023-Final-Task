import React from "react";
import {
    FairyFrameStyle,
    FairySTyle
} from './styled';
type FairyFrameProps = {
    cardIndex: number,
    cardId: number
}

export const FairyFrame: React.FC<FairyFrameProps> = (props) => {
    const fairyRadius = 7.5;
    const fairyInHorizontalLine = 5;
    const fairyInVerticalLine = 3;
    const leftPadding = 5;
    const topPadding = 15;
    const posX = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))) + (${fairyRadius}px))`;
    const posY = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))))`;
    const randomANimationTime = () => Math.floor((Math.random() + 0.5) * 10) / 10;
    const fairyStyle = (x: string, y: string, random: number) => {
        return {
            left: `${x}`,
            top: `${y}`,
            animation: props.cardIndex === 0
                ? `fairyLight 0.8s ${random}s linear infinite`
                : `none`
        };
    }

    const fairyTopLine = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const x = posX(leftPadding, i, fairyInHorizontalLine);
        const y = '0';
        return (
            <FairySTyle key={el} style={
                fairyStyle(x, y, randomANimationTime())
            }>
            </FairySTyle>
        );
    })
    const fairyBottomLine = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const x = posX(leftPadding, i, fairyInHorizontalLine);
        const y = '100%'
        return (
            <FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())}></FairySTyle>
        );
    })
    const fairyLeftLine = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const x = '0';
        const y = posY(topPadding, i, fairyInVerticalLine);
        return (
            <FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())}></FairySTyle>
        );
    })
    const fairyRightLine = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const x = '100%';
        const y = posY(topPadding, i, fairyInVerticalLine);
        return (
            <FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())}></FairySTyle>
        );
    })

    return (
        <FairyFrameStyle>
            {fairyTopLine}
            {fairyRightLine}
            {fairyBottomLine}
            {fairyLeftLine}
        </FairyFrameStyle>
    );
}