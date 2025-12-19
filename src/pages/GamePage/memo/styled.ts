import styled from "styled-components";

export const MemoStyle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: ${({theme}) => theme.fontColor};
`;

export const MemoBlockedStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: sgba(0, 0, 0, 0%);
`;

export const MemoTopPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MemoTitle = styled.h3`
   font-size: 3rem;
   font-weight: 600;
   color: ${({ theme }) => theme.fontColor};
   text-transform: uppercase;
`;

export const MemoStartButton = styled.button`
  padding: 0.4rem 0.6rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./assets/blue-glass-button-2.png);
  border-radius: 6px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.fontColor};
  text-transform: uppercase;
  font-size: 1.625rem;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.8;
  transition: .3s;
  cursor: pointer;

  &:hover {
    opacity: 1;

  }

`;

export const MemoTimerStyle = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;