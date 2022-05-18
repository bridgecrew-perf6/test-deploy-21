import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import Holly from "../../../static/profile/holly.png";
import User from "../../../static/profile/user.png";

const DisclosureCard = () => {
  return (
    <div className="shadow-xl h-[114px] lg:h-[140px] rounded-[12px] flex justify-between mb-4 border">
      <div className="flex">
        <img
          src={User}
          alt="help"
          className="w-[72px] lg:w-[157px] h-full object-cover rounded-l-[12px]"
        />
        <div className="pl-2 lg:pl-4 pt-2 lg:pt-4">
          <div className="font-bold text-[18px] py-0 lg:pb-2">
            Debt Relief Orders
          </div>
          <div className="text-[14px] lg:text-[16px]">
            Support over two million young people that use our service each
            year. We have events for beginners to hardened pros.
          </div>
        </div>
      </div>
      <div className="pr-2 lg:pr-4 flex items-start my-auto">
        <FaChevronRight className="text-blue-teal cursor-pointer w-5 h-5" />
      </div>
    </div>
  );
};

const MorePostsDisclosure = () => {
  return (
    <div className="w-full pt-1">
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full bg-blue-teal rounded-[12px] h-[42px]">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="text-white font-bold text-[14px] lg:text-[18px]">
                    View more posts
                  </div>
                  <FaChevronUp
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </div>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2 text-sm">
              <DisclosureCard />
              <DisclosureCard />
              <DisclosureCard />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MorePostsDisclosure;
