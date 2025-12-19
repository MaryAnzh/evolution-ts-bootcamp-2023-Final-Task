import type { BLACK, SEA, FAIRY } from "~constants";

export type ThemeNameType = typeof BLACK | typeof FAIRY | typeof SEA;

export type ThemeConstType = {
    maxAppWidth: string,
    maxPageWidth: string,
    iconSize: string,
    goldBorder: string,
    goldButtonBorder: string,
    blackBackground: string,
    seaBackground: string,
    fairyBackground: string,
}

export type ThemeType = {
    const: ThemeConstType;
    name: ThemeNameType;
    mainColor: string;
    mainColorLight: string;
    mainColorLight_1: string;
    mainColorExtraLight: string;
    mainColorDark: string;
    mainColorDark_1: string;
    mainBackground: string;
    contrastColor: string;
    contrastColorLight: string;
    contrastColorDark: string;
    fontColor: string;
    fontSize: string;
    fontSizeHeader: string;
    fontSizeTitle: string;
    fontFamily: string;
    fontFamilyTitle: string;
    background: string;
    gradient: string;
    goldGradient: string;
    gloverImg: string;
}

