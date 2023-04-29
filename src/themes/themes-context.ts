import React from 'react'
import { ITheme, IThemeConst } from './theme.interface';

export interface IThemes {
    black: ITheme,
    sea: ITheme,
}

const themeConst: IThemeConst = {
    maxAppWidth: '1200px',
    maxPageWidth: '920px',
    iconSize: '30px',
    goldBorder: `
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        box-sizing: border-box;
          height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
          linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 2;
      }`,
}

export const blackTheme: ITheme = {
    const: themeConst,
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
    fontColor: '#D8BAAB',
    fontSize: 'string',
    fontSizeHeader: '1.25rem',
    fontSizeTitle: 'string',
    fontFamily: 'string',
    fontFamilyTitle: 'string',
    background: `rgb(0, 0, 0)`,
    goldGradient: `linear-gradient(90deg, #CBA9A3 0%, #E8C8FF 13%, #9E4A3E 58%, #EBCECE 100%)`,
    gradient: 'radial-gradient(ellipse at center top, #333 -10%,#000000 100%)',
    gloverImg: './assets/gold-button.png'
}

export const seaTheme: ITheme = {
    const: themeConst,
    name: 'sea',
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
    fontColor: '#D8BAAB',
    fontSize: 'string',
    fontSizeHeader: 'string',
    fontSizeTitle: 'string',
    fontFamily: 'string',
    fontFamilyTitle: 'string',
    background: `rgb(56, 56, 56)`,
    goldGradient: `linear-gradient(90deg, #CBA9A3 0%, #E8C8FF 13%, #9E4A3E 58%, #EBCECE 100%)`,
    gradient: 'radial-gradient(ellipse at center top, rgb(21, 120, 145) -10%,#000000 100%)',
    gloverImg: './assets/bubble.png'
}

export const themes: IThemes = {
    black: blackTheme,
    sea: seaTheme,
}
