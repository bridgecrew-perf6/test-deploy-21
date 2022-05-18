import React, { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}
const Container: FC<IContainerProps> = ({ children }: IContainerProps) => {
  return <section className="layout mx-auto">{children}</section>;
};

export default Container;
