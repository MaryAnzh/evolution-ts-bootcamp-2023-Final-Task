import React from "react";
import { store } from "~stores";
import { SOUNDS_DATA } from "~constants";
import { PopUpStyle } from "../../styled";

import * as S from "./styled";

export const GameOver = () => {
    const startGame = () => {
        if (store.audio) {
            SOUNDS_DATA.startClick.play();
        }
        store.startNewGame();
    }

    return (
        <PopUpStyle>
            <S.GameOverStyle>
                <S.GameOverTitle>
                    Game over
                </S.GameOverTitle>
                <S.GameOverMessage>
                    You spent all the money
                </S.GameOverMessage>
                <S.GameOverButtonWrap>
                    <S.GameOverMoney />
                    <S.StartGameButton
                        onClick={startGame}
                    >
                        Start new
                    </S.StartGameButton>
                </S.GameOverButtonWrap>
            </S.GameOverStyle>
        </PopUpStyle>
    );
}