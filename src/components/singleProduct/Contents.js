import React from "react";
import styled from "styled-components";
import Stars from "../../components/singleProduct/Stars";
import formatNumberToPrice from "../../utils/helper";
import AddToCart from "./AddToCart";

const Content = ({ singleProduct }) => {
  const {
    stock,
    price,
    colors,
    category,
    name,
    description,
    company,
    shipping,
  } = singleProduct;
  return (
    <Wrapper className="content">
      <h2>{name}</h2>
      <Stars />
      <h5 className="price">{formatNumberToPrice(price)}</h5>
      <p className="desc">{description}</p>
      <p className="info">
        <span>Available : </span>
        {stock <= 0 ? "Out of Stock" : "In Stock"}
      </p>
      <p className="info">
        <span>Brand</span>
        {company}
      </p>
      <p className="info">
        <span>Category : </span>
        {category}
      </p>
      <p className="info">
        <span>Shipping : </span>
        {shipping ? "Free Shipping" : "Not Free"}
      </p>
      <hr />
      <AddToCart singleProduct={singleProduct} colors={colors} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Content;
