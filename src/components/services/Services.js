import React from "react";
import styled from "styled-components";
import { services } from "../../utils/infos";

const Services = (props) => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Furniture
            <br />
            Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            return (
              <article className="service" key={service.id}>
                <span className="icon">{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: #fff;
  }
  padding: 5rem 0;

  background: #f4ae3f;

  .header h3 {
    margin-bottom: 2rem;
    color: #323720;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: #323720;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #323720;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: #fff;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #f4ae3f;
    color: #323720;
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
