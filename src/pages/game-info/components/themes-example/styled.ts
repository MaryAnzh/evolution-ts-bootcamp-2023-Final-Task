import styled from "styled-components";
import { Typography } from "../../../../components";

export const ThemeExampleStyle = styled.section`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ThemeExampleTitle = styled(Typography)`
  text-align: right;
`;

export const ThemeExampleWrap = styled.div<{ isActive: boolean }>`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-style : solid;
  border-color: ${({ isActive, theme }) => isActive ? theme.fontColor : 'transparent'};
  background: ${({ theme }) => theme.background};
  cursor: pointer;
`;

export const ThemeExampleWrapTitle = styled(Typography)`
  text-transform: uppercase;
`;