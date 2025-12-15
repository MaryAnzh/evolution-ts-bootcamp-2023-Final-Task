import styled from "styled-components";

export const LogoStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const LogoDollarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDollar = styled.img<{ dollarWidth: string }>`
  width: ${({ dollarWidth }) => dollarWidth};
`;

export const LogoTextWrap = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.gradient};
  background-color: ${({ theme }) => theme.fontColor};
  background-image: ${({ theme }) => theme.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;