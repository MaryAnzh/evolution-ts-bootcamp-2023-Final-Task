import React from "react";

import { MemoStyle, MemoTitle } from "./styled";
import { MemoField } from "./component/game-field";

export const MemoPage = () => {

    return (
        <MemoStyle>
            <MemoTitle>Memo</MemoTitle>
            <MemoField />
        </MemoStyle>
    );
}