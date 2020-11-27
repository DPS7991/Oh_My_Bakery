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

const AboutUs = ({
  lightBg,
	id,
	imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
    return (
      <>
        <AboutusContainer lightBg={lightBg} id={id}>
          <AboutusWrapper>
            <AboutusRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </AboutusRow>
          </AboutusWrapper>
        </AboutusContainer>
      </>
    );
  };

export default AboutUs;
