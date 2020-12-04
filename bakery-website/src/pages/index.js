import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductsOne from "../components/Cakes";
import { productData } from "../components/Cakes/data";
import ProductsTwo from "../components/Cupcakes";
import { productDataTwo } from "../components/Cupcakes/data";
import FeatureCake from "../components/FeatureCake";
import FeatureCupcake from "../components/FeatureCupcake";
import AboutUs from "../components/AboutUs";
import { homeObjOne } from "../components/AboutUs/data";
import Footer from "../components/Footer";

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
      <ProductsOne heading="Choose your favorite cake" data={productData} />
      <FeatureCake />
      <ProductsTwo
        heading="Choose your favorite cupcake"
        data={productDataTwo}
      />
      <FeatureCupcake />
      <AboutUs {...homeObjOne} />
      <Footer />
    </>
  );
};

export default Home;
