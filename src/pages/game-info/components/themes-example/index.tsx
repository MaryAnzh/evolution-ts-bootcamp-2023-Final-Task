import React from 'react';
import { observer } from "mobx-react-lite";

import { ThemeView } from '../theme-view';
import { BLACK_CARDS, FAIRY_CARDS, SEA_CARDS, BLACK, FAIRY, SEA } from '../../../../constants';
import { store } from '../../../../App';
import type { ThemeNameType } from '../../../../themes';
import type { ThemesExampleProps } from './types';
import * as S from './styled';

const cards = {
    [BLACK]: BLACK_CARDS,
    [SEA]: SEA_CARDS,
    [FAIRY]: FAIRY_CARDS,
}

export const ThemeExample: React.FC<ThemesExampleProps> = observer(({ changeTheme }) => {
    const handleChangeTheme = (theme: ThemeNameType) => {
        changeTheme(theme);
    }

    return (
        <S.ThemeExampleStyle>
            <S.ThemeExampleTitle>
                Themes
            </S.ThemeExampleTitle>
            {[BLACK, SEA, FAIRY].map(name => (
                <S.ThemeExampleWrap
                    key={name}
                    isActive={store.theme === name}
                    onClick={() => handleChangeTheme(name)}
                >
                    <S.ThemeExampleWrapTitle>{name} Theme</S.ThemeExampleWrapTitle>
                    <ThemeView
                        cards={cards[name]}
                        isActive={store.theme === name}
                    />
                </S.ThemeExampleWrap>
            ))}
        </S.ThemeExampleStyle>
    );
});