import React from "react";
import styled from "styled-components";
import logo from "../../images/logo/logo.png";
import {
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <Wrapper>
      <div className="header">
        <img src={logo} alt="header logo" className="logo" />
        <ul className="social">
          <li className="icon">
            <FaPinterestP />
          </li>
          <li className="icon">
            <FaYoutube />
          </li>
          <li className="icon">
            <FaLinkedinIn />
          </li>
          <li className="icon">
            <FaFacebookF />
          </li>
          <li className="icon">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f4ae3f;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #323720;
    padding: 1rem 0;
  }
  .logo {
    width: 90px;
  }
  .social {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    background: #f4ae3f;
    color: #181313;
    margin: 3px;
    padding: 10px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default Footer;
