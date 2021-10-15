import React from "react";
import styled from "styled-components";
import headerImg from "../../images/header/01.png";
import Background from "../../images/header/room.jpg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Wrapper
      className="container"
      style={{
        background: `url(${Background})`,
      }}
    >
      <div className="leftContainer">
        <h1>
          Turn listed houses into <br />
          high-value homes
        </h1>
        <div className="underline"></div>
        <p>Over 14,000 unique furnishings for sale </p>
        <Link to="/products" className="btn">
          Start Shopping
        </Link>
      </div>
      <div className="rightContianer">
        <img src={headerImg} className="img" alt="nice header furniture" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 65vh;
  overflow: hidden;
  position: relative;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center bottom !important;
  .rightContianer {
    width: 60%;
  }
  .img {
    position: absolute;
    width: 61%;
    bottom: 0px;
    right: 0;
  }
  .leftContainer {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: -0.6px;
    letter-spacing: 3px;
    animation: imageDown 1.5s ease-in-out;
  }
  .underline {
    width: 0;
    margin: auto;
    height: 4px;
    background-color: #f4ae3f;
    margin: 20px auto;
    opacity: 0;
    animation: grow 1s forwards;
    animation-delay: 1s;
  }
  p {
    font-size: 14px;
    color: #fff;
    line-height: 18px;
    font-weight: 300;
  }
  .btn {
    background-color: #323720;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1;
    color: #fff;
    padding: 15px 50px 15px 25px;
    cursor: pointer;
    opacity: 0;
    animation: imageUp 1.5s forwards;
    animation-delay: 1.5s;
  }
  @keyframes imageUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes grow {
    0% {
      width: 0;
    }
    100% {
      opacity: 1;
      width: 70%;
    }
  }
  @keyframes imageDown {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    .leftContainer {
      width: 50% !important;
    }
    .rightContianer {
      width: 50% !important;
    }
    .img {
      position: absolute;
      width: 60%;
      top: 0px;
      right: -15px;
    }
  }
  @media (max-width: 750px) and (min-width: 240px) {
    .leftContainer {
      width: 100% !important;
    }
    .rightContianer {
      width: 100% !important;
      display: none;
    }
  }
`;

export default Header;
