import { observer } from "mobx-react-lite";

import { store } from "store";
import type { MemoCardType } from "~types";

import { MemoCard } from "../memo-card";
import { MemoFieldStyle } from "./styled";

export const MemoField = observer(() => {
    const cardsList = [...store.memoCards].map((card: MemoCardType, i: number) => {
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