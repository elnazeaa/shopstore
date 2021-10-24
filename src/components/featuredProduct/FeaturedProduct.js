import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../../contexts/Products";
import FeaturePr from "./FeaturePr";
import { Loading } from "../../components/index";
import { Link } from "react-router-dom";

const FeaturedProduct = (props) => {
  const { featurePrducts, loading } = useContext(ProductContext);

  //If loading is true then loader starts spinnig
  if (loading) {
    return (
      <Wrapper className="section">
        <div className="title">
          <h2>featured products</h2>
          <hr className="underline" />
        </div>
        <Loading />
      </Wrapper>
    );
  }
  // if Loader is false
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <hr className="underline" />
      </div>
      <div className="section-center featured">
        {featurePrducts.map((featurePr) => {
          return <FeaturePr key={featurePr.id} featurePr={featurePr} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .title {
    text-align: center;
  }
  .underline {
    width: 100px;
    margin: 25px auto 50px auto;
    border: solid #f4ae3f 1px;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProduct;
