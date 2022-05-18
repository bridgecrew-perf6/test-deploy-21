import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { closeModals, openLocationSearchModal } from "../../state/modals";
import { StaticImage } from "gatsby-plugin-image";
import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";
import { FiCircle } from "@react-icons/all-files/fi/FiCircle";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import { VscLocation } from "@react-icons/all-files/vsc/VscLocation";
import Select from "../Input/Select";
import LocationSearchModal from "./LocationSearchModal";
import LocationSearchPill from "../Input/LocationSearchPill";
import { ImHappy } from "@react-icons/all-files/im/ImHappy";
import { ImSad } from "@react-icons/all-files/im/ImSad";

const lookingFor = [
  {
    id: 1,
    title: "Expert advice",
    checked: true,
  },
  {
    id: 2,
    title: "True stories",
    checked: true,
  },
  {
    id: 3,
    title: "Videos",
    checked: true,
  },
  {
    id: 4,
    title: "Research",
    checked: true,
  },
  {
    id: 5,
    title: "Apps",
    checked: true,
  },
  {
    id: 6,
    title: "Forum topics",
    checked: true,
  },
  {
    id: 7,
    title: "Organizations",
    checked: true,
  },
];

const notLookingFor = [
  {
    id: 1,
    title: "Abuse",
    checked: false,
  },
  {
    id: 2,
    title: "Drugs",
    checked: false,
  },
  {
    id: 3,
    title: "Death",
    checked: false,
  },
  {
    id: 4,
    title: "Eating disorders",
    checked: false,
  },
  {
    id: 5,
    title: "Mental health",
    checked: false,
  },
  {
    id: 6,
    title: "Self harm",
    checked: false,
  },
  {
    id: 7,
    title: "Sexual violence",
    checked: false,
  },
  {
    id: 8,
    title: "Suicide",
    checked: false,
  },
];

const BluePill = ({ title, checked, handler }) => {
  return (
    <div
      className={`flex items-center justify-between h-[30px] rounded-[10px] py-2 px-4 cursor-pointer  ${
        checked ? "bg-blue-teal" : "bg-blue-100"
      }`}
      onClick={() => handler()}
    >
      {checked ? (
        <FiCheckCircle className="text-white h-3 mr-1" />
      ) : (
        <FiCircle className="text-blue-teal h-3 mr-1" />
      )}
      <div
        className={`text-[10px] ${checked ? "text-white" : "text-blue-teal"}`}
      >
        {title}
      </div>
    </div>
  );
};

const RedPill = ({ title, checked, handler }) => {
  return (
    <div
      className={`flex items-center justify-between h-[30px] rounded-[10px] py-2 px-4  ${
        checked ? "bg-red-200" : "bg-red-main"
      }`}
      onClick={() => handler()}
    >
      {checked ? (
        <AiOutlineEyeInvisible className="text-red-main h-3 mr-1" />
      ) : (
        <BsFillEyeFill className="text-white h-3 mr-1" />
      )}
      <div
        className={`text-[10px] ${checked ? "text-red-main" : "text-white"}`}
      >
        {title}
      </div>
    </div>
  );
};

