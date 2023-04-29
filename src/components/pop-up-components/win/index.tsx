import React from "react";
import { store } from "../../../App";
import { sounds } from "../../../data/sounds";

import { PopUpStyle } from "../styled";
import {
    WinStyle,
    WinTitle,
    WinMessage,
    WinButtonWrap,
    WinMoney,
    ContinuaGameButton

} from "./styled";

export const WinnerMessage = () => {
    const startGame = () => {
        if (store.audio) {
            sounds.startClick.play();
        }
        store.startNewGame();
    }

    return (
        <PopUpStyle>
            <WinStyle>
                <WinTitle>
                    You win!!!
                </WinTitle>
                <WinMessage>
                    Congratulations on your victory!!!
                </WinMessage>
                <WinMessage>
                    Do you want to continue winning?
                </WinMessage>
                <WinButtonWrap>
                    <WinMoney></WinMoney>
                    <ContinuaGameButton
                        onClick={startGame}
                    >
                        continue
                    </ContinuaGameButton>
                </WinButtonWrap>
            </WinStyle >
        </PopUpStyle>
    );
}