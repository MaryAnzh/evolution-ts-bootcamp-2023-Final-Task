import React from "react";
import { store } from "../../../App";

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
                        onClick={() => store.startNewGame()}
                    >
                        continue
                    </ContinuaGameButton>
                </WinButtonWrap>
            </WinStyle >
        </PopUpStyle>
    );
}