import type { ThemeNameType } from "~types";

export type HeaderProps = {
    changeTheme: (themeName: ThemeNameType) => void,
    showSettings: () => void
}