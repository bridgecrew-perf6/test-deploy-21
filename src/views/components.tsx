import React, { FC } from "react";
import Container from "../components/Container";
import FAQsPage from "../components/FAQs";
import MoneyManagement from "../components/MoneyManagement";
import Layout from "../components/Layout";
import Discussion from "../components/Carousel/Discussion";
import Quote from "../components/Carousel/Quote";
import Prison from "../components/Prison";
import FeaturedPerson from "../components/FeaturedPerson";
import SubCategories from "../components/Carousel/SubCategories";
import UsefulResources from "../components/UsefulResources";
import Icons from "../components/Icons";
import StaffListingsComponent from "../components/StaffListing/list";
import VolunteeringListComponent from "../components/Volunteering/list";
import DownloadDocumentDisplayComponent from "../components/DownloadDocument/list";
import { RouteComponentProps } from "@reach/router";

const ComponentsPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Container>
        <Discussion />
        <Quote />
        <FeaturedPerson />
        <SubCategories />
        <UsefulResources />
        <Icons />
        <FAQsPage />
        <MoneyManagement />
        <Prison />
        <StaffListingsComponent />
        <VolunteeringListComponent />
        <DownloadDocumentDisplayComponent />
      </Container>
    </Layout>
  );
};

export default ComponentsPage;
