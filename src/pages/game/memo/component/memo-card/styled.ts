import styled from "styled-components";

const borderRadius = '0.5rem';

export const MemoCardStyle = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  transform-style: preserve-3d;
  perspective: 500px;
  border-radius: ${borderRadius};
  cursor: pointer;
`;

export const MemoCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.background};
  background-image: url(./assets/card.png);
  backface-visibility: hidden;
  transition: all .4s;
  z-index: 2;

  &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
        height: 100%;
        border-radius: ${borderRadius};
        border: 4px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
    }
`;

export const MemoBackCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius};
    backface-visibility: visible;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all .4s;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
        height: 100%;
        border-radius: ${borderRadius};
        border: 4px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
    }
`;