import React, { FC, useEffect } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { parse } from "query-string";

import Container from "../components/Container";
import Layout from "../components/Layout";
import ArticleHeader from "../components/Common/ArticleHeader";
import SearchAndFilter from "../components/Common/SearchAndFilter";
import ArticleResults from "../components/Common/ArticleResults";
import { useDispatch } from "react-redux";
import { fetchAllArticles } from "../state/articles";
import { updatTypeOfCategoryFromNavigation } from "../state/search";
import ListingsResults from "../components/Common/ListingsResults";

const Listings: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const searchParams = parse(location.search);

  console.log("SEARCH PARAMS: ", searchParams);

  useEffect(() => {
    dispatch(fetchAllArticles());
    dispatch(updatTypeOfCategoryFromNavigation(searchParams));
  }, []);

  return (
    <Layout>
      <ArticleHeader title="Listing" />
      <Container>
        <section className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-8 mb-4 md:mb-0">
          <div className="w-full md:w-[35%]">
            <SearchAndFilter />
          </div>
          <div className="w-full">
            <ListingsResults />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Listings;
