import React from "react";
import UnderlineLink from "../../Links/UnderlineLink";
import UnderLineHeading from "../Headings/UnderLineHeading";

const NextSteps = () => {
  return (
    <section className="py-4">
      <UnderLineHeading title="Next steps" />
      <ul className="list-disc marker:text-blue-teal ml-16 py-4">
        <li>
          <span className="flex items-center space-x-2 w-full">
            <UnderlineLink href="#">Give us your feedback</UnderlineLink>
            <span>to help other people in a similar situation as you</span>
          </span>
        </li>
        <li>
          <span className="flex items-center space-x-2 w-full">
            <UnderlineLink href="#">
              Check out the related content
            </UnderlineLink>
            <span>
              to read more, watch our videos or contact local services
            </span>
          </span>
        </li>
        <li>
          <span className="flex items-center space-x-2 w-full">
            <UnderlineLink href="#">Contact our services</UnderlineLink>
          </span>
        </li>
        <li>
          <span className="flex items-center space-x-2 w-full">
            <UnderlineLink href="#">Connect with our community</UnderlineLink>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default NextSteps;
