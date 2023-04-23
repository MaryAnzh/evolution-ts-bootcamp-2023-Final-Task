import React from "react";
import { MemoFieldStyle } from "./styled";
import { MemoCard } from "../memo-card";
import { store } from "../../../../App";

export const MemoField = () => {
    const cardsSet = [...store.slots[0].cards, ...store.slots[0].cards];
    
    const cardsList = cardsSet.map((card, i) => {
        return (
            <MemoCard key={card.id + i} img={card.url} />
        )
    });

    return (
        <MemoFieldStyle>
            {cardsList}
        </MemoFieldStyle>
    );
}