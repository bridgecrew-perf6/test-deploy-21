import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

interface ISubCategorySlug {
  categorySlug: string;
  subCategorySlug: string;
}

const SubCategory: FC<RouteComponentProps<ISubCategorySlug>> = ({
  subCategorySlug,
  categorySlug,
}) => {
  if (subCategorySlug) {
    return (
      <div>
        Category is: {categorySlug} SubCategory is {subCategorySlug}
      </div>
    );
  }

  return null;
};

export default SubCategory;
