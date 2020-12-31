import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 12px 0;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 24px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 4px 0;
`;

export const Content = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin: 8px 0;
`;
