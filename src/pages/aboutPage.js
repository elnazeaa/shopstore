import React from "react";
import styled from "styled-components";
import handShake from "../images/about/handshake.jpg";

const AboutPage = (props) => {
  return (
    <Wrapper>
      <div className="header">
        <div className="left">
          <div className="title">
            <h3>Our Mission</h3>
            <hr className="title-line" />
          </div>
          <p className="content">
            Partnering with members to <br />
            SHARE resources, GROW their business, and <br />
            INSPIRE design.
          </p>
        </div>
        <div className="right">
          <div className="title">
            <h3>Our Vision</h3>
            <hr className="title-line" />
          </div>
          <p className="content">
            To be the most utilized home staging ecosystem within every real
            estate community.
          </p>
        </div>
      </div>
      <div className="designContainer">
        <div className="imgClass">
          <img src={handShake} alt="handShake" />
        </div>
        <div className="contentSection">
          <h5>Share. Grow. Inspire.</h5>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            et soluta eveniet autem ad animi, quisquam cum, maxime, doloribus
            doloremque illo nisi tenetur sapiente unde dolor officia ullam nobis
            labore!
          </p>
          <p className="biggerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            repellat! Sed soluta id animi iste saepe neque inventore ex, esse
            sint amet aspernatur perspiciatis necessitatibus libero architecto
            ut, ullam atque?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Labore, possimus vitae. Reprehenderit mollitia nam nobis,
            tenetur atque sed quos cupiditate. Numquam vitae esse temporibus, ea
            nam provident unde accusamus incidunt?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id obcaecati earum quam quae officia
            praesentium quibusdam voluptatibus quia laboriosam. Tenetur cum odio
            delectus modi. Rerum ut tenetur ipsum est nihil.lorem
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  background: #fff;
  width: 100%;
  padding: 10px 5% 70px;
  .title-line {
    width: 100px;
    margin: 25px auto 50px auto;
    border: solid #f4ae3f 1px;
  }
  .header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
  @media (max-width: 650px) {
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
  .designContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .imgClass {
    margin: 0px 12px 0 0;
  }
  .imgClass img {
    width: 450px;
    max-width: 450px;
    min-width: 538px;
    height: 328px;
    object-fit: cover;
    object-position: bottom;
  }
  .contentSection {
    width: 40%;
  }
  @media (max-width: 900px) and (min-width: 600px) {
    .contentSection {
      width: 90%;
    }
  }
  @media (max-width: 599px) and (min-width: 200px) {
    .contentSection {
      width: 95%;
    }
    .imgClass {
      margin: 1rem;
    }
    .imgClass img {
      max-width: 298px;
      min-width: 256px;
      height: 210px;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;

export default AboutPage;
