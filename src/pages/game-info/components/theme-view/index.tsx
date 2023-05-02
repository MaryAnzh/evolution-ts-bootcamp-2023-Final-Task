import React from 'react';

import { ICard } from '../../../../data/cards';
import { ThemeViewCard, ThemeViewStyle } from './styled';

type ThemeViewProps = {
    cards: ICard[],
    isActive: boolean,
}

export const ThemeView: React.FC<ThemeViewProps> = (props) => {
    return (
        <ThemeViewStyle isActive={props.isActive}>
            {props.cards.map(card => <ThemeViewCard key={card.id}>
                <img src={card.url} alt='theme icon'/>
            </ThemeViewCard>)}
        </ThemeViewStyle>
    );
}