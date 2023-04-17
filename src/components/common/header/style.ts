import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color};
`;

export const UserNameWrap = styled.div`
  width: 10rem;
`;

export const UserNameGreasing = styled.span`
  font-size: 1.25re;
  color: ${props => props.theme.color}
`;
