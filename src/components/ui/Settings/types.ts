import type { ThemeNameType } from "~types";

export type SettingProps = {
    changeTheme: (t: ThemeNameType) => void;
    hiddenSetting: () => void;
    show: boolean;
}