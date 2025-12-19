import { Link } from "react-router-dom";
import { store } from "~stores";

import { CONGRATULATIONS_MESSAGE, CONTINUE, POINTS, SOUNDS_DATA, WIN_POINTS, YOU_WIN } from "~constants";

import { PopUpStyle } from "../../styled";

import * as S from "./styled";

export const MemoWinnerMessage = () => {
    const startGame = () => {
        if (store.audio) {
            SOUNDS_DATA.startClick.play();
        }
        store.finishMemo();
    };

    return (
        <PopUpStyle>
            <S.MemoWinStyle>
                <S.MemoWinTitle>
                    {YOU_WIN} {WIN_POINTS} {POINTS}!!!
                </S.MemoWinTitle>
                <S.MemoContinuaGameButton>
                    {CONGRATULATIONS_MESSAGE}!!!
                </S.MemoContinuaGameButton>
                <S.MemoWinButtonWrap>
                    <S.MemoWinMoney />
                    <Link to={'/'}>
                        <S.MemoContinuaGameButton
                            onClick={startGame}>
                            {CONTINUE}
                        </S.MemoContinuaGameButton>
                    </Link>
                </S.MemoWinButtonWrap>
            </S.MemoWinStyle >
        </PopUpStyle>
    );
}