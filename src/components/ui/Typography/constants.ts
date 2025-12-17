import type { TextViewNameType } from "../../../types";
import type { TypographyViewStyleType } from "./types";

export const TEXT_VIEW_STYLES: Record<TextViewNameType, TypographyViewStyleType> = {
    headingXXL: {
        size: '59px',
        lineHeight: '120%',
        letterSpacing: '-2.36px',
        weight: 800,
    },
    headingMMedium: {
        size: '32px',
        lineHeight: '38px',
        letterSpacing: '-1.28px',
        weight: 500,
    },
    headingMRegular: {
        size: '32px',
        lineHeight: '38px',
        letterSpacing: '-1.28px',
        weight: 400,
    },
    headingSMedium: {
        size: '22px',
        lineHeight: '28px',
        letterSpacing: '-0.66px',
        weight: 500,
    },
    headingSRegular: {
        size: '22px',
        lineHeight: '28px',
        letterSpacing: '-0.66px',
        weight: 400,
    },
    /** default */
    bodyMMedium: {
        size: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.18px',
        weight: 500,
    },
    bodyMRegular: {
        size: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.18px',
        weight: 400,
    },
    bodyMedium: {
        size: '16px',
        lineHeight: '20px',
        letterSpacing: 'normal',
        weight: 500,
    },
    bodySMedium: {
        size: '14px',
        lineHeight: '20px',
        letterSpacing: 'normal',
        weight: 500,
    },
    bodySRegular: {
        size: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.14px',
        weight: 400,
    },
    descriptionMedium: {
        size: '12px',
        lineHeight: '14px',
        letterSpacing: 'normal',
        weight: 500,
    },
    descriptionRegular: {
        size: '12px',
        lineHeight: '14px',
        letterSpacing: 'normal',
        weight: 400,
    },
} as const;
