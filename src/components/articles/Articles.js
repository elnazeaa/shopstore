import React, { useContext } from "react";
import styled from "styled-components";
import { ArticleContext } from "../../contexts/ArticleContext";
import SingleArticle from "./SingleArticle";

// Article Component
const Article = (props) => {
  const { news } = useContext(ArticleContext);
  return (
    <Wrapper className="articleContainer">
      {news.map((item) => {
        return <SingleArticle key={item.id} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default Article;
