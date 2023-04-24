import styled from "styled-components";

export const MemoWinStyle = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const MemoWinTitle = styled.h3`
  font-size: 4rem;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  text-transform: uppercase;
`;

export const MemoWinMessage = styled.p`
  font-size: 1.65rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.fontColor}
`;

export const MemoWinButtonWrap = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
`;

export const MemoWinMoney = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(./assets/money.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  transform: translateY(10px);
  `;

export const MemoContinuaGameButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-image: url(./assets/gold-button.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  font-size: 1,6rem;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
  `;