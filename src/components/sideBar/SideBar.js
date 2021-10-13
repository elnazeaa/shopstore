import React, { useContext } from "react";
import styled from "styled-components";
import { navLinks } from "../../utils/infos";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import { NavContextApi } from "../../contexts/NavContextApi";

const SideBar = (props) => {
  const { openSide, handleClose } = useContext(NavContextApi);
  return (
    <Wrapper>
      <aside className={`sidebar ${openSide ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="modern furniture and design" />
          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {navLinks.map((item) => {
            return (
              <li key={item.id} onClick={handleClose}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #f4ae3f;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #323720;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
