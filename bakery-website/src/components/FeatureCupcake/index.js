import React, { useState } from "react";
import { FeatureCupcakeContainer } from "../FeatureCupcake/FeatureCupcakeElements";
import { Button } from "../ButtonElements";

const FeatureCupcake = () => {
  const [hover, sethover] = useState(false);
  const onHover = () => {
    sethover(!hover);
  };
  return (
    <FeatureCupcakeContainer>
      <h1>Cupcake of the Day</h1>
      <p>Tastes so good!</p>
      <Button
        to="../Cakes"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary="true"
        dark="true"
      >
        Order Now
      </Button>
    </FeatureCupcakeContainer>
  );
};

export default FeatureCupcake;
