import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import ArticleResultCard from "../Cards/ArticleResultCard";
import UnderLineHeading from "../Headings/UnderLineHeading";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import ArticleResultCardLoading from "../Cards/ArticleResultCard/ArticleResultCardLoading";

const ArticleResults = () => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const {
    articles: { allArticlesData, allArticlesLoading },
  } = useSelector((state: any) => state);

  const itemsPerPage = 15;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log("Article length is: ", allArticlesData.length);

    setCurrentItems(allArticlesData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allArticlesData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allArticlesData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allArticlesData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (allArticlesLoading) return <ArticleResultCardLoading />;

  return (
    <div className="mt-10 md:mt-0">
      <UnderLineHeading
        title="All articles"
        rightComponent={
          <ReactPaginate
            className="flex items-center space-x-2 font-bold list-none"
            breakLabel="..."
            nextLabel={
              <div className="bg-blue-teal text-white flex items-center justify-center rounded-full p-1">
                <FaChevronRight />
              </div>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <div className="bg-blue-teal text-white flex items-center justify-center rounded-full p-1">
                <FaChevronLeft />
              </div>
            }
            renderOnZeroPageCount={null}
            activeLinkClassName="text-white bg-blue-teal rounded-full px-2 py-1"
          />
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {currentItems && currentItems.length ? (
          currentItems.map((article) => {
            const { title, featured_image_url, countComments } = article;

            return (
              <ArticleResultCard
                title={title.rendered}
                image={featured_image_url}
                commentCount={countComments}
                type={`${article["data type"]}`}
              />
            );
          })
        ) : (
          <div>No articles found</div>
        )}
      </div>
    </div>
  );
};

export default ArticleResults;
