import styled from "styled-components";

export const CustomNav = styled.div`
  padding: 8px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
`;

export const LeftNav = styled.div`
  display: flex;
`;

export const MenuIcon = styled.span`
  width: 24px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const BrandName = styled.span`
  margin: 0 0 0 16px;
  color: #0070f3;
  font-weight: 500;
  font-size: 16px;
`;

export const ProfileIcon = styled.div`
  position: relative;
  padding: 8px;
  width: 24px;
  height: 100%;
  background: #0070f3;
  text-align: center;
  border-radius: 50%;
`;

export const ProfileIconText = styled.span`
  color: #ffffff;
  font-weight: 500;
`;

export const MenuItems = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Item = styled.span`
  font-weight: 600;
  margin: 0 12px;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateJob = styled.span`
  margin: 0 16px;
  border: 2px solid #0070f3;
  padding: 3px 8px;
  color: #0070f3;
  font-weight: 500;
  border-radius: 8px;
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Logout = styled.span`
  margin: 0 16px;
  font-weight: 700;
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;
