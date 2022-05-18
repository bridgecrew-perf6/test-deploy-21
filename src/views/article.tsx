import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";

import Container from "../components/Container";
import Layout from "../components/Layout";
import RelatedContent from "../components/RelatedContent";
import PageHeader from "../components/PageHeader";
import ReactMarkdown from "react-markdown";
import YouTubePlaylist from "../components/YouTubePlaylist";
import VideoComponent from "../components/VideoComponent";
import Feedback from "../components/Feedback";
import { CgHome } from "@react-icons/all-files/cg/CgHome";
import UnderlineLink from "../components/Links/UnderlineLink";
import slugify from "react-slugify";
import Share from "../components/Share";
import remarkGfm from "remark-gfm";
import * as styles from "./views.module.css";
import FeaturedPerson from "../components/FeaturedPerson";
import NextSteps from "../components/Common/NextSteps";
import UnderLineHeading from "../components/Common/Headings/UnderLineHeading";
import Discussion from "../components/Carousel/Discussion";
import NewsletterForm from "../components/Forms/NewsletterForm";
import GetSocial from "../components/HomePage/GetSocial";
import SocialStatistics from "../components/HomePage/SocialStatistics";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../state/articles";
import BreadCrumbs from "../components/Common/BreadCrumbs";
import VanillaComments from "../components/Vanillacomments";

interface IArticleProps {
  articleSlug: string;
}

const Article: FC<RouteComponentProps<IArticleProps>> = ({ articleSlug }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleArticle(articleSlug.split("-").join(" ")));
  }, [dispatch]);

  const {
    articles: { singleArticleLoading, singleArticleData },
  } = useSelector((state: any) => state);

  const title = singleArticleData.title.rendered;
  const excerpt = singleArticleData.excerpt.rendered;
  const imageUrl = singleArticleData.featured_image_url;
  const articleId = singleArticleData.article_id;
  const link = singleArticleData.link;

  const generateUrl = (index) => {
    let newArticleCategories = [];

    for (let i = 0; i <= index; i++) {
      if (index === singleArticleData.category_tree.length - 1) return;

      // push to new array and slugify
      newArticleCategories.push(slugify(singleArticleData.category_tree[i]));
    }

    // add / to make up the url paths
    return newArticleCategories.join("/");
  };

  const fullArticleUrl = slugify(title);

  return (
    <Layout>
      <Container>
        <PageHeader
          title={title}
          image={imageUrl}
          loading={false}
          excerpt={excerpt}
        />
      </Container>
      <Container>
        <div className="pt-4 flex items-center space-x-2">
          <BreadCrumbs
            homeUrl="/articles"
            breadCrumbItems={singleArticleData.category_tree}
          />
        </div>
        <Share
          title={title}
          description={excerpt}
          shareUrl={`https://www.themix.org.uk/article/${fullArticleUrl}`}
        />
        <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-8">
          <div className="w-full lg:w-2/3">
            <div>
              <section className={`article-wrapper ${styles.article}`}>
                <ReactMarkdown
                  children={singleArticleData.content.rendered}
                  remarkPlugins={[remarkGfm]}
                />
              </section>
              <FeaturedPerson />
              <NextSteps />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <RelatedContent title={title || ""} />
          </div>
        </div>
        <UnderLineHeading title="Your voice matters" />
        <Feedback
          id={parseInt(singleArticleData.article_id)}
          type={singleArticleData["data type"]}
        />
        <VanillaComments
          article_title={title}
          article_link={link}
          article_id={articleId}
        />
        <Discussion />
      </Container>
      <NewsletterForm />
      <Container>
        <GetSocial />
        <SocialStatistics />
      </Container>
    </Layout>
  );
};

export default Article;
