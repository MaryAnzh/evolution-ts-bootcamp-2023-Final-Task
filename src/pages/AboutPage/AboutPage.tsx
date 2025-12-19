import React from "react";

import { ABOUT_GAME } from "~constants";
import { ScoreInfo } from "./ui/score-info";
import {
    PageStyle,
    PageTitleStyle
} from "../../AppStyled";

export const AboutPage = () => {

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