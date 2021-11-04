import React, { useContext } from "react";
import styled from "styled-components";
import { SingleProductContext } from "../../contexts/SingleProductContext";
import formatNumberToPrice from "../../utils/helper";

const TotalPay = (props) => {
  const { subTotal, shipping } = useContext(SingleProductContext);
  return (
    <Wrapper>
      <div>
        <article>
          <h5>subtotal : {formatNumberToPrice(subTotal)}</h5>
          <p>
            shipping fee : <span>{formatNumberToPrice(shipping)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatNumberToPrice(subTotal + shipping)}</span>
          </h4>
        </article>
        <button className="btn">Login</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;
export default TotalPay;
