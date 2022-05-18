import React from "react";
import Holly from "../../../static/profile/holly.png";
import MorePostsDisclosure from "./MorePostsDisclosure";

const FeaturedPerson = () => {
  return (
    <div className="pb-10">
      <div className="rounded-[12px] shadow-2xl border p-6 lg:p-10 flex items-center flex-col lg:flex-row bg-white">
        <div className="w-full lg:w-[120px] mr-0 lg:mr-6 pb-4 lg:pb-0 overflow-hidden rounded-full">
          <img
            src={Holly}
            alt="Author"
            className="h-[100px] w-[100px] object-cover mx-auto image-hover rounded-full"
          />
        </div>
        <div className="w-full">
          <div className="border-b pb-1 font-bold text-[14px]">
            This content was written in collaboration with:
          </div>
          <h2 className="text-red-light pb-1 pt-3">Holly Turner (she/her)</h2>
          <h3 className="pb-2">Editorial Communications Manager</h3>
          <div className="text-[14px] lg:text-[16px]">
            Holly looks after communications at The Mix and has a wealth of
            experience in editorial roles. She’s passionate about supporting
            young people through content and amplifying their voices. Outside
            work, Holly enjoys yoga, tap dancing and hunting for London’s best
            pizzas.
          </div>
        </div>
      </div>
      {/* <MorePostsDisclosure /> */}
    </div>
  );
};

export default FeaturedPerson;
