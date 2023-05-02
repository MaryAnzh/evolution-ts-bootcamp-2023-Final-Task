import styled from "styled-components";

export const AppInfoTop = styled.div`
  width: 100%;
  display: flex;
`;

export const TechnologyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
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

export const TechnologyListItem = styled.li<{fontSize: string}>`
  padding: 0.5rem;
  font-size: ${({fontSize}) => fontSize};
  color: ${({ theme }) => theme.fontColor};
`;