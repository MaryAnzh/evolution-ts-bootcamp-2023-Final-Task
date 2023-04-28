import React from "react";

import { PopUpStyle } from "../../pop-up-components/styled";
import {
    CrossLine,
    SettingCross,
    SettingsStyle,
    SettingsTile,
    SettingsTop
} from "./style";

export const Settings = () => {
    return (
        <PopUpStyle>
            <SettingsStyle>
                <SettingsTop>
                    <SettingsTile>
                        Setting
                    </SettingsTile>
                    <SettingCross>
                        <CrossLine rotate='45deg'></CrossLine>
                        <CrossLine rotate='-45deg'></CrossLine>

                    </SettingCross>
                </SettingsTop>

            </SettingsStyle>
        </PopUpStyle>
    );
}