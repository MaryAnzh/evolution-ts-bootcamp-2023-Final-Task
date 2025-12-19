import type { CardType, IsActiveType } from "~types";

export type ThemeViewProps = {
    cards: CardType[];
} & IsActiveType;