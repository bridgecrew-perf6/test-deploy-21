// Because we used ts-node in gatsby-config.js, this file will automatically be
// imported by Gatsby instead of gatsby-node.js.

// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import axios from "axios";
import slugify from "react-slugify";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  try {
    const { createPage } = actions;

    const caseStudies = await axios.get(
      `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/case-studies`,
      {
        headers: {
          "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
        },
      }
    );

    const caseStudiesData = caseStudies.data.results;

    createPage({
      path: `/case-studies`,
      component: resolve(__dirname, "./src/views/caseStudies.tsx"),
      context: { caseStudiesData },
    });

    caseStudiesData.forEach((caseStudy) => {
      createPage({
        path: `/case-study/${slugify(caseStudy.title.rendered)}/`,
        component: require.resolve("./src/views/caseStudy.tsx"),
        context: { caseStudy },
      });
    });
  } catch (err) {
    console.log("Error creating pages: ", err);
  }
};
