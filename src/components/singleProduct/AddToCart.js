import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AmountBtn } from "../../components/index";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { SingleProductContext } from "../../contexts/SingleProductContext";

const AddToCart = ({ singleProduct }) => {
  let {
    id,
    stock,
    price,
    featured,
    colors,
    category,
    images,
    reviews,
    stars,
    name,
    description,
    company,
  } = singleProduct;

  const { addItemsToCartPage } = useContext(SingleProductContext);

  const [number, setNumber] = useState(1);
  let [keepColor, setKeepColor] = useState(colors[0]);

  const handleColor = (item) => {
    setKeepColor((oldColor) => {
      return (keepColor = item);
    });
  };

  const handleDecrease = () => {
    setNumber((oldIndex) => {
      if (oldIndex <= 1) {
        return 1;
      }
      return oldIndex - 1;
    });
  };

  const handleIncrease = () => {
    setNumber((oldNumber) => {
      if (oldNumber >= stock) {
        return stock;
      }
      return oldNumber + 1;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.length !== 0 &&
            colors.map((item, index) => {
              return (
                <button
                  className={`color-btn ${item === keepColor ? "active" : ""}`}
                  style={{ backgroundColor: item }}
                  key={index}
                  onClick={() => {
                    handleColor(item);
                  }}
                >
                  {item === keepColor ? (
                    <FaCheck style={{ color: "#fff" }} />
                  ) : (
                    ""
                  )}
                </button>
              );
            })}
        </div>
      </div>
      <div className="btn-container">
        {stock === 0 ? (
          ""
        ) : (
          <AmountBtn
            number={number}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        )}

        <Link
          to="/cart"
          className="btn"
          onClick={() => {
            addItemsToCartPage(
              number,
              keepColor,
              id,
              name,
              price,
              stock,
              images[0].url
            );
          }}
        >
          Add To Cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
