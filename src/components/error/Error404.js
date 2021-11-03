import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = (props) => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link class="btn" to="/ecommerce-react-context">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #f4ae3f;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  h1 {
    color: #323720;
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    color: #323720;
  }
  .btn {
    text-transform: uppercase;
    background: #323720;
    color: #f4ae3f;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    font-weight: 400;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: 0.25rem;
    border-color: transparent;
  }
`;

export default Error;
