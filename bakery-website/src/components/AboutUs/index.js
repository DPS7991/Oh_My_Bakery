import React from "react";
import {
  AboutusContainer,
  AboutusWrapper,
  AboutusRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from "./AboutusElements";
import logo from "../../images/undraw_Birthday_cake_2wxy.svg";

const AboutUs = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
}) => {
  return (
    <AboutusContainer lightBg={lightBg} id={id}>
      <AboutusWrapper>
        <AboutusRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle
                darkText={darkText}
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {description}
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={logo} alt={alt} />
            </ImgWrap>
          </Column2>
        </AboutusRow>
      </AboutusWrapper>
    </AboutusContainer>
  );
};

export default AboutUs;
