import React, { useContext } from "react";
import styled from "styled-components";
import { SingleProductContext } from "../../contexts/SingleProductContext";
import { CartDetails } from "../../components/index";
import { Link } from "react-router-dom";

const CartItems = (props) => {
  const { singlePrForCartPage, clearShoppingCart } =
    useContext(SingleProductContext);

  if (singlePrForCartPage.length === 0) {
    return (
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link className="btn" to="/products">
          fill it
        </Link>
      </div>
    );
  }

  return (
    <Wrapper>
      {singlePrForCartPage.map((product) => {
        return <CartDetails key={product.idPr} product={product} />;
      })}
      <hr />
      <div className="link-container">
        <Link className="link-btn btn" to="/products">
          continue shopping
        </Link>
        <button
          type="button"
          className="clear-btn clear"
          onClick={clearShoppingCart}
        >
          clear shopping cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25 rem 0.5 rem;
    background: #f4ae3f;
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  .clear {
    text-transform: uppercase;
    background: #323720;
    color: #fff;
    padding: 0.375 rem 0.75 rem;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: var(--radius);
    border-color: transparent;
    font-family: "Zilla Slab", serif !important;
  }
`;

export default CartItems;
