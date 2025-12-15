import { store } from "../../../App";
import { observer } from "mobx-react-lite";

import { MemoField } from "./component/game-field";
import { MemoWinnerMessage } from "../../../components";

import {
    MemoStyle,
    MemoBlockedStyle
} from "./styled";

export const MemoGame = observer(() => {

    return (
        <MemoStyle>
            {
                store.isMemoFieldBlock &&
                <MemoBlockedStyle></MemoBlockedStyle>
            }
            {
                store.isMemoWin &&
                <MemoWinnerMessage></MemoWinnerMessage>
            }

            <MemoField />
        </MemoStyle>
    );
})