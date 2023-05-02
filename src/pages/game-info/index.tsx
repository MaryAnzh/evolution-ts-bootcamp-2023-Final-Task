import React from "react";
import { technologyList } from '../../data/technologyList';

import { PageStyle, PageTitleStyle } from "../../AppStyled";
import {
    AppInfoTop,
    TechnologyTitle,
    TechnologyList,
    TechnologyListItem
} from "./styled";

export const GameInfoPage = () => {
    const items = technologyList.map(item =>
        <TechnologyListItem key={item.name} fontSize='2rem'>
            {item.name}
            {item.sub &&
                <TechnologyList>
                    {item.sub.map(el => <TechnologyListItem key={el} fontSize='0.9em'>{el}</TechnologyListItem>)}
                </TechnologyList>
            }
        </TechnologyListItem>
    );

    return (
        <PageStyle>
            <PageTitleStyle>
                Presentation info
            </PageTitleStyle>
            <AppInfoTop>
                <TechnologyTitle>Technology:</TechnologyTitle>
            </AppInfoTop>
            <TechnologyList>
                {items}
            </TechnologyList>
        </PageStyle>
    );
}