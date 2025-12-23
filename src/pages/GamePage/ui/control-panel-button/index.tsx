import { store } from "store";
import { SOUNDS_DATA, SPIN } from "~constants";

import { ControlPanelButtonStyle } from "./styled";

export const ControlPanelButton = () =>
    <ControlPanelButtonStyle
        onClick={() => {
            store.startRound();
            if (store.audio) {
                SOUNDS_DATA.click.play();
            }
        }}>
        {SPIN}
    </ControlPanelButtonStyle >;