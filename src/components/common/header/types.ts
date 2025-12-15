import type { ThemeNameType } from "../../../themes"

export type HeaderProps = {
    changeTheme: (themeName: ThemeNameType) => void,
    showSettings: () => void
}