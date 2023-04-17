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
    contrastColor: '#F5D17E',
    contrastColorLight: 'string',
    contrastColorDark: 'string',
    fontColor: '#F5D17E',
    fontSize: 'string',
    fontSizeHeader: '1.25rem',
    fontSizeTitle: 'string',
    fontFamily: 'string',
    fontFamilyTitle: 'string',
    background: `rgb(0, 0, 0)`,
    gradient: 'radial-gradient(ellipse at center top, #333 -10%,#000000 100%)',
}

export const seeTheme: ITheme = {
    name: 'see',
    mainColor: '#275F6D',
    mainColorLight: '#157991',
    mainColorLight_1: 'string',
    mainColorExtraLight: '#48B0C8',
    mainColorDark: 'string',
    mainColorDark_1: 'string',
    mainBackground: 'string',
    contrastColor: '#F5D17E',
    contrastColorLight: 'string',
    contrastColorDark: '#074E5E',
    fontColor: '#F5D17E',
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
