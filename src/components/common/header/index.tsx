import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";
import {
    HeaderStyle,
    UserNameGreasing,
    UserNameWrap,
    ThemesWrap,
    BlackThemeButton,
    SeeThemeButton
} from "./style";

type HeaderProps = {
    changeTheme: (themeName: 'black' | 'see') => void
}

export const Header: React.FC<HeaderProps> = observer((props) => {

    return (
        <HeaderStyle>
            <UserNameWrap>
                <UserNameGreasing>
                    Hello  {store.user}
                </UserNameGreasing>
            </UserNameWrap>
            {/* <div>
                 <div>current user: {store.user}</div>
                </ThemesWrap>
                <button onClick={
                    () => {
                        store.setUser("Alfred");
                    }
                }>
                    change user
                </button>
            </div> */}

            <ThemesWrap>
                <BlackThemeButton
                    onClick={() => props.changeTheme('black')}
                >
                    Black
                </BlackThemeButton>
                <SeeThemeButton
                    onClick={() => props.changeTheme('see')}
                >
                    See
                </SeeThemeButton>
            </ThemesWrap>
        </HeaderStyle >
    );
})