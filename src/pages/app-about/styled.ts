import styled from "styled-components";

export const AboutPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  color: ${({theme}) => theme.fontColor};
`;

export const AboutPageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;