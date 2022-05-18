import React from "react";
import ReactTooltip from "react-tooltip";

const QuickCloseInfo = () => {
  return (
    <ReactTooltip
      id="quickCLoseInfoTip"
      className="quick-close-info-tooltip"
      border={false}
      arrowColor="transparent"
      effect="solid"
    >
      <div className="flex flex-col h-full items-center">
        <div>Learn how to keep your</div>
        <div>visits to The Mix private</div>
      </div>
    </ReactTooltip>
  );
};

export default QuickCloseInfo;
