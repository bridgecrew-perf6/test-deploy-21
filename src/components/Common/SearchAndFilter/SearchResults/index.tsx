import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleResultCard from "../../Cards/ArticleResultCard";

// actions
import { fetchResults } from "../../../../state/search";

const SearchResults = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  const {
    search: { searchResultsLoading, searchResultsData, searchResultsError },
  } = useSelector((state: any) => state);

  if (searchResultsLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {searchResultsData && searchResultsData.length ? (
          searchResultsData.map((result) => {
            return (
              <ArticleResultCard
                title={result.name}
                image={"https://cdn.themix.org.uk/uploads/2013/11/lonely.jpg"}
                commentCount={12}
                type={`${result["data type"]}`}
              />
            );
          })
        ) : searchResultsError ? (
          <div>No results found</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
