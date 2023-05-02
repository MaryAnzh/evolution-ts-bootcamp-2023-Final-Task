import React from 'react';
import { observer } from "mobx-react-lite";

import { ThemeExampleStyle, ThemeExampleTitle, ThemeExampleWrap, ThemeExampleWrapTitle } from './styled';
import { ThemeView } from '../theme-view';
import { blackCards, fairyCards, seaCards } from '../../../../data/cards';
import { store } from '../../../../App';
import { ThemeEnum } from '../../../../themes/theme.interface';

type ThemesExampleProps = {
    changeTheme: (t: ThemeEnum) => void,
}

export const ThemeExample: React.FC<ThemesExampleProps> = observer((props) => {
    const changeTheme = (theme: ThemeEnum) => {
        props.changeTheme(theme);
    }

    return (
        <ThemeExampleStyle>
            <ThemeExampleTitle>
                Themes
            </ThemeExampleTitle>
            <ThemeExampleWrap
                isActive={store.theme === ThemeEnum.black}
                onClick={() => changeTheme(ThemeEnum.black)}
            >
                <ThemeExampleWrapTitle>{ThemeEnum.black} Theme</ThemeExampleWrapTitle>
                <ThemeView cards={blackCards} isActive={store.theme === ThemeEnum.black} />
            </ThemeExampleWrap>
            <ThemeExampleWrap
                isActive={store.theme === ThemeEnum.sea}
                onClick={() => changeTheme(ThemeEnum.sea)}
            >
                <ThemeView cards={seaCards} isActive={store.theme === ThemeEnum.sea} />
                <ThemeExampleWrapTitle>{ThemeEnum.sea} Theme</ThemeExampleWrapTitle>
            </ThemeExampleWrap>
            <ThemeExampleWrap
                isActive={store.theme === ThemeEnum.fairy}
                onClick={() => changeTheme(ThemeEnum.fairy)}
            >
                <ThemeExampleWrapTitle>{ThemeEnum.fairy} Theme</ThemeExampleWrapTitle>
                <ThemeView cards={fairyCards} isActive={store.theme === ThemeEnum.fairy} />
            </ThemeExampleWrap>
        </ThemeExampleStyle>
    );
});