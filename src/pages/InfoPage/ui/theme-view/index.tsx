import React from 'react';

import type { ThemeViewProps } from './types';
import { ThemeViewCard, ThemeViewStyle } from './styled';

export const ThemeView: React.FC<ThemeViewProps> = ({ cards, isActive }) =>
    <ThemeViewStyle isActive={isActive}>
        {cards.map(({ url, id }) =>
            <ThemeViewCard key={id}>
                <img src={url} alt='theme icon' />
            </ThemeViewCard>)}
    </ThemeViewStyle>;