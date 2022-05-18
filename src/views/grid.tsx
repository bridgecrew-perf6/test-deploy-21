import React, { FC } from "react";

import Layout from "../components/Layout";
import Grid from "../components/Grid";
import { RouteComponentProps } from "@reach/router";

const GridPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Grid />
    </Layout>
  );
};

export default GridPage;
