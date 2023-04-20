import styled from "styled-components";

export const CarouselStyle = styled.div`
  width: 250px;
  height: 60vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;


export const CarouselContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselBodyWrap = styled.div`
  width: 100%;
  height:150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
`;

export const CarouselBody = styled.div`
  width: 100%;
  height:150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
  /* animation: spin 1s linear infinite; */
  
  @keyframes spin {
      0% {transform: perspective(1000px) rotateX(0deg) rotateX(8deg)}
      100% {transform: perspective(1000px) rotateX(-360deg) rotateX(8deg)}
    }
`;

export const CarouselCard = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 1rem;
    border: 1px solid white;
    background-position-y: bottom;
    background-position-x: right;
    background-size: 30%;
    background-repeat: no-repeat;
    font-size: 4rem;
    color: ${({theme}) => theme.color};
    z-index: 11;
    
    /* &::after {
      content: '';
      position: absolute;
      width: 100%;
      box-sizing: border-box;
        height: 100%;
        border-radius: 1rem;
        border: 10px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
    } */
`;

export const CardBorderStyle = styled.div`
 
        width: 100%;
        height: 100%;
        border-radius: 30px;
        border: 10px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
}
`;