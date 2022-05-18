import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import slugify from "react-slugify";

const CaseStudies = ({ pageContext: { caseStudiesData } }) => {
  return (
    <Layout>
      <div className="blue-banner-bg flex items-center">
        <Container>
          <h2 className="mt-10 text-white">Case Studies</h2>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-8">
          <div className="w-full lg:w-2/3">
            {caseStudiesData && caseStudiesData.length ? (
              caseStudiesData.map(({ title, excerpt }) => {
                const slug = slugify(title.rendered);
                return (
                  <Link to={`/case-study/${slug}`} className="py-4">
                    <h1 className="cursor-pointer">{title.rendered}</h1>
                    <p>{excerpt.rendered}</p>
                  </Link>
                );
              })
            ) : (
              <p>No articles found</p>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CaseStudies;
