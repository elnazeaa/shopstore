import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo/logo.png";
import { navLinks } from "../../utils/infos";
import { FaBars } from "react-icons/fa";
import { NavContextApi } from "../../contexts/NavContextApi";
import { ShopNavIcon } from "../../components/index";

const Navbar = (props) => {
  const { handleClick } = useContext(NavContextApi);

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Modern Furniture and design" />
          </Link>
          <button className="nav-toggle" type="button" onClick={handleClick}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {navLinks.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <ShopNavIcon />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: #323720;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -5px 1px 5px #191919;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 134px;
      margin-left: 5px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #f4ae3f;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      ${
        "" /* display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center; */
      }
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #f4ae3f;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition: all 1s ease-in-out;
        &:hover {
          border-bottom: 1px solid #f4ae3f;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
