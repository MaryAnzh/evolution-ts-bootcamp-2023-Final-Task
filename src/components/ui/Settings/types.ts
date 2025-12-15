import type { ThemeNameType } from "../../../themes";

export type SettingProps = {
    changeTheme: (t: ThemeNameType) => void;
    hiddenSetting: () => void;
    show: boolean;
}