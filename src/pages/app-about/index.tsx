import React from "react";

import { ScoreInfo } from "./components/score-info";
import {
    PageStyle,
    PageTitleStyle
} from "../../AppStyled";
import { ABOUT_GAME } from "../../constants";

export const AppAboutPage = () => {

    return (
        <PageStyle>
            <PageTitleStyle
                asTag="h2"
                textView="headingMRegular"
            >
                {ABOUT_GAME}
            </PageTitleStyle>
            <ScoreInfo />
        </PageStyle>
    );
}