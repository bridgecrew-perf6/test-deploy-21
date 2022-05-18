import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const RelatedContentDisclosure = ({
  title,
  subMenus,
  icon,
  bg = "bg-red-main",
}) => {
  return (
    <div className="cursor-pointer w-full py-1">
      <Disclosure>
        {({ open }) => (
          <div className="">
            <Disclosure.Button className="w-full group ease rounded-[10px] hover:bg-blue-teal">
              <div className="flex items-center justify-between pl-4 pr-16">
                <div className="flex space-x-2 items-center">
                  <div
                    className={`w-8 h-8 p-[6px] flex items-center rounded-[6px] py-2 ${bg} ease group-hover:bg-blue-teal`}
                  >
                    <img src={`/${icon}`} alt="help" />
                  </div>
                  <div className="font-bold text-blue-teal text-[20px] py-2 ease group-hover:text-white">
                    {title}
                  </div>
                </div>

                <FaChevronRight
                  className={`flex-end text-blue-teal transition ease-in-out delay-75 duration-500 ease group-hover:text-white ${
                    open && "rotate-90"
                  }`}
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition ease-out duration-500"
              enterFrom="opacity-50 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-out duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Disclosure.Panel className="pt-1 pb-2 px-6 w-full text-sm text-blue-teal">
                <div className="h-full pr-4 custom-scroll">{subMenus}</div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default RelatedContentDisclosure;
