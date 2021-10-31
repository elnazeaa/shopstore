import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { SingleProductContext } from "../../contexts/SingleProductContext";

const ShopNavIcon = (props) => {
  const { totalNumber } = useContext(SingleProductContext);
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link className="cart-btn" to="/cart">
        Cart
        <span className="cart-container">
          <FiShoppingCart />
          <span className="cart-value">{totalNumber}</span>
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: grey;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: #f4ae3f;
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -17px;
    right: -18px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.3rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default ShopNavIcon;
