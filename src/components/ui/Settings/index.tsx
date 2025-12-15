import React, { useState } from 'react';
import { store } from "../../../App";

import { PopUpStyle } from '../styled';
import { observer } from "mobx-react-lite";
import type { SettingProps } from './types';
import { THEMES_ICONS } from './constants';
import type { ThemeNameType } from '../../../themes';
import * as S from "./style";

export const Settings: React.FC<SettingProps> = observer(({ changeTheme, hiddenSetting }) => {
    const [animation, setAnimation] = useState<string>('showSetting 0.4s linear forwards');
    const handleChangeTheme = (value: ThemeNameType) => {
        changeTheme(value);
    }

    const handleClose = () => {
        setAnimation('hiddenSetting 0.4s');
        hiddenSetting();
    }

    return (
        <PopUpStyle>
            <S.SettingsStyle style={{ animation: animation }}>
                <S.SettingsTop>
                    <S.SettingsTile>
                        Setting
                    </S.SettingsTile>
                    <S.SettingCross
                        onClick={handleClose}
                    >
                        <S.CrossLine rotate='45deg' />
                        <S.CrossLine rotate='-45deg' />
                    </S.SettingCross>
                </S.SettingsTop>
                <S.SettingThemeWrap>
                    <S.SettingThemeTitle>
                        Theme:
                    </S.SettingThemeTitle>
                    <S.ThemeIconsWrap>
                        {THEMES_ICONS.map(({ name, url }) => (
                            <S.ThemeIcon
                                key={name}
                                themeStatus={store.theme === name ? 'active' : 'disable'}
                                img={url}
                                onClick={() => handleChangeTheme(name)}
                            >
                                <span>
                                    {name}
                                </span>
                            </S.ThemeIcon>
                        ))}
                    </S.ThemeIconsWrap>
                </S.SettingThemeWrap>
                <S.SettingФAudioWrap>
                    <S.SettingAudioTitle>
                        Audio:
                    </S.SettingAudioTitle>
                    <S.AudioOnOff>
                        <S.AudioOnOffButton
                            buttonStatus={store.audio ? 'active' : 'disable'}
                            onClick={() => store.setAudio(true)}
                        >
                            On
                        </S.AudioOnOffButton>
                        <S.AudioOnOffButton
                            buttonStatus={store.audio ? 'disable' : 'active'}
                            onClick={() => store.setAudio(false)}
                        >
                            Off
                        </S.AudioOnOffButton>
                    </S.AudioOnOff>
                </S.SettingФAudioWrap>
            </S.SettingsStyle>
        </PopUpStyle>
    );
})