import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, SideBar, Footer } from "./components/index";
import {
  HomePage,
  AboutPage,
  Products,
  FaqPage,
  ArticlePage,
} from "./pages/index";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <SideBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
        <Route path="/articles">
          <ArticlePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
