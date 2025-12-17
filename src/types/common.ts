import type { TEXT_VIEW_NAME } from "../constants";

export type IsActiveType = { isActive: boolean }

export type CardType = {
    id: number;
    url: string;
}

export type TextViewNameType = keyof typeof TEXT_VIEW_NAME;