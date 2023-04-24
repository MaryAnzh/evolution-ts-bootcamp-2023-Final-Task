import React from "react";

import {
    MemoStyle,
    MemoTitle,
    MemoTopPanel,
    MemoStartButton,
    MemoTimerStyle
} from "./styled";
import { MemoField } from "./component/game-field";
import { store } from "../../App";
import { observer } from "mobx-react-lite";

export const MemoPage = observer(() => {
    const startGame = () => {
        store.startMemo();
    }
    return (
        <MemoStyle>
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