import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    };

    return (
        <PopUpStyle>
            <MemoWinStyle>
                <MemoWinTitle>
                    You won 120 point!!!
                </MemoWinTitle>
                <MemoWinMessage>
                    Congratulations on your victory!!!
                </MemoWinMessage>
                <MemoWinButtonWrap>
                    <MemoWinMoney></MemoWinMoney>
                    <Link to={'/'}>
                        <MemoContinuaGameButton
                            onClick={startGame}>
                            continue
                        </MemoContinuaGameButton>
                    </Link>
                </MemoWinButtonWrap>
            </MemoWinStyle >
        </PopUpStyle>
    );
}