import React from "react";

import { ScoreInfo } from "./components/score-info";
import {
    PageStyle,
    PageTitleStyle
} from "../../AppStyled";

export const AppAboutPage = () => {
    const about = 'About game';

    return (
        <PageStyle>
            <PageTitleStyle>
                {about}
            </PageTitleStyle>
            <ScoreInfo />
        </PageStyle>
    );
}