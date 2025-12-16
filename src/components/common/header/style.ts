import styled, { css } from "styled-components";
import type { IsActiveType } from "../../../types";

export const HeaderStyle = styled.header`
  max-width: ${({ theme }) => theme.const.maxAppWidth};
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontColor};
  align-items: center;
`;

export const HeaderLogoSection = styled.div`
   width: 100px;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   gap: 1rem;
 `;

export const HeaderNavSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const HeaderNavStyle = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const NavButtonStyle = styled.button<IsActiveType>`
  position: relative;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: none;
  outline: none;
  border-radius: 6px;
  transition: all.3s;
  color: ${({ theme }) => theme.fontColor};
  ${({ isActive }) => css`
    opacity: ${isActive ? 1 : 0.6};
    pointer-events: ${isActive ? 'all' : 'none'};
    ${isActive && css`cursor: pointer;`}
  `}

  &::after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
        height: 100%;
        border-radius: 6px;
        border: 2px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
  }
`;

export const HeaderSettingsStyle = styled.div`
   position: relative;
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
  cursor: pointer;

  
  &:hover img {
    transform: rotate(360deg);
  }

   &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
    z-index: 2;
    }
 `;

export const SettingLogo = styled.img`
    width: 70%;
    transition: .4s;
`;