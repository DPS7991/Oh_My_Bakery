import React, { useState, useEffect, useContext } from "react";
import { FaBirthdayCake, FaBars } from "react-icons/fa";
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
import { CartContext } from "../../pages/index";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const cartContext = useContext(CartContext);

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

  return (
    <>
      {/* <ProductsOne /> */}
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
                <NavLinkCart to="/">
                  Cart ({cartContext.cartItems.length})
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
