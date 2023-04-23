import styled from "styled-components";

export const MemoCardStyle = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(./assets/card.png);
  transition: .3s;
  opacity: 0.8;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }

  &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
        height: 100%;
        border-radius: 0.5rem;
        border: 4px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
    } 
`;