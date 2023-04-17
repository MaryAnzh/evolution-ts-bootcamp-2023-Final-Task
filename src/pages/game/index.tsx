import React from "react";
import {
    GamePageStyle,
    SlotGameStyle
} from "./styled";
import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";

export const GamePage = () => {
    return (
        <GamePageStyle>
            <SlotGameStyle>
                <Carousel />
                <Carousel />
                <Carousel />
            </SlotGameStyle>
            <ControlPanel />
        </GamePageStyle>
    );
}