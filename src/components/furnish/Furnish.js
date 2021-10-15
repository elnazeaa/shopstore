import React from "react";
import styled from "styled-components";
import furniture from "../../images/furniture/furniture.png";
import { Link } from "react-router-dom";

const Furnish = (props) => {
  return (
    <Wrapper className="container">
      <div className="imgSec">
        <img src={furniture} alt="Great Furniture" />
      </div>
      <div className="content">
        <h4 className="title">Buy Fine Furnishings</h4>
        <p className="cont">
          Our inventory has been curated by stagers, designers, realtors, and
          builders. From transitional to modern to one-of-a-kind, you’ll find
          the style, scale, and price point to suit your project, perfectly.
        </p>
        <Link to="/products" className="btn">
          BYU NOW
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1500px;
  margin: 1rem auto;
  .imgSec {
    padding: 10px;
  }
  .content {
    padding: 10px;
  }
  .cont {
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 1px;
  }
  .btn {
    background-color: #323720;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1;
    color: #fff;
    padding: 15px 25px 15px 25px;
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 1500px) {
    flex-wrap: wrap;
    width: 70%;
    img {
      width: 97%;
    }
  }
`;

export default Furnish;
