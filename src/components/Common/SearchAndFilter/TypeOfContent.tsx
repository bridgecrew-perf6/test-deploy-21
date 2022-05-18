import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckBox from "./CheckBox";

// actions
import { updateTypeOfContent } from "../../../state/search";

const TypeOfContent = () => {
  const dispatch = useDispatch();

  const {
    search: { typeOfContentData },
  } = useSelector((state: any) => state);

  return (
    <div className="py-2">
      {typeOfContentData && typeOfContentData.length ? (
        typeOfContentData.map((result) => {
          const { type, checked } = result;
          return (
            <CheckBox
              name={type}
              count={0}
              checked={checked}
              handleClick={() => dispatch(updateTypeOfContent(result))}
            />
          );
        })
      ) : (
        <p>Could not find Type of content</p>
      )}
    </div>
  );
};

export default TypeOfContent;
