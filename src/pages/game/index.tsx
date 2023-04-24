import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";
import { ScorePanel } from "./components/score";

import {
    GamePageStyle,
    SlotGameStyle,
    SlotGameTitle,
    SlotGameTopPanel,
    LinkToMemo
} from "./styled";

export const GamePage = () => {
    const slotCount = 3;
    const nav = useNavigate();
    const link = () => {
        nav('/memo');
    }

    const slots = [...Array(slotCount).keys()].map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    return (
        <GamePageStyle>
            <SlotGameTopPanel>
                <SlotGameTitle>Slot game</SlotGameTitle>
                {/* <Link to={'/memo'}>Memo</Link> */}
                <LinkToMemo onClick={link}></LinkToMemo>
                <ScorePanel />
            </SlotGameTopPanel>
            <SlotGameStyle>
                {slots}
            </SlotGameStyle>
            <ControlPanel />
        </GamePageStyle>
    );
}