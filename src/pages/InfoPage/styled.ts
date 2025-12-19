import styled from "styled-components";
import { Typography } from "../../components";

export const AppInfoTop = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.fontColor};
`;

export const TechnologyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: circle;

  &::marker {
    color: white;
  }
`;

export const TechnologyListItem = styled(Typography)`
  padding: 0.5rem;
`;
