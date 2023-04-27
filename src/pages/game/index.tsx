import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../../App";

import { Carousel } from "./components/carousel";
import { ControlPanel } from "./components/control-panel";
import { ScorePanel } from "./components/score";
import { MemoGame } from "./memo";

import {
    GamePageStyle,
    SlotGameStyle,
    SlotGameTitle,
    SlotGameTopPanel,
    LinkToMemo,
    SlotGameWrap,
    MoneyWrap
} from "./styled";
import { ViewEnum } from "../../stores";

export const GamePage = () => {
    const slotCount = 3;

    const slots = [...Array(slotCount).keys()].map((slot) => {
        return (
            <Carousel key={slot} number={slot} />
        );
    });

    const changeView = (view: ViewEnum) => {
        store.setView(view);
    }

    return (
        <GamePageStyle>
            <SlotGameTopPanel>
                <SlotGameTitle>Slot game</SlotGameTitle>
                <MoneyWrap>
                    <ScorePanel />
                    {store.score < 100 &&
                        <LinkToMemo onClick={() => changeView(ViewEnum.memo)}></LinkToMemo>
                    }
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
        </GamePageStyle >
    );
}