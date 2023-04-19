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

export const SlotGameTitle = styled.h2`
   font-size: 3rem;
   color: ${({ theme }) => theme.color};
   font-weight: 600;
 `;