import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinkSignup,
  SidebarLinkCart,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="cakes" onClick={toggle}>
            Cakes
          </SidebarLink>
          <SidebarLink to="cupcakes" onClick={toggle}>
            Cupcakes
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLinkCart to="/">Cart ()</SidebarLinkCart>
          <SidebarLinkSignup to="/signup" onClick={toggle}>
            Sign Up
          </SidebarLinkSignup>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
