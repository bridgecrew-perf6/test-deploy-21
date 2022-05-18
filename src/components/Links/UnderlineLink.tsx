import * as React from "react";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

import clsxm from "../../lib/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "./unstyledLink";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, chevronLeft, chevronRight, ...rest }, ref) => {
    return (
      <div
        className={`flex items-center justify-center space-x-2 text-blue-teal cursor-pointer`}
      >
        {chevronLeft && <FaChevronLeft />}
        <UnstyledLink
          ref={ref}
          {...rest}
          className={clsxm(
            "cursor-pointer",
            "animated-underline inline-flex items-center font-semibold",
            "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            "border-b border-dotted border-dark hover:border-black/0",
            className
          )}
        >
          {children}
        </UnstyledLink>
        {chevronRight && <FaChevronRight />}
      </div>
    );
  }
);

export default UnderlineLink;
