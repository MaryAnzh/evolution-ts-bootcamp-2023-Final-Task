import { ControlPanelButtonStyle } from "./styled";
import { store } from "../../../../App";
import { SOUNDS_DATA } from "../../../../constants";

export const ControlPanelButton = () => {
    return (
        <ControlPanelButtonStyle
            onClick={() => {
                store.startRound();
                if (store.audio) {
                    SOUNDS_DATA.click.play();
                }
            }}>
            Spin
        </ControlPanelButtonStyle >
    )
}