import React from "react";
import { Furnish, Header, Services, ClientsSlider } from "../components/index";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <Furnish />
      <Services />
      <ClientsSlider />
    </>
  );
};

export default HomePage;
