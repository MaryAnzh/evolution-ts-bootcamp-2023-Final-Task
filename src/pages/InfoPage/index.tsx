import React from "react";
import { TECHNOLOGY_LIST } from "~constants";

import { PageStyle, PageTitleStyle } from "../../AppStyled";
import { ThemeExample } from "./ui/themes-example";
import type { GameInfoProps } from "./ui/types";
import { PRESENTATION_INFO, TECHNOLOGY } from "../../constants";
import { Typography } from "../../components";

import * as S from "./styled";

export const InfoPage: React.FC<GameInfoProps> = (props) => {
    const items = TECHNOLOGY_LIST.map(({ name, list }) =>
        <S.TechnologyListItem
            key={name}
            theme={'li'}
            textView="bodyMRegular"
        >
            {name}
            {list &&
                <S.TechnologyList>
                    {list.map(text =>
                        <S.TechnologyListItem
                            key={text}
                            theme='li'
                            textView="bodySRegular"
                        >
                            {text}
                        </S.TechnologyListItem>)}
                </S.TechnologyList>
            }
        </S.TechnologyListItem>
    );

    return (
        <PageStyle>
            <PageTitleStyle asTag="h2" textView="headingMRegular">
                {PRESENTATION_INFO}
            </PageTitleStyle>
            <S.AppInfoTop>
                <Typography asTag="h3" textView="headingSMedium">
                    {TECHNOLOGY}:
                </Typography>
            </S.AppInfoTop>
            <S.TechnologyList>
                {items}
            </S.TechnologyList>
            <ThemeExample changeTheme={props.changeTheme} />
        </PageStyle>
    );
}