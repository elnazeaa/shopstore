import React, { useState } from "react";
import styled from "styled-components";

const Slide = ({ images = [""] }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (num) => {
    console.log(num, index);
    setIndex((oldIndx) => {
      return (oldIndx = num);
    });
  };

  return (
    <Wrapper>
      <img src={images[index].url} alt="logo" className="main" />
      <div className="gallery">
        {images.map((item, num) => {
          return (
            <img
              src={item.url}
              alt="furniture"
              key={num + 1}
              onClick={() => handleClick(num)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default Slide;
