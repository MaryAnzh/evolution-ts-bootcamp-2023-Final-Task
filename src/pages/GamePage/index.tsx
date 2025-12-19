import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "~stores";

import { MEMO, SLOT } from "~constants";
import type { ViewModeType } from "~types";

import { Carousel } from "./ui/carousel";
import { ControlPanel } from "./ui/control-panel";
import { ScorePanel } from "./ui/score";
import { MemoGame } from "./memo";
import { PageStyle, PageTitleStyle } from "../../AppStyled";

import * as S from "./styled";

export const GamePage = observer(() => {
    const slotCount = 3;

    const slots = [...Array(slotCount).keys()].map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    const changeView = (view: ViewModeType) => {
        store.setView(view);
        if (view === MEMO) {
            store.startMemo();
        }
    }
    const closeMemo = () => {
        store.closeMemo();
    }

    return (
        <PageStyle>
            <S.SlotGameTopPanel>
                <PageTitleStyle
                    asTag='h2'
                    textView="headingMRegular"
                >
                    {store.view === MEMO &&
                        <S.LinkToSlot
                            src='./assets/golden-arrow.png'
                            alt='arrow to slot'
                            onClick={closeMemo}>
                        </S.LinkToSlot>
                    }
                    {store.view === SLOT ? 'Slot Game' : 'Memo'}
                    {(store.view === SLOT && store.demoWin) &&
                        <S.GoldenWinButton
                            onClick={() => store.startRound(3)}
                        >
                            3
                        </S.GoldenWinButton>
                    }
                    {(store.view === SLOT && store.demoWin2) &&
                        <S.GoldenWinButton
                            onClick={() => store.startRound(2)}
                        >
                            2
                        </S.GoldenWinButton>
                    }
                </PageTitleStyle>
                <S.MoneyWrap>
                    <ScorePanel />
                    <S.LinkToMemo
                        className={store.view === MEMO || store.score > 100 ? 'blocked' : ''}
                        onClick={() => changeView(MEMO)}></S.LinkToMemo>

                </S.MoneyWrap>

            </S.SlotGameTopPanel>
            {store.view === SLOT ?
                <S.SlotGameWrap>
                    <S.SlotGameStyle>
                        {slots}
                    </S.SlotGameStyle>
                    <ControlPanel />
                </S.SlotGameWrap>
                :
                <MemoGame />
            }
        </PageStyle >
    );
})