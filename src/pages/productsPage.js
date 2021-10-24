import React, { useContext } from "react";
import styled from "styled-components";
import {
  Sort,
  AsideFilterSection,
  GridView,
  ListView,
} from "../components/index";
import { FilterContext } from "../contexts/FilterContext";

const ProductsPage = (props) => {
  const { gridView } = useContext(FilterContext);
  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          <AsideFilterSection />
          <div>
            <Sort />
            {gridView ? <GridView /> : <ListView />}
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
