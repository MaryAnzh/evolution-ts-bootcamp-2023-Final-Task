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
  transition: .3s;
  opacity: 0.4;
  
  &:hover {
    opacity: 1;
  }

  @keyframes fairyLight {
    0%{opacity: 0.4}
    30%{opacity: 0.1:}
    80%{opacity: 1;}
    100%{opacity: 0.4; }
  }
`;