import styled from "styled-components";

export const GamePageStyle = styled.div`
  max-width: ${({ theme }) => theme.maxPageWidth};
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const SlotGameTopPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SlotGameStyle = styled.div`
  display: flex;
  gap: 1rem;
`;
export const LinkToSlot = styled.img`
  height: 2rem;
  padding-right: 2rem;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const SlotGameTitle = styled.h2`
   font-size: 3rem;
   color: ${({ theme }) => theme.color};
   font-weight: 600;
 `;

export const MoneyWrap = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const LinkToMemo = styled.div`
   position: relative;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-image: url('./assets/dollar.png');
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
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
    transform: scale(1.1);
   }
 `;

export const SlotGameWrap = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
 `;