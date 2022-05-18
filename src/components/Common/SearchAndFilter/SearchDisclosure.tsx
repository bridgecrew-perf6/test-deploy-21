import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import TypeOfContent from "./TypeOfContent";
import TypeOfCatagory from "./TypeOfCategory";

interface IDisclosureItemProps {
  title: string;
  content: React.ReactNode;
}

const DisclosureItem = ({ title, content }: IDisclosureItemProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="border-t border-blue-teal/20">
            <Disclosure.Button className="flex justify-between items-center w-full py-2 text-left cursor-pointer">
              <span className="text-blue-teal font-bold">{title}</span>
              <FaChevronDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-4 h-4 text-blue-teal`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="">{content}</Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

const SearchDisclosure = () => {
  return (
    <div className="w-full py-4">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <DisclosureItem title="Type of content" content={<TypeOfContent />} />
        <DisclosureItem title="Category" content={<TypeOfCatagory />} />
      </div>
    </div>
  );
};

export default SearchDisclosure;
