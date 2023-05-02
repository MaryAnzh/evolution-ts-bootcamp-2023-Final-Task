import React from "react";
import { store } from "../../../App";
import { sounds } from "../../../data/sounds";

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
    const startGame = () => {
        if (store.audio) {
            sounds.startClick.play();
        }
        store.startNewGame();
    }

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
                        onClick={startGame}
                    >
                        Start new
                    </StartGameButton>
                </GameOverButtonWrap>
            </GameOverStyle>
        </PopUpStyle>
    );
}