import React from "react";
import { MemoFieldStyle } from "./styled";
import { MemoCard } from "../memo-card";

export const MemoField = () => {
    const cardsSet = 16;
    const cardsList = [...Array(cardsSet).keys()].map((el) => {
        return (
            <MemoCard key={el} />
        )
    });

    return (
        <MemoFieldStyle>
            {cardsList}
        </MemoFieldStyle>
    );
}