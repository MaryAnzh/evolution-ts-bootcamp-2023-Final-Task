import styled from "styled-components";

export const ThemeViewStyle = styled.div<{ isActive: boolean }>`
  max-width: calc(${({ theme }) => theme.const.maxPageWidth} / 2);
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  justify-content: space-between;
  gap: 1rem 0;
  border-radius: 6px;
  border-width: 1px;
  border-style : solid;
  border-color: ${({ isActive, theme }) => isActive ? theme.fontColor : 'transparent'};
  background: ${({ theme }) => theme.gradient};
`;

export const ThemeViewCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  
  ${({ theme }) => theme.const.goldButtonBorder};
  
  img {
    width: 80%;
  }
`;