import React from "react";

const ArticleResultCardLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
      {[...Array(15)].map((el, index) => (
        <div className="animate-pulse cursor-progress">
          <div className="rounded-[12px] shadow-xl bg-white flex flex-col h-[250px] ">
            <div className="w-full h-1/2 overflow-hidden rounded-t-[12px] bg-gray-200"></div>
            <div className="group py-2 px-4 h-1/2 overflow-hidden">
              <div className="rounded-b-[12px]"></div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className="mt-2 flex items-center space-x-4 w-5/6 h-3 bg-gray-200 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default ArticleResultCardLoading;
