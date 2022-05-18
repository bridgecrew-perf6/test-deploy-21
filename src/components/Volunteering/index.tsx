import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import React from "react";
import UnderlineLink from "../Links/UnderlineLink";

// markup
const VolunteeringComponent = ({
  title,
  image,
  description,
  registration,
  venue,
  link,
}) => {
  return (
    <div className="card w-92 bg-base-100 shadow-xl mb-5">
      <div className="credentials-wrapper">
        <div className="credentials-container p-2 pl-3">
          <h3 className="mb-1">{title}</h3>
        </div>
        <div className="registration-container">
          <div className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full ease hover:bg-red-main">
            <p>{registration}</p>
          </div>
        </div>
        <div className="venue-container">
          <div className="w-full bg-black text-white text-sm font-medium rounded-full ease hover:bg-gray-main">
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="ml-2 text-white" />
              <p className="pr-4 pl-1 py-2">{venue}</p>
            </div>
          </div>
        </div>
        <figure className="overflow-hidden">
          <img src={image} alt="Profile Photo" className="overflow-hidden" />
        </figure>
      </div>
      <div className="card-body p-4">
        <p>{description}</p>
      </div>
      <div className="card-footer mt-10">
        <div className="w-full p-2 lg:p-4 cursor-pointer">
          <div className="flex items-right justify-end">
            <UnderlineLink href="#">
              <div className="flex items-center space-x-1">
                <span>Read more & apply</span>
                <FaChevronRight className="text-blue-teal" />
              </div>
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringComponent;
