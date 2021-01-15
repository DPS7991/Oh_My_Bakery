import React, { useState, useEffect, useContext } from "react";
import { FaBirthdayCake, FaBars, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinkSignup,
  NavLinkCart,
} from "./NavbarElements";
import { CartContext } from "../../App";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const cartContext = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Oh My Bakery <FaBirthdayCake />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="cakes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Cakes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="cupcakes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Cupcakes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinkCart to="/cart">
                  <FaShoppingCart />
                  Cart ({totalItems})
                </NavLinkCart>
              </NavItem>
              <NavItem>
                <NavLinkSignup to="/signup">Sign Up</NavLinkSignup>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
