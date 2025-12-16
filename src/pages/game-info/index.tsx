import React from "react";
import { TECHNOLOGY_LIST } from '../../constants/technologyList';

import { PageStyle, PageTitleStyle } from "../../AppStyled";
import { ThemeExample } from "./components/themes-example";
import type { GameInfoProps } from "./components/types";
import * as S from "./styled";

export const GameInfoPage: React.FC<GameInfoProps> = (props) => {
    const items = TECHNOLOGY_LIST.map(item =>
        <S.TechnologyListItem
            key={item.name}
            fontSize='2rem'>
            {item.name}
            {item.sub &&
                <S.TechnologyList>
                    {item.sub.map(el =>
                        <S.TechnologyListItem key={el} fontSize='0.9em'>
                            {el}
                        </S.TechnologyListItem>)}
                </S.TechnologyList>
            }
        </S.TechnologyListItem>
    );

    return (
        <PageStyle>
            <PageTitleStyle>
                Presentation info
            </PageTitleStyle>
            <S.AppInfoTop>
                <S.TechnologyTitle>
                    Technology:
                </S.TechnologyTitle>
            </S.AppInfoTop>
            <S.TechnologyList>
                {items}
            </S.TechnologyList>
            <ThemeExample changeTheme={props.changeTheme} />
        </PageStyle>
    );
}