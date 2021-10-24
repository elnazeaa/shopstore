import React, { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import styled from "styled-components";
import { FeaturePr } from "../../components/index";

// Grid View
const GridView = (props) => {
  const { filterProducts } = useContext(FilterContext);
  if (filterProducts.length === 0) {
    return <p>There is no result</p>;
  }
  return (
    <Wrapper>
      <div className="products-container">
        {filterProducts.map((featurePr) => {
          return <FeaturePr key={featurePr.id} featurePr={featurePr} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
