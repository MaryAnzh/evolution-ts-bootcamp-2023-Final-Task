import React, { useState } from 'react';
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

type SettingProps = {
    changeTheme: (t: ThemeEnum) => void,
    hiddenSetting: () => void,
    show: boolean,
}

export const Settings: React.FC<SettingProps> = observer((props) => {
    const [animation, setAnimation] = useState<string>('showSetting 0.4s linear forwards');
    const changeTheme = (value: ThemeEnum) => {
        props.changeTheme(value);
    }
    const close = () => {
        setAnimation(prev => prev = 'hiddenSetting 0.4s');
        props.hiddenSetting();
    }

    return (
        <PopUpStyle>
            <SettingsStyle style={{ animation: animation }}>
                <SettingsTop>
                    <SettingsTile>
                        Setting
                    </SettingsTile>
                    <SettingCross
                        onClick={close}
                    >
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
                            img='none'
                            onClick={() => changeTheme(ThemeEnum.black)}
                        >
                            <span>
                                {ThemeEnum.black}
                            </span>
                        </ThemeIcon>
                        <ThemeIcon
                            themeStatus={store.theme === ThemeEnum.sea ? 'active' : 'disable'}
                            img='./assets/bubble.png'
                            onClick={() => changeTheme(ThemeEnum.sea)}
                        >
                            <span>{ThemeEnum.sea}</span></ThemeIcon>
                        <ThemeIcon
                            themeStatus={store.theme === ThemeEnum.fairy ? 'active' : 'disable'}
                            img='./assets/star.png'
                            onClick={() => changeTheme(ThemeEnum.fairy)}
                        >
                            <span>
                                {ThemeEnum.fairy}
                            </span>
                        </ThemeIcon>
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