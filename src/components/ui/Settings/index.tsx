import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { store } from '~stores';

import { AUDIO, BLACK, FAIRY, SEA, SETTINGS, THEME } from '~constants';
import { Typography } from '~components';
import type { ThemeNameType } from '~types';

import { PopUpStyle } from '../styled';

import type { SettingProps } from './types';
import * as S from "./style";

const THEMES_ICONS = [
    { name: BLACK, url: 'none' },
    { name: SEA, url: './assets/bubble.png' },
    { name: FAIRY, url: './assets/star.png' }
];

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
                    <Typography asTag='h3' textView='bodyMMedium'>
                        {SETTINGS}
                    </Typography>
                    <S.SettingCross
                        onClick={handleClose}
                    >
                        <S.CrossLine rotate='45deg' />
                        <S.CrossLine rotate='-45deg' />
                    </S.SettingCross>
                </S.SettingsTop>
                <S.SettingThemeWrap>
                    <Typography asTag='h4' textView='bodyMRegular'>
                        {THEME}:
                    </Typography>
                    <S.ThemeIconsWrap>
                        {THEMES_ICONS.map(({ name, url }) => (
                            <S.ThemeIcon
                                key={name}
                                themeStatus={store.theme === name ? 'active' : 'disable'}
                                img={url}
                                onClick={() => handleChangeTheme(name)}
                            >
                                <Typography textView='descriptionMedium'>
                                    {name}
                                </Typography>
                            </S.ThemeIcon>
                        ))}
                    </S.ThemeIconsWrap>
                </S.SettingThemeWrap>
                <S.SettingФAudioWrap>
                    <Typography asTag='h4' textView='bodyMRegular'>
                        {AUDIO}:
                    </Typography>
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