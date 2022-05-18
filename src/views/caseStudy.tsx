import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import AuthLayout from "../components/Layout/AuthLayout";
import LoginForm from "../components/Forms/LoginForm";
import RelatedContent from "../components/RelatedContent";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { fetchCaseStudies } from "../state/caseStudies";

const CaseStudy = ({ pageContext: { caseStudy } }) => {
  console.log("Result is: ", caseStudy);
  return (
    <Layout>
      <Container>
        <PageHeader
          title={caseStudy.title.rendered}
          image={caseStudy.featured_media_url}
          loading={false}
          excerpt={caseStudy.excerpt.rendered}
        />
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-8">
          <div className="w-full lg:w-2/3">
            <div>
              <div className="font-bold text-[30px] py-6">
                {caseStudy.title.rendered || ""}
              </div>
              <ReactMarkdown>{caseStudy.content.rendered || ""}</ReactMarkdown>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <RelatedContent title={caseStudy.title.rendered || ""} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CaseStudy;
