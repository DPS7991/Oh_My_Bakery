import React, { useState } from "react";
import { FeatureCakeContainer } from "../FeatureCake/FeatureCakeElements";
import { Button } from "../ButtonElements";

const FeatureCake = () => {
  const [hover, sethover] = useState(false);
  const onHover = () => {
    sethover(!hover);
  };
  return (
    <FeatureCakeContainer>
      <h1>Cake of the Day</h1>
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
    </FeatureCakeContainer>
  );
};

export default FeatureCake;
