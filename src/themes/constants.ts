import type { ThemeType, ThemeConstType, ThemesType } from "./types";
import { DICTIONARY } from "../constants";
const { BLACK, FAIRY, SEA } = DICTIONARY;

const THEME_DATA: ThemeConstType = {
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
  goldButtonBorder: `
      &::after {
          content: '';
          position: absolute;
          width: 100%;
            height: 100%;
            border-radius: 6px;
            border: 2px solid transparent;
            background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: 2;
    }`,
  blackBackground: 'radial-gradient(ellipse at center top, #333 -10%,#000000 100%))',
  seaBackground: 'radial-gradient(ellipse at center top, rgb(21, 120, 145) -10%,#000000 100%',
  fairyBackground: 'radial-gradient(ellipse at center top, #92A6A2 0%, #3C4845 13%, #1E2423 58%, #074E43 100%)'
}

export const BLACK_THEME: ThemeType = {
  const: THEME_DATA,
  name: BLACK,
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

export const SEA_THEME: ThemeType = {
  const: THEME_DATA,
  name: SEA,
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

export const FAIRY_THEME: ThemeType = {
  const: THEME_DATA,
  name: FAIRY,
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
  background: `#1E2423`,
  goldGradient: `linear-gradient(90deg, #CBA9A3 0%, #E8C8FF 13%, #9E4A3E 58%, #EBCECE 100%)`,
  gradient: `radial-gradient(ellipse at center top, #92A6A2 0%, #3C4845 13%, #1E2423 58%, #074E43 100%)`,
  gloverImg: './assets/star-fairy.png'
}

export const THEMES: ThemesType = {
  [BLACK]: BLACK_THEME,
  [SEA]: SEA_THEME,
  [FAIRY]: FAIRY_THEME,
}
