import React from "react";
import Container from "../../Container";

import * as styles from "./articleHeader.module.css";

interface IArticleProps {
  title: string;
}

const ArticleHeader = ({ title }: IArticleProps) => {
  return (
    <section
      className={`${styles.topBanner} grid grid-cols-1 items-center cursor-default my-2`}
    >
      <Container>
        <h2 className="mt-2 md:mt-10 text-white">{title}</h2>
      </Container>
    </section>
  );
};

export default ArticleHeader;
