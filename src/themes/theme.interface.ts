export enum ThemeEnum {
    black = 'black',
    sea = 'sea',
    fairy = 'fairy'
}
export interface IThemeConst {
    maxAppWidth: string,
    maxPageWidth: string,
    iconSize: string,
    goldBorder: string,
}

export interface ITheme {
    const: IThemeConst,
    name: 'black' | 'sea',
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