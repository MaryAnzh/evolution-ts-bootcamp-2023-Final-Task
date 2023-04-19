import { observer } from "mobx-react-lite";
import React from "react";
import { ScorePanelStyle, ScoreWrapStyle } from "./styled";


export const ScorePanel: React.FC = observer(() => {
    return (
        <ScorePanelStyle>
            <ScoreWrapStyle>
                100
            </ScoreWrapStyle>
        </ScorePanelStyle>
    );
});