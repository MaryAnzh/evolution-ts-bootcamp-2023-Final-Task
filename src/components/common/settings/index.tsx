import React from "react";

import { PopUpStyle } from "../../pop-up-components/styled";
import {
    CrossLine,
    SettingCross,
    SettingsStyle,
    SettingsTile,
    SettingsTop,
    SettingThemeWrap,
    SettingThemeTitle,
    ThemeIconsWrap,
    ThemeIcon
} from "./style";
import { ThemeEnum } from "../../../themes/theme.interface";

export const Settings = () => {
    return (
        <PopUpStyle>
            <SettingsStyle>
                <SettingsTop>
                    <SettingsTile>
                        Setting
                    </SettingsTile>
                    <SettingCross>
                        <CrossLine rotate='45deg'></CrossLine>
                        <CrossLine rotate='-45deg'></CrossLine>
                    </SettingCross>
                </SettingsTop>
                <SettingThemeWrap>
                    <SettingThemeTitle>
                        Theme:
                    </SettingThemeTitle>
                    <ThemeIconsWrap>
                        <ThemeIcon themeName={ThemeEnum.black}><span>{ThemeEnum.black}</span></ThemeIcon>
                        <ThemeIcon themeName={ThemeEnum.sea}><span>{ThemeEnum.sea}</span></ThemeIcon>
                        <ThemeIcon themeName={ThemeEnum.fairy}><span>{ThemeEnum.fairy}</span></ThemeIcon>

                    </ThemeIconsWrap>
                </SettingThemeWrap>
            </SettingsStyle>
        </PopUpStyle>
    );
}