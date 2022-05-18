import React, { FC } from "react";
import ArticleHeader from "../components/Common/ArticleHeader";
import BreadCrumbs from "../components/Common/BreadCrumbs";
import FeaturedArticleCard from "../components/Common/Cards/FeaturedArticleCard";
import SearchAndFilter from "../components/Common/SearchAndFilter";
import ArticleResults from "../components/Common/ArticleResults";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Discussion from "../components/Carousel/Discussion";
import NewsLetter from "../components/HomePage/NewsLetter";
import GetSocial from "../components/HomePage/GetSocial";
import SocialStatistics from "../components/HomePage/SocialStatistics";
import { RouteComponentProps } from "@reach/router";

const breadCrumbItems = [
  {
    name: "Get info",
    url: "#",
  },
  {
    name: "Money",
    url: "#",
  },
  {
    name: "Currency",
    url: "#",
  },
  {
    name: "Other",
    url: "#",
  },
];

const ListingsPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <ArticleHeader title="Money Articles" />
      <Container>
        <BreadCrumbs homeUrl="#" breadCrumbItems={breadCrumbItems} />
        <FeaturedArticleCard />
        <section className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-8 mb-4 md:mb-0">
          <div className="w-full md:w-[35%]">
            <SearchAndFilter />
          </div>
          <div className="w-full">
            <ArticleResults />
          </div>
        </section>
        <section className="py-10">
          <Discussion />
        </section>
      </Container>
      <section>
        <NewsLetter />
      </section>
      <Container>
        <GetSocial />
        <SocialStatistics />
      </Container>
    </Layout>
  );
};

export default ListingsPage;
