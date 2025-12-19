import React from "react";
import { observer } from "mobx-react-lite";

import { store } from "~stores";

import * as S from "./styled";

export const ScorePanel: React.FC = observer(() => {
    const { score } = store;

    return (
        <S.ScorePanelStyle>
            <S.ScoreWrapStyle>
                {score}
            </S.ScoreWrapStyle>
            <S.ScoreIconStyle />
        </S.ScorePanelStyle>
    );
});