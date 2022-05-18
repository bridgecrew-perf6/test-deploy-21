import React from "react";
import { useSelector } from "react-redux";

import UnderlineLink from "../../Links/UnderlineLink";
import FilterPill from "./FilterPill";

const AppliedFilters = () => {
  const {
    search: {
      appliedFilters: { categories },
    },
  } = useSelector((state: any) => state);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-blue-teal font-bold">Applied filters</div>
        <UnderlineLink href="#">
          <span className="text-[12px]">Clear all filters</span>
        </UnderlineLink>
      </div>
      <div className="py-2 flex flex-wrap">
        {categories && categories.length
          ? categories.map(({ name }) => <FilterPill title={name} />)
          : null}
      </div>
    </div>
  );
};

export default AppliedFilters;
