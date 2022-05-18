import React, { FC } from "react";
import { Router, RouteComponentProps } from "@reach/router";

// routes
import Content from "../components/Layout/Content";
import Category from "../components/Layout/Category";
import SubCategory from "../components/Layout/SubCategory";
import Articles from "../views/articles";
import Listings from "../views/listings";
import Article from "../views/article";
import Home from "../views/Home";
import SignUp from "../views/signup";
import Components from "../views/components";
import ContactUs from "../views/contact-us";
import CookiesPolicy from "../views/cookies-policy";
import Grid from "../views/grid";

import Listing from "../views/listing";

import LogIn from "../views/login";
import Search from "../views/search";

const App: FC = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <Article path="/article/:articleSlug" />
        <Category path=":categorySlug" />
        <SubCategory path=":categorySlug/:subCategorySlug" />
        <Listings path="/listings" />
        <SignUp path="/signup" />
        <Content path=":categorySlug/:subCategorySlug/:contentSlug" />
        <Components path="/components" />
        <ContactUs path="/contact-us" />
        <CookiesPolicy path="/cookies-policy" />
        <Grid path="/grid" />
        <Listing path="/listing" />
        <LogIn path="/login" />

        <Search path="/search" />
      </Router>
    </>
  );
};

export default App;
