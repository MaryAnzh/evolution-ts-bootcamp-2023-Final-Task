import styled from "styled-components";

export const MemoStyle = styled.div`
  max-width: 760px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const MemoTitle = styled.h3`
   font-size: 3rem;
   font-weight: 600;
   color: ${({theme}) => theme.fontColor};
   text-transform: uppercase;
`;