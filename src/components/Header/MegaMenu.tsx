import { Menu, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC, Fragment, ReactNode, useEffect } from "react";
import useViewport from "../../hooks/useViewport";

interface IMegaMenuProps {
  title: string;
  menuItems: ReactNode;
}
const MegaMenu: FC<IMegaMenuProps> = ({ title, menuItems }: IMegaMenuProps) => {
  const { width } = useViewport();

  const margin = Math.round(0.075 * width).toString();
  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <div
            className={`flex h-[38px] items-center px-4 rounded-xl  ${
              open && `bg-blue-teal text-white`
            }`}
          >
            <Menu.Button>
              <div className="flex items-center justify-center">
                <div
                  className={`pr-1 font-bold ${
                    open ? "text-white" : "text-blue-teal"
                  }`}
                >
                  {title}
                </div>
                {open ? (
                  <StaticImage
                    src="../../images/down-chevron-white.svg"
                    alt="Search icon"
                    placeholder="none"
                    width={15}
                  />
                ) : (
                  <StaticImage
                    src="../../images/chevron-down-icon.svg"
                    alt="Search icon"
                    placeholder="none"
                    width={15}
                  />
                )}
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              style={{ right: `${margin}px` }}
              className="z-10 absolute mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[787px]"
            >
              {menuItems}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MegaMenu;
