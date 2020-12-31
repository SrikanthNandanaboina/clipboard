import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 30px;
  padding: 12px;
  display: flex;
  background: #ffffff;
  align-items: center;
  border-bottom: 1px solid #eaeaea;

  @media (min-width: 1280px) {
    margin: 12px;
  }
`;

export const SearchIconWrapper = styled.span`
  margin: 4px 4px 0 0;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;

  ::placeholder {
    font-size: 12px;
  }
`;
