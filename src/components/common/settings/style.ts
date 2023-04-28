import styled from "styled-components";

export const SettingsStyle = styled.div`
  position: absolute;
  right: 2px;
  top: 1rem;
  width: 340px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const SettingsTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsTile = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
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