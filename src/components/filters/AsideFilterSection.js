import React, { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import styled from "styled-components";
import formatNumberToPrice from "../../utils/helper";

// Aside Component for Filter
const AsideFilterSection = (props) => {
  const {
    all_products,
    getFilterValues,
    clearFilters,
    filters: { text, category, price, max_price, min_price },
  } = useContext(FilterContext);

  // filter to avoid repeating values
  // Filter Products
  const onlyCategories = [
    "all",
    ...new Set(all_products.map((item) => item.category)),
  ];

  const onlyCompanies = [
    "all",
    ...new Set(all_products.map((item) => item.company)),
  ];

  const onlyColors = [
    "all",
    ...new Set(all_products.map((item) => item.colors).flat()),
  ];

  // content
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="Search..."
              value={text}
              onChange={getFilterValues}
            />
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {onlyCategories.map((item, index) => {
                return (
                  <button
                    type="button"
                    name="category"
                    key={index}
                    className={item === category ? "active" : ""}
                    value={category}
                    onClick={getFilterValues}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Company</h5>
            <select
              name="company"
              className="company"
              onClick={getFilterValues}
            >
              {onlyCompanies.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {onlyColors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      type="button"
                      name="color"
                      data-color="all"
                      className="all-btn"
                      key={index}
                      onClick={getFilterValues}
                    >
                      {col}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="color"
                    name="color"
                    data-color={col}
                    style={{ backgroundColor: col }}
                    className="color-btn"
                    onClick={getFilterValues}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatNumberToPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={getFilterValues}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={getFilterValues}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: #f4ae3f;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default AsideFilterSection;
