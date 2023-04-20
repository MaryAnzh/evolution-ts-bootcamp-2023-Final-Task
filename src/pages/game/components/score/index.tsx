import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../../App";

import {
    ScorePanelStyle,
    ScoreWrapStyle,
    ScoreIconStyle
} from "./styled";

export const ScorePanel: React.FC = observer(() => {
    const point = store.score;

    return (
        <ScorePanelStyle>
            <ScoreIconStyle></ScoreIconStyle>
            <ScoreWrapStyle>
                {point}
            </ScoreWrapStyle>
        </ScorePanelStyle>
    );
});