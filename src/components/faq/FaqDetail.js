import React, { useState } from "react";
import styled from "styled-components";
import { OneFaq } from "../index";

const FaqDetail = ({ faq }) => {
  return (
    <Wrapper className="info">
      <h3>{faq.page}</h3>
      {faq.links.map((link) => {
        return <OneFaq key={link.id} link={link} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    margin: 2rem 0;
    color: #323720;
  }
`;

export default FaqDetail;
