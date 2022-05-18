import React from "react";

const PageHeader = ({ loading, image, title, excerpt }) => {
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : title ? (
        <div className="mt-2 relative">
          <img
            src={image}
            alt="page header"
            className="h-[170px] lg:h-[394px] rounded-[12px] object-cover w-full"
          />
          <div className="absolute top-0 lg:top-12 left-0 lg:left-20 w-full lg:w-[487px] h-[293px] bg-white rounded-[12px] px-2 lg:px-10 py-2 lg:py-8">
            <h1 className="text-[30px] font-bold w-full lg:w-2/3 py-2">
              {title}
            </h1>
            <div className="text-[18px]">{excerpt}</div>
          </div>
        </div>
      ) : (
        <p>No article found</p>
      )}
    </>
  );
};

export default PageHeader;