const SearchModal = () => {
  const dispatch = useDispatch();

  const [searchChecks, setSearchChecks] = useState(lookingFor);
  const [notSearchChecks, setNotSearchChecks] = useState(notLookingFor);

  const {
    modals: { isSearchModalOpen },
  } = useSelector((state: any) => state);

  const handleSearchChecks = (id: number) => {
    const objIndex = searchChecks.findIndex((obj) => obj.id === id);
    const isChecked = searchChecks[objIndex].checked;

    const newSearchChecks = [...searchChecks];

    newSearchChecks[objIndex].checked = !isChecked;

    setSearchChecks(newSearchChecks);
  };

  const handleNotSearchChecks = (id: number) => {
    const objIndex = notSearchChecks.findIndex((obj) => obj.id === id);
    const isChecked = notSearchChecks[objIndex].checked;

    const newNotSearchChecks = [...notSearchChecks];

    newNotSearchChecks[objIndex].checked = !isChecked;

    setNotSearchChecks(newNotSearchChecks);
  };

  return (
    <Modal
      openModal={isSearchModalOpen}
      closeModal={() => dispatch(closeModals())}
      widths="w-full lg:w-1/2"
      title="How can we help you?"
      content={
        <div>
          <div className="mx-auto my-auto w-full xl:w-3/4">
            <form className="flex flex-row">
              <input
                className="border-t border-l border-b border-blue-teal text-[12px] h-[40px] bg-gray-form rounded-l-[10px] w-full py-1 px-2 text-lg text-blue-teal outline-none placeholder-gray-main pl-[15px] placeholder:text-[10px]"
                type="text"
                placeholder="Enter your search..."
              />
              <span className="border-r border-t border-b border-blue-teal flex items-center bg-gray-form rounded-r-[10px] px-3 font-bold text-grey-100">
                <StaticImage
                  src="../../images/search-icon-teal.svg"
                  alt="search"
                  placeholder="none"
                  width={18}
                  height={18}
                />
              </span>
            </form>
          </div>

          <div className="py-4 flex justify-between space-x-1 md:space-x-2 lg:space-x-4">
            <Select
              placeholderText="How old are you?"
              label="Age"
              data={[
                { name: "9 and under", value: "9 and under" },
                { name: "10 - 12", value: "10 - 12" },
                { name: "13 - 15", value: "13 - 15" },
                { name: "16 - 20", value: "16 - 20" },
                { name: "21 - 25", value: "21 - 25" },
                { name: "Over 25", value: "Over 25" },
              ]}
            />

            <div className="w-full">
              <label
                htmlFor="customRange1"
                className="text-[10px] px-2 font-bold text-blue-teal"
              >
                Mood
              </label>
              <div className="flex items-center h-[30px] bg-blue-teal rounded-[10px] p-2">
                <ImSad className="text-white text-[30px] mr-1" />
                <input type="range" className="slider" id="customRange1" />
                <ImHappy className="text-white text-[30px] ml-1" />
              </div>
            </div>

            <LocationSearchPill />
          </div>

          <div className="font-bold text-blue-teal text-[14px] text-center pt-6">
            What information are you looking for?
          </div>

          <div className="pt-2 pb-4 px-4 w-full m-auto">
            <div className="flex flex-wrap justify-center space-x-2 space-y-2">
              <div className="invisible">.</div>
              {searchChecks.map(({ title, id, checked }) => {
                return (
                  <BluePill
                    title={title}
                    checked={checked}
                    handler={() => handleSearchChecks(id)}
                  />
                );
              })}
            </div>
          </div>

          <div className="font-bold text-blue-teal text-[14px] text-center pt-6">
            Is ther any topic you want to avoid?
          </div>

          <div className="pt-2 pb-4 px-4 w-full m-auto">
            <div className="flex flex-wrap justify-center space-x-2 space-y-2">
              <div className="invisible">.</div>
              {notSearchChecks.map(({ title, id, checked }) => (
                <RedPill
                  title={title}
                  checked={checked}
                  handler={() => handleNotSearchChecks(id)}
                />
              ))}
            </div>
          </div>

          <div className="w-full flex items-center pt-6">
            <button className="m-auto bg-blue-teal text-white px-8 py-2 rounded-[10px] text-sm">
              Search
            </button>
          </div>

          <div className="w-full items-center py-4">
            <p className="text-[10px] text-center py-2">
              We value your privacy and information you provide on this website
              will remain confidential and anonymous.
            </p>
            <p className="text-[10px] text-center py-2">
              If you are worried about your browsing history, follow the links
              below to secure your session.
            </p>
            <div className="flex w-full items-center">
              <a
                href="#"
                className="text-[10px] font-bold text-black cursor-pointer m-auto"
              >
                - How to turn on privacy mode in my browser
              </a>
            </div>
            <div className="flex w-full items-center">
              <a
                href="#"
                className="text-[10px] font-bold text-black cursor-pointer m-auto"
              >
                - How to delete my browser history
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SearchModal;
