import { observer } from "mobx-react-lite";

import { store } from 'store';
import { MemoWinnerMessage } from "~components";

import { MemoField } from "./component/game-field";

import * as S from "./styled";

export const MemoGame = observer(() => {

    return (
        <S.MemoStyle>
            {
                store.isMemoFieldBlock &&
                <S.MemoBlockedStyle />
            }
            {
                store.isMemoWin &&
                <MemoWinnerMessage />
            }

            <MemoField />
        </S.MemoStyle>
    );
})