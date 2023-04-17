import React from 'react'

export interface ITheme {
    name: 'black' | 'see',
    color: string,
}

export interface IThemes {
    black: ITheme,
    see: ITheme,
}

export const blackTheme: ITheme = {
    name: 'black',
    color: 'white',
}

export const seeTheme: ITheme = {
    name: 'see',
    color: 'pink',

}

export const themes: IThemes = {
    black: blackTheme,
    see: seeTheme,
}

export const ThemeContext = React.createContext<ITheme>({} as ITheme);