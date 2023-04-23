import React from "react";
import { MemoCardStyle, MemoCardFront, MemoBackCard } from "./styled";

type CardProps = {
    img: string,
}

export const MemoCard: React.FC<CardProps> = (props) => {
    const style = {
        backgroundImage: `url(${props.img})`
    };


    return (
        <MemoCardStyle>
            <MemoCardFront></MemoCardFront>
            <MemoBackCard style={style}> </MemoBackCard>
        </MemoCardStyle>
    )
}