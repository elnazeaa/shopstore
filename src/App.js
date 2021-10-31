import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, SideBar, Footer } from "./components/index";
import {
  HomePage,
  AboutPage,
  ProductsPage,
  FaqPage,
  ArticlePage,
  Error,
  SingleProduct,
  SingleArticlePage,
  CartPage,
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
          <ProductsPage />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
        <Route path="/articles">
          <ArticlePage />
        </Route>
        <Route path="/posts/:id">
          <SingleArticlePage />
        </Route>
        <Route path="/product/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
