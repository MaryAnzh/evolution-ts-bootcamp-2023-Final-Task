import styled from "styled-components";

export const ControlPanelButtonStyle = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url(./assets/blue_glass_button.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 2rem;
  color: ${({theme}) => theme.fontColor};
  cursor: pointer;
`;