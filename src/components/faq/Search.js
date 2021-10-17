import React, { useContext } from "react";
import styled from "styled-components";
import { FaqContext } from "../../contexts/FaqContext";

const Search = (props) => {
  const { searchTerm, handleSearchTerm, searchFaqAndFilterTerm } =
    useContext(FaqContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFaqAndFilterTerm();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>Search FAQs : </label>
        <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Search;
