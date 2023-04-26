import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";

import { Logo } from "../logo";
import {
    HeaderStyle,
    HeaderLogoNavSection,
    HeaderLogo
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
            <HeaderLogoNavSection>
                <HeaderLogo>
                    <Logo />
                </HeaderLogo>
            </HeaderLogoNavSection>

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