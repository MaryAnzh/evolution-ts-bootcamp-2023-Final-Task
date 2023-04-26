import React from "react";
import { MemoFieldStyle } from "./styled";
import { MemoCard } from "../memo-card";
import { store } from "../../../../App";
import { observer } from "mobx-react-lite";
import { IMemoCard } from "../../../../interfaces/memo.interface";

export const MemoField = observer(() => {
    const cardsList = [...store.memoCards].map((card: IMemoCard, i: number) => {
        return (
            <MemoCard key={`${card.value}_${i}`} 
            img={card.url} 
            value={card.value} 
            isOpen={card.isOpen}
            index={i}
            />
        )
    });

    return (
        <MemoFieldStyle>
            {cardsList}
        </MemoFieldStyle>
    );
})