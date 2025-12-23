import { store } from "store";

import { CONGRATULATIONS_MESSAGE, CONTINUE, SOUNDS_DATA, WINNING_QUESTION, YOU_WIN } from "~constants";
import { PopUpStyle } from "../../styled";

import * as S from "./styled";

export const WinnerMessage = () => {
    const startGame = () => {
        if (store.audio) {
            SOUNDS_DATA.startClick.play();
        }
        store.startNewGame();
    }

    return (
        <PopUpStyle>
            <S.WinStyle>
                <S.WinTitle>
                    {YOU_WIN}!!!
                </S.WinTitle>
                <S.WinMessage>
                    {CONGRATULATIONS_MESSAGE}!!!
                </S.WinMessage>
                <S.WinMessage>
                    {WINNING_QUESTION}?
                </S.WinMessage>
                <S.WinButtonWrap>
                    <S.WinMoney />
                    <S.ContinuaGameButton
                        onClick={startGame}
                    >
                        {CONTINUE}
                    </S.ContinuaGameButton>
                </S.WinButtonWrap>
            </S.WinStyle>
        </PopUpStyle>
    );
}