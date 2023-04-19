import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontColor};
  align-items: center;
`;

export const UserNameWrap = styled.div`
  width: 10rem;
`;

export const UserNameGreasing = styled.span`
  font-size: ${({ theme }) => theme.fontSizeHeader};
`;

export const ThemesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BlackThemeButton = styled.button`
  padding: 0.4rem 0.6rem;
  background: none;
  border: 1px solid ;
  color: ${({ theme }) => theme.fontColor};;
  text-transform: uppercase;
  border-radius: 6px;
`;

export const SeeThemeButton = styled.button`
  padding: 0.4rem 0.6rem;
  background: ${({theme}) => theme.gradient};
  border: 1px solid ;
  color: ${({ theme }) => theme.fontColor};;
  text-transform: uppercase;
  border-radius: 6px;
`;