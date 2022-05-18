import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

interface IContentProps {
  categorySlug: string;
  subCategorySlug: string;
  contentSlug: string;
}

const Content: FC<RouteComponentProps<IContentProps>> = ({
  contentSlug,
  subCategorySlug,
  categorySlug,
}) => {
  if (contentSlug) {
    return <div>Content is {contentSlug}</div>;
  }

  return <div>no slug</div>;
};

export default Content;
