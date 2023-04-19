import React from "react";
import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";
import { ScorePanel } from "./components/score";

import {
    GamePageStyle,
    SlotGameStyle,
    SlotGameTitle,
    SlotGameTopPanel
} from "./styled";

export const GamePage = () => {
    const slotCount = [0, 1, 2];
    const slots = slotCount.map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    return (
        <GamePageStyle>
            <SlotGameTopPanel>
                <SlotGameTitle>Slot game</SlotGameTitle>
                <ScorePanel />
            </SlotGameTopPanel>
            <SlotGameStyle>
                {slots}
            </SlotGameStyle>
            <ControlPanel />
        </GamePageStyle>
    );
}