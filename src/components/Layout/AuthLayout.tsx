import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC, ReactNode } from "react";

interface IAuthLayoutProps {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  linkText: string;
  linkTo: string;
  form: ReactNode;
}
const AuthLayout: FC<IAuthLayoutProps> = ({
  title,
  icon,
  description,
  linkText,
  linkTo,
  form,
}) => {
  return (
    <div className="shadow-sm mt-10 px-[22px] lg:px-[100px] py-[22px] lg:py-[44px]">
      <div className="flex items-center pb-[10px]">
        {icon}
        <h2 className="pl-2">{title}</h2>
      </div>
      <div className="border-b border-gray-light"></div>
      <div className="pt-[28px] text-gray-main">{description}</div>
      <div className="text-blue-teal font-bold pt-[20px] pb-[30px]">
        {<Link to={`/${linkTo}`}>{linkText}</Link>}
      </div>
      {form}
    </div>
  );
};

export default AuthLayout;
