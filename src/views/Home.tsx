import React, { FC } from "react";
import OurPartners from "../components/Carousel/OurPartners";
import TopCarousel from "../components/Carousel/TopCarousel";
import Statistics from "../components/Carousel/Statistics";
import GetSocial from "../components/HomePage/GetSocial";
import SocialStatistics from "../components/HomePage/SocialStatistics";
import WhatWeDo from "../components/HomePage/WhatWeDo";
import Layout from "../components/Layout";
import Services from "../components/HomePage/Services";
import JoinOurCommunity from "../components/HomePage/JoinOurCommunity";
import Volunteer from "../components/HomePage/Volunteer";
import FindAdvice from "../components/HomePage/FindAdvice";
import NewsLetter from "../components/HomePage/NewsLetter";
import { RouteComponentProps } from "@reach/router";

// markup
const Home: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <TopCarousel />
      <Services />
      <FindAdvice />
      <JoinOurCommunity />
      <Volunteer />
      <WhatWeDo />
      <OurPartners />
      <Statistics />
      <NewsLetter />
      <GetSocial />
      <SocialStatistics />
    </Layout>
  );
};

export default Home;
