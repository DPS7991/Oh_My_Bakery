import React, { useState, useContext } from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
} from "./ProductsElements";
import { Button } from "../ButtonElements";
import { CartContext } from "../../pages/index";

const ProductsOne = ({ heading, data }) => {
  const [hover, sethover] = useState(false);
  const cartContext = useContext(CartContext);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <div>
      <ProductsContainer id="cakes">
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <Button
                    to="../Cakes"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    onClick={() => cartContext.updateCart([...cartContext.cartItems, product])}
                  >
                    {product.button}
                  </Button>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default ProductsOne;
