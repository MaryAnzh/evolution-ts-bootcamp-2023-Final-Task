import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";
import { HeaderStyle } from "./style";
import { ThemeContext } from "styled-components";

type HeaderProps = {
    changeTheme: (themeName: 'black' | 'see') => void
}

export const Header: React.FC<HeaderProps> = observer((props) => {

    return (
        <HeaderStyle>
            <div>
                <div>current user: {store.user}</div>
                <button onClick={
                    () => {
                        store.setUser("Alfred");
                    }
                }>
                    change user
                </button>
            </div>
            <button
                onClick={() => props.changeTheme('black')}
            >Black</button>
            <button
                onClick={() => props.changeTheme('see')}
            >See</button>

        </HeaderStyle >
    );
})