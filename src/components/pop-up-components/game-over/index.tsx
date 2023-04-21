import React from "react";
import { store } from "../../../App";

import { PopUpStyle } from "../styled";
import {
    GameOverStyle,
    GameOverTitle,
    GameOverMessage,
    GameOverButtonWrap,
    GameOverMoney,
    StartGameButton
} from "./styled";

export const GameOver = () => {
    return (
        <PopUpStyle>
            <GameOverStyle>
                <GameOverTitle>
                    Game over
                </GameOverTitle>
                <GameOverMessage>
                    You spent all the money
                </GameOverMessage>
                <GameOverButtonWrap>
                    <GameOverMoney></GameOverMoney>
                    <StartGameButton
                        onClick={() => store.startNewGame()}
                    >
                        Start new
                    </StartGameButton>
                </GameOverButtonWrap>
            </GameOverStyle>
        </PopUpStyle>
    );
}