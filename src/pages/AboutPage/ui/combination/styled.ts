import styled from "styled-components";

export const CombinationStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CombinationSet = styled.div`
  display: flex;
  gap: 3rem;
  align-items:  flex-end;
`;

export const CombinationIcon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme }) => theme.const.goldBorder};

  img {
    height: 80%;
  }
`;

export const CombinationPoint = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;