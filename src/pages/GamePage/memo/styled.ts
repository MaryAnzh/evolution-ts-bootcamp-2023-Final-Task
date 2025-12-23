import styled from "styled-components";

export const MemoStyle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.fontColor};
`;

export const MemoBlockedStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: sgba(0, 0, 0, 0%);
`;