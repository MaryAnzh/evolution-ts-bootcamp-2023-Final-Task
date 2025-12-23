import styled from "styled-components";
import { IMAGE_PICKER as I } from "~constants";

export const ControlPanelButtonStyle = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url(${I.goldButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: var(--base-contrast);
  font-size: 22px;
  opacity: 0.8;
  transition: var(--base-transition-time);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  
  &:active {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;