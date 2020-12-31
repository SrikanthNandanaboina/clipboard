import styled from "styled-components";

export const FilterList = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 25%;
  }
`;

export const FilterWrapper = styled.div`
  cursor: pointer;
  @media (min-width: 1280px) {
    margin: 0 12px 12px 0;
    background: #ffffff;
    height: max-content;
    padding: 12px;
  }
`;

export const FilterType = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;

export const FilterData = styled.div`
  margin: 8px 0;
`;

export const FilterDataName = styled.span`
  font-weight: 500;
  margin: 0 6px 0 0;
  font-size: 13px;
`;

export const FilterDataCount = styled.span`
  font-size: 13px;
  color: #8a8686;
`;

export const ShowText = styled.span`
  font-size: 11px;
  color: #0070f3;
`;
