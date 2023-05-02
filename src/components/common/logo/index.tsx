import React from "react";

import {
    LogoDollar,
    LogoDollarWrap,
    LogoStyle,
    LogoText,
    LogoTextWrap
} from "./styled";

export const Logo = () => {
    return (
        <LogoStyle>
            <LogoDollarWrap>
                <LogoDollar dollarWidth='28%'
                    src='./assets/dollar.png'>
                </LogoDollar>
                <LogoDollar dollarWidth='40%'
                    src='./assets/dollar.png'>
                </LogoDollar>
                <LogoDollar dollarWidth='28%'
                    src='./assets/dollar.png'>
                </LogoDollar>
            </LogoDollarWrap>
            <LogoTextWrap>
                <LogoText>S</LogoText>
                <LogoText>L</LogoText>
                <LogoText>O</LogoText>
                <LogoText>T</LogoText>
            </LogoTextWrap>

        </LogoStyle>
    );
}