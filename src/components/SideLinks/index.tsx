import React, { FC, ReactNode } from "react";

interface ISideLinksProps {
  image: ReactNode;
  bg: string;
  width?: string;
  height?: string;
  styles?: string;
}
const SideLinks: FC<ISideLinksProps> = ({
  image,
  bg,
  width = "w-[30px]",
  height = "h-[30px]",
  styles,
}) => {
  return (
    <div
      className={`${width} ${height} flex items-center rounded-[10px] ${bg} ${styles}`}
    >
      {image}
    </div>
  );
};

export default SideLinks;
