import styled from "styled-components";

export const APPStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: ${({ theme }) => theme.background}; */
  background: ${({ theme }) => theme.gradient};
`;

export const MainStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
`;

export const BlockedStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0%);
  z-index: 13;

`;

export const PageStyle = styled.div`
  max-width: ${({ theme }) => theme.const.maxPageWidth};
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({theme}) => theme.fontColor};
`;

export const PageTitleStyle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
`;