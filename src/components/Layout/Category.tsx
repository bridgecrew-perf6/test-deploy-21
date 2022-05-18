import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

interface ICategoryProps {
  categorySlug: string;
  children?: React.ReactNode;
}

const Category: FC<RouteComponentProps<ICategoryProps>> = ({
  categorySlug,
  children,
}) => {
  if (categorySlug) {
    if (children) {
      return <div>{children}</div>;
    }
    return <div>Category is {categorySlug}</div>;
  }

  return <div>no slug</div>;
};

export default Category;
