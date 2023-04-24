import React from "react";
import { store } from "../../../App";
import { sounds } from "../../../data/sounds";

import { PopUpStyle } from "../styled";
import {
    MemoWinStyle,
    MemoWinTitle,
    MemoWinMessage,
    MemoWinButtonWrap,
    MemoWinMoney,
    MemoContinuaGameButton
} from "./styled";

export const MemoWinnerMessage = () => {
    const startGame = () => {
        sounds.startClick.play();
        store.finishMemo();
    }

    return (
        <PopUpStyle>
            <MemoWinStyle>
                <MemoWinTitle>
                    You won money!!!
                </MemoWinTitle>
                <MemoWinMessage>
                    Congratulations on your victory!!!
                </MemoWinMessage>
                <MemoWinButtonWrap>
                    <MemoWinMoney></MemoWinMoney>
                    <MemoContinuaGameButton
                        onClick={startGame}
                    >
                        continue
                    </MemoContinuaGameButton>
                </MemoWinButtonWrap>
            </MemoWinStyle >
        </PopUpStyle>
    );
}