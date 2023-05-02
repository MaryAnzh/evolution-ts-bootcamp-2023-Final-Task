import React from "react";

import { ScoreInfo } from "./components/score-info";
import {
    PageStyle,
    PageTitleStyle
} from "../../AppStyled";

export const AppAboutPage = () => {
    return (
        <PageStyle>
            <PageTitleStyle>
                About game
            </PageTitleStyle>
            <ScoreInfo />
        </PageStyle>
    );
}