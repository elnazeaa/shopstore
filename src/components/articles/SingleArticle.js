import React from "react";
import styled from "styled-components";
import { TiNews } from "react-icons/ti";
import { Link } from "react-router-dom";

const SingleArticle = ({ item }) => {
  return (
    <Wrapper>
      <div className="icon">
        <TiNews />
      </div>
      <h4 className="title">{item.title.slice(0, 20)}...</h4>
      <p className="content">{item.body.slice(0, 50)}...</p>
      <Link className="btn" to={`/posts/${item.id}`}>
        read...
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  margin: 10px;
  min-height: 270px;
  height: 325px;
  border-radius: 5px;
  background: #323720;
  border: 2px solid #f4ae3f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .icon {
    font-size: 3rem;
    color: #f4ae3f;
  }
  .title {
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.7;
  }
  .content {
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    min-height: 107px;
    margin: 0 10px;
  }
  .btn {
    background: #f4ae3f;
    color: #323720;
    font-size: 15px;
    margin: 0 0 10px 0;
  }
`;

export default SingleArticle;
