import React, { useState } from "react";
import styled from "styled-components";
import { items } from "../../utils/infos";
import stars from "../../images/slide/stars.png";

const ClientsSlider = (props) => {
  const [slide, setSlide] = useState(items);
  const [index, setIndex] = useState(0);
  const btns = [0, 1, 2, 3];
  console.log(index);
  return (
    <Wrapper className="cont">
      <section className="section">
        <div className="title">
          <h2>What Members are Saying</h2>
        </div>
        <div className="section-center">
          <article>
            <img src={stars} alt="stars" className="star" />
            <h4>{slide[index].name}</h4>
            <p className="text">{slide[index].text}</p>
          </article>
          <div className="btns">
            {btns.map((btn, id) => {
              return (
                <button
                  key={id}
                  onClick={() => setIndex(id)}
                  className={`${id === index ? "active" : ""}`}
                ></button>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
  .star {
    width: 150px;
    margin: 1rem;
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  article {
    height: 17rem;
  }

  article h4 {
    text-transform: uppercase;
    color: hsl(42deg 100% 50%);
    margin-bottom: 0.25rem;
  }

  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
  }

  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
  }

  @media (max-width: 550px) {
    article {
      height: 23rem;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
  }
  .btns button {
    width: 14px;
    height: 14px;
    border-radius: 20px;
    background: #323720;
    margin: 0 4px;
    border: none;
    cursor: pointer !important;
    transtion: all 1.2s ease;
  }
  .active {
    background: #f4ae3f !important;
  }
`;

export default ClientsSlider;
