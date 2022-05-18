import React from "react";
import { Link, useNavigate } from "@reach/router";
import { useDispatch } from "react-redux";
import slugify from "react-slugify";

import UnderlineLink from "../../Links/UnderlineLink";
import HomeIcon from "./icons/home.svg";

import {
  updatTypeOfCategoryFromNavigation,
  fetchSearchCategories,
} from "../../../state/search";
import Category from "../../Layout/Category";
interface IBreadCrumbsProps {
  homeUrl: string;
  breadCrumbItems: any;
}

const BreadCrumbs = ({ breadCrumbItems }: IBreadCrumbsProps) => {
  return (
    <section className="flex space-x-2 items-center mb-1">
      <Link to="/articles">
        <img src={HomeIcon} alt="home" className="mb-1" />
      </Link>
      {breadCrumbItems &&
        breadCrumbItems.length &&
        breadCrumbItems.map((title, index) => {
          const lastItem = breadCrumbItems.length - 1;

          return (
            <div className="flex items-center space-x-2 font-bold">
              {index === lastItem ? (
                <div>{title}</div>
              ) : (
                <>
                  <Link to={`/listings?${title}`}>{title}</Link>
                  <span>{">"}</span>
                </>
              )}
            </div>
          );
        })}
    </section>
  );
};

export default BreadCrumbs;
