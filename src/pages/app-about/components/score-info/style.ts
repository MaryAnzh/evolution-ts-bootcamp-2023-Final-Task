import styled from "styled-components";

export const ScoreInfoStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ScoreInfoTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ScoreInfoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  `;

export const ScoreInfoShowMore = styled.div`
  position: relative;
  padding: 0.5rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 1;
  transition: all .3s;
  cursor: pointer;

  ${({ theme }) => theme.const.goldButtonBorder};
  
  &:active {
   transform: scale(0.9);
   opacity: 0.8;
  }

`;

export const ScoreRoundCost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ScoreRoundCostTitle = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

export const ScoreRoundCostPoint = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;