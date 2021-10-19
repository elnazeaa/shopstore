import React from "react";
import {
  Furnish,
  Header,
  Services,
  ClientsSlider,
  FeaturedProduct,
} from "../components/index";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <Furnish />
      <FeaturedProduct />
      <Services />
      <ClientsSlider />
    </>
  );
};

export default HomePage;
