import React, { useContext } from "react";
import styled from "styled-components";
import { CartItems, TotalPay } from "../components";
import Table from "../components/singleProduct/Table";
import { SingleProductContext } from "../contexts/SingleProductContext";

const CartPage = (props) => {
  const { singlePrForCartPage } = useContext(SingleProductContext);
  return (
    <Wrapper className="section section-center">
      <Table />
      <CartItems />
      {singlePrForCartPage.length !== 0 ? <TotalPay /> : ""}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
