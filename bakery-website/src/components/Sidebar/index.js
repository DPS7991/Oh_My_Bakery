import React, { useState, useEffect, useContext } from "react";
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
import { CartContext } from "../../App";
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  const cartContext = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    getTotalItems();
  }, [cartContext.cartItems]);

  const getTotalItems = () => {
    let total = 0;

    for (let index = 0; index < cartContext.cartItems.length; index++) {
      total += cartContext.cartItems[index].quantity;
    }

    setTotalItems(total);
  };

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
          <SidebarLinkCart to="/cart">
            <FaShoppingCart /> Cart ({totalItems})
          </SidebarLinkCart>
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
