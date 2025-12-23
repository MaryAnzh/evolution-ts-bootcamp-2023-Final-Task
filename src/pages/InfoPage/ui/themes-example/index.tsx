import React from 'react';
import { observer } from "mobx-react-lite";
import { store } from 'store';

import { BLACK, FAIRY, SEA, THEMES } from '~constants';
import type { ThemeNameType } from '~types';

import { ThemeView } from '../theme-view';
import { CARDS_SET } from './constants';
import type { ThemesExampleProps } from './types';

import * as S from './styled';

export const ThemeExample: React.FC<ThemesExampleProps> = observer(({ changeTheme }) => {
    const handleChangeTheme = (theme: ThemeNameType) => {
        changeTheme(theme);
    }

    return (
        <S.ThemeExampleStyle>
            <S.ThemeExampleTitle
                asTag='h3'
                textView='headingSRegular'
            >
                {THEMES}
            </S.ThemeExampleTitle>
            {[BLACK, SEA, FAIRY].map(name => (
                <S.ThemeExampleWrap
                    key={name}
                    isActive={store.theme === name}
                    onClick={() => handleChangeTheme(name)}
                >
                    <S.ThemeExampleWrapTitle
                        asTag='h4'
                        textView='bodySRegular'>{name} Theme</S.ThemeExampleWrapTitle>
                    <ThemeView
                        cards={CARDS_SET[name]}
                        isActive={store.theme === name}
                    />
                </S.ThemeExampleWrap>
            ))}
        </S.ThemeExampleStyle>
    );
});