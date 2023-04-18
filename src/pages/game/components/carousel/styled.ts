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
  
  @keyframes spin {
      0% {transform: perspective(1000px) rotateX(0deg) rotateX(8deg)}
      100% {transform: perspective(1000px) rotateX(-360deg) rotateX(8deg)}
    }
`;

export const CarouselCard = styled.div`
    position: absolute;
    width: 90%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 0.554m;
    border: 1px solid white;
    background-color: #eee;
    background-position-y: bottom;
    background-position-x: right;
    background-size: 30%;
    background-repeat: no-repeat;
    z-index: 11;
`;