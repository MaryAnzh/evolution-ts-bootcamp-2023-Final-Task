import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../../App";

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
                {store.score < 100 &&
                    <LinkToMemo onClick={link}></LinkToMemo>
                }
                <ScorePanel />
            </SlotGameTopPanel>
            <SlotGameStyle>
                {slots}
            </SlotGameStyle>
            <ControlPanel />
        </GamePageStyle>
    );
}