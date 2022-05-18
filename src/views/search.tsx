import React, { FC } from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import SearchAndFilter from "../components/Common/SearchAndFilter";
import SearchResults from "../components/Common/SearchAndFilter/SearchResults";
import { RouteComponentProps } from "@reach/router";

const SearchPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Container>
        <section className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-8 mb-4 md:mb-0">
          <div className="w-full md:w-[35%]">
            <SearchAndFilter />
          </div>
          <div className="w-full">
            <SearchResults />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default SearchPage;
