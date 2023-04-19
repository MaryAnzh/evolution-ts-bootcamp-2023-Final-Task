import styled from "styled-components";

export const ScorePanelStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const ScoreWrapStyle = styled.span`
   color: ${({ theme }) => theme.color};
   font-size: 2rem;
   font-weight: 600;
`;