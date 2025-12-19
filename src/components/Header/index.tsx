import React from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Logo } from "../ui/Logo";
import { ROUTE_SET } from "./constants";
import type { HeaderProps } from "./types";

import * as S from "./style";

export const Header: React.FC<HeaderProps> = observer((props) => {
    const { pathname } = useLocation();

    return (
        <S.HeaderStyle>
            <S.HeaderLogoSection>
                <Logo />
            </S.HeaderLogoSection>
            <S.HeaderNavSettings>
                <S.HeaderNavStyle>
                    {ROUTE_SET.map(({ name, route }) => (
                        <Link key={name} to={route}>
                            <S.NavButtonStyle
                                isActive={pathname !== route}>
                                {name}
                            </S.NavButtonStyle>
                        </Link>
                    ))}
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