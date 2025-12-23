import React from "react";
import { observer } from "mobx-react-lite";

import { store } from "store";
import { ArrayFromNum } from "~utils";

import { FAIRY_IN_HORIZONTAL_LINE, FAIRY_IN_VERTICAL_LINE, LEFT_PADDING, TOP_PADDING, FAIRY_RADIUS } from "./constants";
import type { FairyFrameProps } from "./types";

import * as S from './styled';

export const FairyFrame: React.FC<FairyFrameProps> = observer((props) => {

    const pos = (padding: number, fairyIndex: number, fairyInLine: number) => `calc((${padding}% + (${fairyIndex} * ((100% - ${padding}%)/${fairyInLine}))) + (${FAIRY_RADIUS}px))`;

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

    const fairyTopLine = ArrayFromNum(FAIRY_IN_HORIZONTAL_LINE)
        .map((el, i) => {
            const x = pos(LEFT_PADDING, i, FAIRY_IN_HORIZONTAL_LINE);
            const y = '0';
            return (
                <S.FairyFrameStyle key={el} style={
                    fairyStyle(x, y, randomANimationTime())
                } />
            );
        })

    const fairyBottomLine = ArrayFromNum(FAIRY_IN_HORIZONTAL_LINE)
        .map((el, i) => {
            const x = pos(LEFT_PADDING, i, FAIRY_IN_HORIZONTAL_LINE);
            const y = '100%';
            return (
                <S.FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())} />
            )
        })

    const fairyLeftLine = ArrayFromNum(FAIRY_IN_VERTICAL_LINE)
        .map((el, i) => {
            const x = '5%';
            const y = pos(TOP_PADDING, i, FAIRY_IN_VERTICAL_LINE);
            return (
                <S.FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())} />
            );
        })

    const fairyRightLine = ArrayFromNum(FAIRY_IN_VERTICAL_LINE)
        .map(
            (el, i) => {
                const x = '95%';
                const y = pos(TOP_PADDING, i, FAIRY_IN_VERTICAL_LINE);

                return (
                    <S.FairySTyle key={el} style={fairyStyle(x, y, randomANimationTime())} />
                );
            }
        );

    return (
        <S.FairyFrameStyle>
            {fairyTopLine}
            {fairyRightLine}
            {fairyBottomLine}
            {fairyLeftLine}
        </S.FairyFrameStyle>
    );
});