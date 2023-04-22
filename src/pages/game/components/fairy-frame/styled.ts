import styled from "styled-components";

export const FairyFrameStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const FairySTyle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(${({ theme }) => theme.gloverImg});
  opacity: 0.6;
  
  &:hover {
    opacity: 1;
  }
`;