import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";
import {
    HeaderStyle,
    UserNameGreasing,
    UserNameWrap,
    ThemesWrap,
    BlackThemeButton,
    SeaThemeButton
} from "./style";
import { ThemeEnum } from "../../../themes/theme.interface";

type HeaderProps = {
    changeTheme: (themeName: ThemeEnum) => void
}

export const Header: React.FC<HeaderProps> = observer((props) => {

    return (
        <HeaderStyle>
            <UserNameWrap>
                <UserNameGreasing>
                    Hello  {store.user}
                </UserNameGreasing>
            </UserNameWrap>

            <ThemesWrap>
                <BlackThemeButton
                    onClick={() => props.changeTheme(ThemeEnum.black)}>
                    Black
                </BlackThemeButton>
                <SeaThemeButton
                    onClick={() => props.changeTheme(ThemeEnum.sea)}
                >
                    Sea
                </SeaThemeButton>
            </ThemesWrap>
        </HeaderStyle >
    );
})