import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";

import { Logo } from "../logo";
import {
    HeaderStyle,
    HeaderLogoSection,
    HeaderNavStyle,
    NavButtonStyle,
    HeaderSettingsStyle,
    SettingLogo,
    HeaderNavSettings
    // UserNameGreasing,
    // UserNameWrap,
    // ThemesWrap,
    // BlackThemeButton,
    // SeaThemeButton
} from "./style";
import { ThemeEnum } from "../../../themes/theme.interface";

type HeaderProps = {
    changeTheme: (themeName: ThemeEnum) => void
}

export const Header: React.FC<HeaderProps> = observer((props) => {

    return (
        <HeaderStyle>
            <HeaderLogoSection>
                <Logo />
            </HeaderLogoSection>
            <HeaderNavSettings>
                <HeaderNavStyle>
                    <NavButtonStyle>Game</NavButtonStyle>
                    <NavButtonStyle>About</NavButtonStyle>
                    <NavButtonStyle>Info</NavButtonStyle>
                </HeaderNavStyle>
                <HeaderSettingsStyle>
                    <SettingLogo src='./assets/settings.png' alt='settings'></SettingLogo>
                </HeaderSettingsStyle>
            </HeaderNavSettings>

            {/* <UserNameWrap>
                <UserNameGreasing>
                    Hello  {store.user}
                </UserNameGreasing>
            </UserNameWrap>

            <ThemesWrap>
                <BlackThemeButton
                    className={store.isMemoStart ? 'blocked' : undefined}
                    onClick={() => props.changeTheme(ThemeEnum.black)}>
                    Black
                </BlackThemeButton>
                <SeaThemeButton
                    className={store.isMemoStart ? 'blocked' : undefined}
                    onClick={() => props.changeTheme(ThemeEnum.sea)}
                >
                    Sea
                </SeaThemeButton>
            </ThemesWrap> */}
        </HeaderStyle >
    );
})