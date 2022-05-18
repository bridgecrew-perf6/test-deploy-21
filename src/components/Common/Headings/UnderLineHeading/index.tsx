import React from "react";

interface IUnderLineHeadingProps {
  title: string;
  rightComponent?: React.ReactNode;
  className?: string;
}

const UnderLineHeading = ({
  title,
  rightComponent,
  className,
}: IUnderLineHeadingProps) => {
  return (
    <section
      className={`grid grid-cols-1 items-center justify-between ${className}`}
    >
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        {rightComponent}
      </div>
      <div className="border-t border-gray-light mt-1"></div>
    </section>
  );
};

export default UnderLineHeading;
