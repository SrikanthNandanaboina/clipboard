import React from "react";
import Menu from "./menu-black";
import {
  CreateJob,
  CustomNav,
  LeftNav,
  Logout,
  MenuIcon,
  MenuItems,
  BrandName,
  Item,
  RightNav,
  ProfileIcon,
  ProfileIconText,
} from "./styles";

const Navbar = () => {
  return (
    <CustomNav>
      <LeftNav>
        <MenuIcon>
          <Menu />
        </MenuIcon>
        <BrandName>HEALTH EXPLORE</BrandName>
      </LeftNav>
      <MenuItems>
        <Item>PROFILE</Item>
        <Item>JOBS</Item>
        <Item>PROFESSIONAL NETWORK</Item>
        <Item>SALARY</Item>
        <Item>LOUNGE</Item>
      </MenuItems>
      <RightNav>
        <CreateJob>Create Job</CreateJob>
        <ProfileIcon>
          <ProfileIconText>JO</ProfileIconText>
        </ProfileIcon>
        <Logout>Logout</Logout>
      </RightNav>
    </CustomNav>
  );
};

export default Navbar;
