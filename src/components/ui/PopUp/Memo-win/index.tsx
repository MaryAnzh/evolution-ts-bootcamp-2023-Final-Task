import { Link } from "react-router-dom";

import { store } from "../../../../App";
import { SOUNDS_DATA } from "../../../../constants";

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
                    You won 120 point!!!
                </S.MemoWinTitle>
                <S.MemoContinuaGameButton>
                    Congratulations on your victory!!!
                </S.MemoContinuaGameButton>
                <S.MemoWinButtonWrap>
                    <S.MemoWinMoney />
                    <Link to={'/'}>
                        <S.MemoContinuaGameButton
                            onClick={startGame}>
                            continue
                        </S.MemoContinuaGameButton>
                    </Link>
                </S.MemoWinButtonWrap>
            </S.MemoWinStyle >
        </PopUpStyle>
    );
}