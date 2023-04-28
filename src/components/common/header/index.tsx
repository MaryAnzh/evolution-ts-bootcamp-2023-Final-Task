import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { PageEnum } from "../../../App";

import { Logo } from "../logo";
import {
    HeaderStyle,
    HeaderLogoSection,
    HeaderNavStyle,
    NavButtonStyle,
    HeaderSettingsStyle,
    SettingLogo,
    HeaderNavSettings

} from "./style";
import { ThemeEnum } from "../../../themes/theme.interface";
import { Link } from "react-router-dom";

type HeaderProps = {
    changeTheme: (themeName: ThemeEnum) => void
}

export const Header: React.FC<HeaderProps> = observer((props) => {
    const location = useLocation();
    enum NavStyle {
        activeOpacity = '1',
        disableOpacity = '0.6',
        activeEvent = 'none',
        disableOEvent = 'all'
    }

    return (
        <HeaderStyle>
            <HeaderLogoSection>
                <Logo />
            </HeaderLogoSection>
            <HeaderNavSettings>
                <HeaderNavStyle>
                    <Link to={PageEnum.game}>
                        <NavButtonStyle
                            opacity={location.pathname === PageEnum.game ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.game ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            Game
                        </NavButtonStyle>
                    </Link>
                    <Link to={PageEnum.about}>
                        <NavButtonStyle
                            opacity={location.pathname === PageEnum.about ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.about ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            About
                        </NavButtonStyle>
                    </Link>
                    <Link to={PageEnum.info}>
                        <NavButtonStyle
                            opacity={location.pathname === PageEnum.info ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.info ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            Info
                        </NavButtonStyle>
                    </Link>
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