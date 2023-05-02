import styled from "styled-components";

export const ScorePanelStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ScoreWrapStyle = styled.span`
   color: ${({ theme }) => theme.color};
   font-size: 2rem;
   font-weight: 600;
`;

export const ScoreIconStyle = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(./assets/money.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;