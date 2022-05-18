import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";

const MobileMenuDisclosure = ({ title, subMenus }) => {
  return (
    <div className="pl-8 cursor-pointer w-full ">
      <Disclosure>
        {({ open }) => (
          <div className="">
            <Disclosure.Button className="flex items-center">
              <div className="font-bold text-blue-teal text-[20px] pr-3 py-3">
                {title}
              </div>
              <StaticImage
                src="../../images/chevron_right_blue_icon.svg"
                alt="Logo"
                className={`${open ? "transform rotate-90" : ""}`}
                placeholder="none"
                height={18}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="pt-1 pb-2 px-6 w-full text-sm text-blue-teal">
                <div className="h-[300px] overflow-y-scroll pr-4 custom-scroll">
                  {subMenus}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default MobileMenuDisclosure;
