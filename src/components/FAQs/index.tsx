import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import UnderlineLink from "../Links/UnderlineLink";
import UnderlineHeading from "../Common/Headings/UnderLineHeading";

const FAQsComponent = () => {
  return (
    <div className="faqs-item-width">
      <section className="py-10">
        {" "}
        <UnderlineHeading
          title="FAQs"
          rightComponent={
            <UnderlineLink href="#">
              <div className="flex items-right justify-end">
                <div className="font-bold text-blue-teal pr-2">
                  <a className="accordion-link animated-underline">
                    Ask us a question
                  </a>
                </div>
                <FaChevronRight className="text-blue-teal" />
              </div>
            </UnderlineLink>
          }
        ></UnderlineHeading>
      </section>

      {/* <div className="border-below pb-0.5 mb-4 mt-10">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="pb-1">FAQs</h2>
          </div>
          <div className="w-full p-2 lg:p-4 cursor-pointer">
            <div className="flex items-right justify-end">
              <div className="font-bold text-blue-teal pr-2">
                <a className="accordion-link animated-underline">
                  Ask us a question
                </a>
              </div>
              <FaChevronRight className="text-blue-teal" />
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex faq-accordion-selector justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg accordion-hover-state button-hover">
                <span className="accordion-header">What is an overdraft?</span>
                <FaChevronDown
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 accordion-text">
                There are a number of options if you're in need of emergency
                money. We recommend reading our article{" "}
                <a className="accordion-link animated-underline" href="#">
                  'Help I'm broke and need emergency support'
                </a>{" "}
                for more information
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex faq-accordion-selector justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg accordion-hover-state button-hover">
                <span className="accordion-header">
                  Where can I get emergency money?
                </span>
                <FaChevronDown
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 accordion-text">
                There are a number of options if you're in need of emergency
                money. We recommend reading our article{" "}
                <a className="accordion-link animated-underline" href="#">
                  'Help I'm broke and need emergency support'
                </a>{" "}
                for more information
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex faq-accordion-selector justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg accordion-hover-state button-hover">
                <span className="accordion-header">
                  Where can I get support managing my money?
                </span>
                <FaChevronDown
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 accordion-text">
                There are a number of options if you're in need of emergency
                money. We recommend reading our article{" "}
                <a className="accordion-link animated-underline" href="#">
                  'Help I'm broke and need emergency support'
                </a>{" "}
                for more information
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex faq-accordion-selector justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg accordion-hover-state button-hover">
                <span className="accordion-header">
                  How much is statutory sick pay?
                </span>
                <FaChevronDown
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 accordion-text">
                There are a number of options if you're in need of emergency
                money. We recommend reading our article{" "}
                <a className="accordion-link animated-underline" href="#">
                  'Help I'm broke and need emergency support'
                </a>{" "}
                for more information
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQsComponent;
