import { store } from "../../../../App";
import { SOUNDS_DATA } from "../../../../constants";

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
                    You win!!!
                </S.WinTitle>
                <S.WinMessage>
                    Congratulations on your victory!!!
                </S.WinMessage>
                <S.WinMessage>
                    Do you want to continue winning?
                </S.WinMessage>
                <S.WinButtonWrap>
                    <S.WinMoney />
                    <S.ContinuaGameButton
                        onClick={startGame}
                    >
                        continue
                    </S.ContinuaGameButton>
                </S.WinButtonWrap>
            </S.WinStyle>
        </PopUpStyle>
    );
}