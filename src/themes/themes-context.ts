import React from 'react'
import { ITheme } from './theme.interface';

export interface IThemes {
    black: ITheme,
    see: ITheme,
}

export const blackTheme: ITheme = {
    name: 'black',
    mainColor: 'string',
    mainColorLight: 'string',
    mainColorLight_1: 'string',
    mainColorExtraLight: 'string',
    mainColorDark: 'string',
    mainColorDark_1: 'string',
    mainBackground: 'string',
    contrastColor: 'string',
    contrastColorLight: 'string',
    contrastColorDark: 'string',
    fontColor: 'string',
    fontSize: 'string',
    fontSizeHeader: 'string',
    fontSizeTitle: 'string',
    fontFamily: 'string',
    fontFamilyTitle: 'string',
    background: `rgb(0, 0, 0)`,
    gradient: 'radial-gradient(ellipse at center top, #333 -10%,#000000 100%)',
}

export const seeTheme: ITheme = {
    name: 'see',
    mainColor: 'string',
    mainColorLight: 'string',
    mainColorLight_1: 'string',
    mainColorExtraLight: 'string',
    mainColorDark: 'string',
    mainColorDark_1: 'string',
    mainBackground: 'string',
    contrastColor: 'string',
    contrastColorLight: 'string',
    contrastColorDark: 'string',
    fontColor: 'string',
    fontSize: 'string',
    fontSizeHeader: 'string',
    fontSizeTitle: 'string',
    fontFamily: 'string',
    fontFamilyTitle: 'string',
    background: `rgb(56, 56, 56)`,
    gradient: 'radial-gradient(ellipse at center top, rgb(21, 120, 145) -10%,#000000 100%)',
}

export const themes: IThemes = {
    black: blackTheme,
    see: seeTheme,
}
