import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../../App";

import {
    FairyFrameStyle,
    FairySTyle
} from './styled';
type FairyFrameProps = {
    cardIndex: number,
    cardId: number,
    slotIndex: number
}

export const FairyFrame: React.FC<FairyFrameProps> = observer((props) => {
    const fairyRadius = 7.5;
    const fairyInHorizontalLine = 5;
    const fairyInVerticalLine = 3;
    const leftPadding = 5;
    const topPadding = 15;
    const pos = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))) + (${fairyRadius}px))`;
    const randomANimationTime = () => Math.floor((Math.random() + 0.5) * 10) / 10;
    const fairyStyle = (x: string, y: string, random: number) => {
        return {
            left: `${x}`,
            top: `${y}`,
            animation: props.cardIndex === 0 && store.fairyAnimation[props.slotIndex].animation
                ? `fairyLight 0.8s ${random}s linear infinite`
                : `none`
        };
    }

    const fairyTopLine = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const x = pos(leftPadding, i, fairyInHorizontalLine);
        const y = '0';
        return (
            <FairySTyle key={el} style={
                fairyStyle(x, y, randomANimationTime())
            }>
            </FairySTyle>
        );
    })
    const fairyBottomLine = [...Array(fairyInHorizontalLine).keys()].map((el, i) => {
        const x = pos(leftPadding, i, fairyInHorizontalLine);
        const y = '100%'
        return (
            <FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())}></FairySTyle>
        );
    })
    const fairyLeftLine = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const x = '5%';
        const y = pos(topPadding, i, fairyInVerticalLine);
        return (
            <FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())}></FairySTyle>
        );
    })
    const fairyRightLine = [...Array(fairyInVerticalLine).keys()].map((el, i) => {
        const x = '95%';
        const y = pos(topPadding, i, fairyInVerticalLine);
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
});