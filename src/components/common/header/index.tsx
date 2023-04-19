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

type HeaderProps = {
    changeTheme: (themeName: 'black' | 'sea') => void
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
                    onClick={() => props.changeTheme('black')}>
                    Black
                </BlackThemeButton>
                <SeaThemeButton
                    onClick={() => props.changeTheme('sea')}
                >
                    Sea
                </SeaThemeButton>
            </ThemesWrap>
        </HeaderStyle >
    );
})