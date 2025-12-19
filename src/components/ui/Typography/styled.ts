import styled, { css } from "styled-components";
import { TEXT_VIEW_STYLES } from "./constants";
import type { TypographyStyleType, TypographyViewStyleType } from "./types";

export const getTextSettings = ({
    size,
    letterSpacing,
    lineHeight,
    weight,
}: TypographyViewStyleType) => `
    font-size: ${size};
	line-height:  ${lineHeight};
	letter-spacing:  ${letterSpacing};
	font-weight:  ${weight};
`;

export const TypographyStyle = styled.p<TypographyStyleType>`
    margin: 0;
	padding: 0;
	font-style: normal;
    color: ${({ theme }) => theme.fontColor};

    ${({ textView }) => {
        const view = textView ?? 'bodyMMedium';

        const { size, lineHeight, letterSpacing, weight } =
            TEXT_VIEW_STYLES[view];

        return css`
			
			${getTextSettings({ size, lineHeight, letterSpacing, weight })};
		`;
    }}
`;