import React from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { PageEnum } from "../../../App";

import { Logo } from "../../ui/Logo";
import { Link } from "react-router-dom";
import type { HeaderProps } from "./types";
import * as S from "./style";

export const Header: React.FC<HeaderProps> = observer((props) => {
    const location = useLocation();
    enum NavStyle {
        activeOpacity = '1',
        disableOpacity = '0.6',
        activeEvent = 'none',
        disableOEvent = 'all'
    }

    return (
        <S.HeaderStyle>
            <S.HeaderLogoSection>
                <Logo />
            </S.HeaderLogoSection>
            <S.HeaderNavSettings>
                <S.HeaderNavStyle>
                    <Link to={PageEnum.game}>
                        <S.NavButtonStyle
                            opacity={location.pathname === PageEnum.game ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.game ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            Game
                        </S.NavButtonStyle>
                    </Link>
                    <Link to={PageEnum.about}>
                        <S.NavButtonStyle
                            opacity={location.pathname === PageEnum.about ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.about ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            About
                        </S.NavButtonStyle>
                    </Link>
                    <Link to={PageEnum.info}>
                        <S.NavButtonStyle
                            opacity={location.pathname === PageEnum.info ? NavStyle.activeOpacity : NavStyle.disableOpacity}
                            pointerEvent={location.pathname === PageEnum.info ? NavStyle.activeEvent : NavStyle.disableOEvent}>
                            Info
                        </S.NavButtonStyle>
                    </Link>
                </S.HeaderNavStyle>
                <S.HeaderSettingsStyle
                    onClick={props.showSettings}>
                    <S.SettingLogo
                        src='./assets/settings.png'
                        alt='settings' />
                </S.HeaderSettingsStyle>
            </S.HeaderNavSettings>
        </S.HeaderStyle>
    );
});