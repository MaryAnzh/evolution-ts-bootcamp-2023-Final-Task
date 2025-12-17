import type { ReactNode } from "react";
import type { TextViewNameType } from "../../../types";

export type TypographyViewStyleType = {
    size: string,
    lineHeight: string,
    letterSpacing: string,
    weight: number,
}

export type TypographyStyleType = {
    textView?: TextViewNameType;
    asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'li';
    callback?: () => void;
};

export type TypographyProps = TypographyStyleType & {
    children: ReactNode;
}

