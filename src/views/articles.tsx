import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";

import Container from "../components/Container";
import Layout from "../components/Layout";
import ArticleHeader from "../components/Common/ArticleHeader";
import SearchAndFilter from "../components/Common/SearchAndFilter";
import ArticleResults from "../components/Common/ArticleResults";
import { useDispatch } from "react-redux";
import { fetchAllArticles, fetchArticles } from "../state/articles";

const Articles: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, []);

  return (
    <Layout>
      <ArticleHeader title="Articles" />
      <Container>
        <section className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-8 mb-4 md:mb-0">
          <div className="w-full md:w-[35%]">
            <SearchAndFilter />
          </div>
          <div className="w-full">
            <ArticleResults />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Articles;
