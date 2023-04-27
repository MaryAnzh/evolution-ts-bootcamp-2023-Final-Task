import React from "react";
import { store } from "../../../App";
import { observer } from "mobx-react-lite";

import { MemoField } from "./component/game-field";
import { MemoWinnerMessage } from "../../../components/pop-up-components/memo-win";
import { ScorePanel } from "../components/score";

import {
    MemoStyle,
    MemoTitle,
    MemoTopPanel,
    MemoStartButton,
    MemoTimerStyle,
    MemoBlockedStyle
} from "./styled";

export const MemoGame = observer(() => {
    const startGame = () => {
        console.log('click');
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
                    <ScorePanel />
                    : <MemoStartButton onClick={startGame}>Start</MemoStartButton>
                }
            </MemoTopPanel>
            <MemoField />
        </MemoStyle>
    );
})