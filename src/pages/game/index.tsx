import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../App";

import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";
import { ScorePanel } from "./components/score";
import { MemoGame } from "./memo";
import { ViewEnum } from "../../stores";
import { PageStyle, PageTitleStyle } from "../../AppStyled";

import {
    SlotGameStyle,
    SlotGameTopPanel,
    LinkToMemo,
    SlotGameWrap,
    MoneyWrap,
    LinkToSlot
} from "./styled";

export const GamePage = observer(() => {
    const slotCount = 3;

    const slots = [...Array(slotCount).keys()].map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    const changeView = (view: ViewEnum) => {
        store.setView(view);
        if (view === ViewEnum.memo) {
            store.startMemo();
        }
    }
    const closeMemo = () => {
        store.closeMemo();
    }

    return (
        <PageStyle>
            <SlotGameTopPanel>
                <PageTitleStyle>
                    {store.view === ViewEnum.memo &&
                        <LinkToSlot
                            src='./assets/golden-arrow.png'
                            alt='arrow to slot'
                            onClick={closeMemo}>
                        </LinkToSlot>
                    }

                    {store.view === ViewEnum.slot ? 'Slot Game' : 'Memo'}
                </PageTitleStyle>
                <MoneyWrap>
                    <ScorePanel />
                    <LinkToMemo
                        className={store.view === ViewEnum.memo || store.score > 100 ? 'blocked' : ''}
                        onClick={() => changeView(ViewEnum.memo)}></LinkToMemo>

                </MoneyWrap>


            </SlotGameTopPanel>
            {store.view === ViewEnum.slot ?
                <SlotGameWrap>
                    <SlotGameStyle>
                        {slots}
                    </SlotGameStyle>
                    <ControlPanel />
                </SlotGameWrap>
                :
                <MemoGame />
            }
        </PageStyle >
    );
})