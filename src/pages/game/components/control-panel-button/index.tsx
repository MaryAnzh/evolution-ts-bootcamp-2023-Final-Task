import React from "react"
import { ControlPanelButtonStyle } from "./styled"
import { store } from "../../../../App"
import { sounds } from "../../../../data/sounds"

export const ControlPanelButton = () => {
    return (
        <ControlPanelButtonStyle
            onClick={() => {
                store.startRound();
                if (store.audio) {
                    sounds.click.play();
                }
            }}>
            Spin
        </ControlPanelButtonStyle >
    )
}