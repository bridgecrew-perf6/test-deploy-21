import React, { FC } from "react";
import Layout from "../components/Layout";
import SubCategories from "../components/Carousel/SubCategories";
import Container from "../components/Container";
import { RouteComponentProps } from "@reach/router";

const Category: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Container>
        <SubCategories />
      </Container>
    </Layout>
  );
};

export default Category;
