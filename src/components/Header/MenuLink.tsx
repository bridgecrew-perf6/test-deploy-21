import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import UnderlineLink from "../Links/UnderlineLink";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface IMenuLinkProps {
  title: string;
}
const MenuLink: FC<IMenuLinkProps> = ({ title }: IMenuLinkProps) => {
  return (
    <div className="flex space-x-1 items-center cursor-pointer py-1">
      <FaChevronRight className="text-blue-teal h-3" />
      <UnderlineLink href={""}>
        <div className="text-[14px] text-blue-teal font-normal">{title}</div>
      </UnderlineLink>
    </div>
  );
};

export default MenuLink;
