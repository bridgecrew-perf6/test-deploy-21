import { Transition } from "@headlessui/react";
import React, { FC, Fragment, ReactNode, useState } from "react";
import useViewport from "../../hooks/useViewport";
import Container from "../Container";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";

interface IFlyoutMenuProps {
  title: string;
  menuItems: ReactNode;
}

const FlyoutMenu: FC<IFlyoutMenuProps> = ({
  title,
  menuItems,
}: IFlyoutMenuProps) => {
  const { width } = useViewport();

  const margin = Math.round(0.1 * width).toString();

  let [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="rounded-[12px] transition ease-in-out delay-75 hover:bg-blue-teal duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div tabIndex={0} className="">
          <div className="flex items-center h-[38px] px-4">
            <div
              className={`pr-1 font-bold transition ease-in-out delay-75 hover:text-white duration-500 ${
                hovered ? "text-white" : "text-blue-teal"
              }`}
            >
              {title}
            </div>
            <FaChevronDown
              className={`transition ease-in-out delay-75 hover:text-white duration-500  ${
                hovered ? "text-white" : "text-blue-teal -rotate-180"
              }`}
            />
          </div>
        </div>

        <Transition
          as={Fragment}
          show={hovered}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            tabIndex={0}
            style={{ left: 0 }}
            className="w-full mx-auto fixed mt-0"
          >
            <Container>
              <div className="shadow-2xl bg-white rounded-[12px] w-full">
                {menuItems}
              </div>
            </Container>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default FlyoutMenu;
