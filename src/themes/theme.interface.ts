export enum ThemeEnum { black, sea }

export interface ITheme {
    name: 'black' | 'sea',
    maxAppWidth: string,
    maxPageWidth: string,
    mainColor: string,
    mainColorLight: string,
    mainColorLight_1: string,
    mainColorExtraLight: string,
    mainColorDark: string,
    mainColorDark_1: string,
    mainBackground: string,
    contrastColor: string,
    contrastColorLight: string,
    contrastColorDark: string,
    fontColor: string,
    fontSize: string,
    fontSizeHeader: string,
    fontSizeTitle: string,
    fontFamily: string,
    fontFamilyTitle: string,
    background: string,
    gradient: string,
    goldGradient: string,
    gloverImg: string
}