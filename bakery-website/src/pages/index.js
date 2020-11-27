import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Cakes";
import { productData, productDataTwo } from "../components/Cakes/data";
import FeatureCake from "../components/FeatureCake";
import FeatureCupcake from "../components/FeatureCupcake";
import AboutUs from "../components/AboutUs";
import { homeObjOne } from "../components/AboutUs/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Products heading="Choose your favorite cake" data={productData} />
      <FeatureCake />
      <Products heading="Choose your favorite cupcake" data={productDataTwo} />
      <FeatureCupcake />
      <AboutUs {...homeObjOne} />
    </>
  );
};

export default Home;
