import React from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Logo } from "~components";
import { ICON_PICKER as I } from '~constants';

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
                    <S.SettingLogo>
                        <I.SettingsIcon />
                    </S.SettingLogo>
                </S.HeaderSettingsStyle>
            </S.HeaderNavSettings>
        </S.HeaderStyle>
    );
});