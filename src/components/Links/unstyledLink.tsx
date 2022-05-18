import * as React from "react";
import { Link } from "@reach/router";
import clsxm from "../../lib/clsxm";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  chevronLeft?: boolean;
  chevronRight?: boolean;
  localLink?: boolean;
} & React.ComponentPropsWithRef<"a">;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, localLink, className, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#");

    if (localLink) {
      return <Link to={href}>{children}</Link>;
    }

    if (!isNewTab) {
      return (
        <a ref={ref} {...rest} className={className}>
          {children}
        </a>
      );
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={clsxm("cursor-newtab", className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
