import React from "react";
import { MemoFieldStyle } from "./styled";
import { MemoCard } from "../memo-card";
import { store } from "../../../../App";
import { observer } from "mobx-react-lite";
import { ICard } from "../../../../data/cards";

export const MemoField = observer(() => {
    const cardsList = [...store.memoCards].map((card: ICard, i: number) => {
        return (
            <MemoCard key={`${card.id}_${i}`} img={card.url} value={card.id} />
        )
    });

    return (
        <MemoFieldStyle>
            {cardsList}
        </MemoFieldStyle>
    );
})