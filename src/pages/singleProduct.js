import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SingleProductContext } from "../contexts/SingleProductContext";
import { Content, Loading, Slide } from "../components/index";

const SingleProduct = (props) => {
  const { singleProduct, loading } = useContext(SingleProductContext);
  const { id } = useParams();
  const { getSinglePrId } = useContext(SingleProductContext);
  useEffect(() => {
    getSinglePrId(id);
  }, [id]);
  const { images } = singleProduct;
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <Slide images={images} />
          <Content singleProduct={singleProduct} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
