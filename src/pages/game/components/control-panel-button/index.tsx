import React from "react"
import { ControlPanelButtonStyle } from "./styled"
import { store } from "../../../../App"

export const ControlPanelButton = () => {
    const slotsCount = [0, 1, 2];

    const starSpin = () => {
        slotsCount.forEach(slot => {
            const time = 1000 * (slot + 1)
            store.spinSlot(slot);
            setTimeout(() => { store.stopSlot(slot) }, time);
        });
    }

    return (
        <ControlPanelButtonStyle
            onClick={starSpin}>
            Spin
        </ControlPanelButtonStyle>
    )
}