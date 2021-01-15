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
import { CartContext } from "../../App";

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
          {data.map((product, index) => (
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
                  onClick={() => {
                    const item = cartContext.cartItems.find(
                      (item) => item.name === product.name
                    );
                    if (!item) {
                      cartContext.updateCart([
                        ...cartContext.cartItems,
                        { ...product, quantity: 1 },
                      ]);
                    } else {
                      cartContext.updateCart([
                        ...cartContext.cartItems.filter(
                          (item) => item.name !== product.name
                        ),
                        { ...product, quantity: item.quantity + 1 },
                      ]);
                    }
                  } }
                >
                  {product.button}
                </Button>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default ProductsOne;
