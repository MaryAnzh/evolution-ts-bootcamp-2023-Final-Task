import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../../App";
import { HeaderStyle } from "./style";

export const Header = observer(() => {

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
        </HeaderStyle >
    );
})