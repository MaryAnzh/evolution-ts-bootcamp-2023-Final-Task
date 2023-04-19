import React from "react"
import { ControlPanelButtonStyle } from "./styled"
import { store } from "../../../../App"

export const ControlPanelButton = () => {
    return (
        <ControlPanelButtonStyle
            onClick={store.startRound}>
            Spin
        </ControlPanelButtonStyle>
    )
}