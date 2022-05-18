import React from "react";
import ReactTooltip from "react-tooltip";

const QuickClose = () => {
  return (
    <ReactTooltip
      id="registerTip"
      className="quick-close-tooltip z-50"
      arrowColor="transparent"
      effect="solid"
      place="top"
    >
      Quickly leave this site
    </ReactTooltip>
  );
};

export default QuickClose;
