import React from "react";
import { MemoField } from "./component/game-field";
import { store } from "../../App";
import { observer } from "mobx-react-lite";

import { MemoWinnerMessage } from "../../components/pop-up-components/memo-win";
import {
    MemoStyle,
    MemoTitle,
    MemoTopPanel,
    MemoStartButton,
    MemoTimerStyle,
    MemoBlockedStyle
} from "./styled";

export const MemoPage = observer(() => {
    const startGame = () => {
        store.startMemo();
    }
    return (
        <MemoStyle>
            {store.isMemoFieldBlock &&
                <MemoBlockedStyle></MemoBlockedStyle>}
            {store.isMemoWin &&
                <MemoWinnerMessage></MemoWinnerMessage>}
            <MemoTopPanel>
                <MemoTitle>Memo</MemoTitle>
                {store.isMemoStart ?
                    <MemoTimerStyle>Timer</MemoTimerStyle>
                    : <MemoStartButton onClick={startGame}>Start</MemoStartButton>
                }
            </MemoTopPanel>
            <MemoField />
        </MemoStyle>
    );
})