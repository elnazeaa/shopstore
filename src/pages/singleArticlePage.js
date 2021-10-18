import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const SingleArticlePage = (props) => {
  const [news, setNews] = useState("");
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { id } = useParams();
  const singleNews = async () => {
    const response = await fetch(`${url}/${id}`);
    const res = await response.json();
    setNews(res);
  };
  useEffect(() => {
    singleNews();
  }, []);
  return (
    <Wrapper>
      <h2 className="title">{news.title}</h2>
      <p className="content">{news.body}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 71.5vh;
  .title {
    color: #323720;
  }
  .content {
    font-size: 21px;
  }
`;

export default SingleArticlePage;
