import React, { useContext } from "react";
import styled from "styled-components";
import { FaqContext } from "../../contexts/FaqContext";
import FaqDetail from "./FaqDetail";

// Map All Faqs and send All to FaqDetail to show
const Faq = (props) => {
  const { faqs } = useContext(FaqContext);
  return (
    <Wrapper className="container">
      {faqs.map((faq, index) => {
        return <FaqDetail key={index} faq={faq} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: 5rem auto;
  border-radius: 0.25rem;
  max-width: 1170px;
  display: grid;
  gap: 1rem 2rem;
`;

export default Faq;
