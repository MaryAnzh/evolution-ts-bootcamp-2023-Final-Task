import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { IconNameType } from '~types';

import type { BUTTON_COLOR_VARIANTS, BUTTON_SIZES } from './constants';

export type ButtonStyleProps = Partial<{
	buttonColorVariant: keyof typeof BUTTON_COLOR_VARIANTS;
	buttonSize: keyof typeof BUTTON_SIZES;
	buttonWidth: string;
	isRoundButton: boolean;
	isMultiline: boolean;
	isFistLaterLowercase: boolean;
	isIconButton: boolean;
	isSmoothIcon: boolean;
	buttonRightIconRotate?: number;
	buttonLeftIconRotate?: number;
}>;

export type ButtonProps = Omit<ButtonStyleProps, 'isIconButton'> &
	Partial<{
		buttonText: string;
		buttonLeftNodeElement: ReactNode;
		buttonLeftIconName: IconNameType;
		buttonRightIconName: IconNameType;
		buttonNodeElement: ReactNode;
	}> &
	ButtonHTMLAttributes<HTMLButtonElement>;
