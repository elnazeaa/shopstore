import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const OneFaq = ({ link }) => {
  const [openBtn, setOpenBtn] = useState(true);
  return (
    <Wrapper className="question">
      <header>
        <h4>{link.question}</h4>
        <button
          onClick={() => {
            setOpenBtn(!openBtn);
          }}
          className={`${openBtn ? "btn active" : "btn"}`}
        >
          {openBtn ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {openBtn ? "" : <p className="txt">{link.answer}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .txt {
    transition: all 1s ease;
  }
  h4 {
    text-transform: none;
    line-height: 1.5;
  }

  p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header h4 {
    margin-bottom: 0;
  }

  .btn {
    background: transparent;
    border-color: transparent;
    width: 3rem;
    height: 3rem;
    background: #323720;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f4ae3f;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
`;

export default OneFaq;
