import React from "react";
import { store } from "../../../App";

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
    ThemeIcon,
    SettingФAudioWrap,
    SettingAudioTitle,
    AudioOnOff,
    AudioOnOffButton
} from "./style";
import { ThemeEnum } from "../../../themes/theme.interface";
import { observer } from "mobx-react-lite";

export const Settings = observer(() => {

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
                        <ThemeIcon
                            themeStatus={store.theme === ThemeEnum.black ? 'active' : 'disable'}
                            onClick={() => store.setTheme(ThemeEnum.black)}
                        >
                            <span>
                                {ThemeEnum.black}
                            </span>
                        </ThemeIcon>
                        <ThemeIcon
                            themeStatus={store.theme === ThemeEnum.sea ? 'active' : 'disable'}
                            onClick={() => store.setTheme(ThemeEnum.sea)}
                        >
                            <span>{ThemeEnum.sea}</span></ThemeIcon>
                        <ThemeIcon
                            themeStatus={store.theme === ThemeEnum.fairy ? 'active' : 'disable'}
                        ><span>{ThemeEnum.fairy}</span></ThemeIcon>

                    </ThemeIconsWrap>
                </SettingThemeWrap>
                <SettingФAudioWrap>
                    <SettingAudioTitle>
                        Audio:
                    </SettingAudioTitle>
                    <AudioOnOff>
                        <AudioOnOffButton
                            buttonStatus={store.audio ? 'active' : 'disable'}
                            onClick={() => store.setAudio(true)}
                        >
                            On
                        </AudioOnOffButton>
                        <AudioOnOffButton
                            buttonStatus={store.audio ? 'disable' : 'active'}
                            onClick={() => store.setAudio(false)}
                        >
                            Off
                        </AudioOnOffButton>
                    </AudioOnOff>
                </SettingФAudioWrap>
            </SettingsStyle>
        </PopUpStyle >
    );
})