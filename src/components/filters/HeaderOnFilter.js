import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
import { FilterContext } from "../../contexts/FilterContext";

const HeaderOnFilter = (props) => {
  const { all_products, handleGrid, handleList, gridView, handleSortOptions } =
    useContext(FilterContext);
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={() => {
            handleGrid("grid");
          }}
          className={gridView ? "active" : ""}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => {
            handleList("list");
          }}
          className={!gridView ? "active" : ""}
        >
          <HiViewList />
        </button>
      </div>
      <p>{all_products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={handleSortOptions}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid #000;
      color: #f4ae3f;
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: #000 !important;
      color: #f4ae3f !important;
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
export default HeaderOnFilter;
