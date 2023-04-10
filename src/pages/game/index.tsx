import React from "react";
import {
    GamePageStyle,
    SlotGameStyle
} from "./styled";
import { Carousel } from "./components/carousel";

export const GamePage = () => {
    return (
        <GamePageStyle>
            <SlotGameStyle>
                <Carousel />
                <Carousel />
                <Carousel />
            </SlotGameStyle>
        </GamePageStyle>
    );
}