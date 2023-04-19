import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../../App";

import { ScorePanelStyle, ScoreWrapStyle } from "./styled";

export const ScorePanel: React.FC = observer(() => {
    const point = store.score;
    console.log(point);
    
    return (
        <ScorePanelStyle>
            <ScoreWrapStyle>
                {point}
            </ScoreWrapStyle>
        </ScorePanelStyle>
    );
});