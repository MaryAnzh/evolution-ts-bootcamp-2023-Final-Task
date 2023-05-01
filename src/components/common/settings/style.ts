import styled from "styled-components";

export const SettingsStyle = styled.div`
  position: absolute;
  right: 2px;
  top: 1rem;
  width: 340px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.fontColor};
  transform: translateY(-150%);
  transition: 0.4s;

  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
`;

export const SettingsTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsTile = styled.h3`
  font-size: 1.5rem;
`;

export const SettingCross = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.8;
  transition: .3s;
  cursor: pointer;

  &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
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

    &:hover {
        opacity: 1;

        div:nth-child(1) {
          transform: rotate(-45deg);
        }
        div:nth-child(2) {
          transform: rotate(45deg);
        }   
    }
`;

export const CrossLine = styled.div<{ rotate: string }>`
  position: absolute;
  width: 70%;
  height: 4px;
  border-radius: 2px;
  transform: rotate(${({ rotate }) => rotate});
  background-image: ${({ theme }) => theme.goldGradient};
  transition: .3s;
`;

export const SettingThemeWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingThemeTitle = styled.h4`
  font-size: 1.25rem;
`;

export const ThemeIconsWrap = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  `;

export const ThemeIcon = styled.div<{ themeStatus: 'active' | 'disable', img: string }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.8;
  transition: .3s;
  cursor: pointer;
  opacity: ${({ themeStatus }) => themeStatus === 'active' ? '1' : '0.6'};
  pointer-events: ${({ themeStatus }) => themeStatus === 'active' ? 'none' : 'all'};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  
  &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
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

  & span {
    position: absolute;
    top: -1.2rem;
    opacity: ${({ themeStatus }) => themeStatus === 'active' ? '1' : '0'};
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
    pointer-events: none;
    transition: 0.3s;
  }

  &:hover {
    span {
        opacity: 1;
    }
  }
`;

export const SettingФAudioWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingAudioTitle = styled.h4`
  font-size: 1.25rem;
`;

export const AudioOnOff = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AudioOnOffButton = styled.button<{ buttonStatus: 'active' | 'disable' }>`
  position: relative;
  width: ${({ theme }) => theme.const.iconSize};
  height: ${({ theme }) => theme.const.iconSize};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  border-radius: 50%;  
  color: ${({ theme }) => theme.fontColor};
  font-size: 0.8rem;
  opacity: ${({ buttonStatus }) => buttonStatus === 'active' ? '1' : '0.6'};
  pointer-events: ${({ buttonStatus }) => buttonStatus === 'active' ? 'none' : 'all'};
  transition: 0.3s;
  cursor: pointer;

  ${({ theme }) => theme.const.goldBorder}
  
  &:hover {
    opacity: ${({ buttonStatus }) => buttonStatus === 'active' ? '1' : '1'};
  }
`;