import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CheckBox from "./CheckBox";
import { updateTypeOfCategory } from "../../../state/search";

const TypeOfCategory = () => {
  const dispatch = useDispatch();

  const {
    search: { searchCategoriesData },
  } = useSelector((state: any) => state);

  return (
    <div className="py-2">
      {searchCategoriesData && searchCategoriesData.length ? (
        searchCategoriesData.map((category) => {
          const { name, checked } = category;
          return (
            <CheckBox
              name={name}
              count={0}
              checked={checked}
              handleClick={() => dispatch(updateTypeOfCategory(category))}
            />
          );
        })
      ) : (
        <p>Could not find search categories</p>
      )}
    </div>
  );
};

export default TypeOfCategory;
