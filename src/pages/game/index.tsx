import React from "react";
import {
    GamePageStyle,
    SlotGameStyle
} from "./styled";
import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";

export const GamePage = () => {
    const slotCount = [0, 1, 2];
    const slots = slotCount.map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    return (
        <GamePageStyle>
            <SlotGameStyle>
                {slots}
            </SlotGameStyle>
            <ControlPanel />
        </GamePageStyle>
    );
}