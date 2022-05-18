import React, { FC, useState } from "react";
import Container from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "./LinkButton";
import MegaMenu from "./MegaMenu";
import InformationAndAdviceMenu from "./InformationAndAdviceMenu";
import GetInvolvedMenu from "./GetInvolvedMenu";
import YourCommunityMenu from "./YourCommunityMenu";
import AboutUsMenu from "./AboutUsMenu";
import { Link } from "gatsby";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { useDispatch, useSelector } from "react-redux";
import { openSearchModal, closeModals } from "../../state/modals";
import MobileMenu from "./MobileMenu";
import SearchModal from "../Modal/SearchModal";
import FlyoutMenu from "./FlyoutMenu";

const Header: FC = () => {
  const dispatch = useDispatch();

  const {
    modals: { isSearchModalOpen },
  } = useSelector((state: any) => state);

  const handleQuickClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
    window.open("https://www.google.com/doodles", "_blank");
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div className="pt-4 pb-2 sticky top-0 z-50 bg-white" id="header">
      <Container>
        {/* Mobile top menu buttons */}
        <div className="flex justify-between items-center pb-2 lg:hidden bg-white">
          <LinkButton
            text="I need urgent help"
            bgColor="bg-red-main"
            fontColor="text-white"
          />
          <LinkButton
            text="Donate"
            bgColor="bg-blue-teal"
            fontColor="text-white"
            styles="w-[88px]"
          />
          <LinkButton
            text="Quick close"
            bgColor="bg-gray-800"
            fontColor="text-white"
            rightIcon={<MdClose className="text-white" />}
            onClick={() => handleQuickClose()}
          />
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <Link to="/">
            <StaticImage
              src="../../images/main-logo.svg"
              alt="logo"
              placeholder="none"
              width={222}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-4 items-center h-6 -mt-4">
            <button
              onClick={() => dispatch(openSearchModal())}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <LinkButton
                text="Need help?"
                bgColor="bg-white"
                fontColor="text-blue-teal"
                icon={
                  <FaSearch
                    className={`${hovered ? "text-white" : "text-blue-teal "}`}
                  />
                }
                hovered={hovered}
              />
            </button>

            <div className="flex items-center px-4 shadow-lg bg-red-main text-white font-bold rounded-lg lg:rounded-xl cursor-pointer h-[24px] lg:h-[35px] hover:bg-yellow-main">
              I need urgent help
            </div>
            <div className="flex items-center px-4 shadow-lg bg-blue-teal text-white font-bold rounded-lg lg:rounded-xl cursor-pointer h-[24px] lg:h-[35px] hover:bg-yellow-main">
              Donate
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <Container>
        <div className="flex lg:hidden justify-between items-center ">
          <Link to="/">
            <StaticImage
              src="../../images/main-logo.svg"
              alt="logo"
              height={39}
              width={129}
              placeholder="none"
            />
          </Link>

          <div className="flex lg:hidden cursor-pointer shadow rounded-l-[10px] h-[38px] pl-4 items-center">
            {/* Search icon mobile */}
            {isSearchModalOpen ? (
              <button
                className="flex items-center bg-blue-teal h-full px-2 rounded-[10px]"
                onClick={() => dispatch(closeModals())}
              >
                <StaticImage
                  src="../../images/search-icon-white.svg"
                  alt="search"
                  placeholder="none"
                  height={22}
                />
              </button>
            ) : (
              <button
                className="flex items-center px-2"
                onClick={() => dispatch(openSearchModal())}
              >
                <StaticImage
                  src="../../images/search-icon-teal.svg"
                  alt="search"
                  placeholder="none"
                  height={22}
                />
              </button>
            )}
            {/* Search icon mobile */}

            {/* Burger menu */}
            <MobileMenu />

            <div className="border-l border-gray-main border-r">
              <div className="px-2">
                <Link to="/login" className="text-gray-main">
                  <StaticImage
                    src="../../images/your-account-gray-icon.svg"
                    alt="logo"
                    placeholder="none"
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Mobile menu */}
      <div
        className={`block lg:hidden font-bold text-[12px] text-justify tracking-wider pt-2`}
      >
        <Container>Advice and support for young people</Container>
      </div>

      <Container>
        <div className="flex justify-between items-center -mt-1">
          <div
            className={`hidden lg:block font-bold text-[14px] text-justify w-[256px] h-[24px]`}
          >
            Advice and support for young people
          </div>
          {/* Desktop menu only */}
          <div className="flex -mt-2">
            <div className="hidden lg:flex cursor-pointer shadow rounded-l-xl h-[38px] justify-between items-center">
              <FlyoutMenu
                title="Get info"
                menuItems={<InformationAndAdviceMenu />}
              />

              <FlyoutMenu
                title="Get support"
                menuItems={<YourCommunityMenu />}
              />

              <FlyoutMenu
                title="Get Involved"
                menuItems={<GetInvolvedMenu />}
              />
              <FlyoutMenu title="About" menuItems={<AboutUsMenu />} />
              <div className="flex items-center h-[30px] w-[88px] border-l border-blue-teal border-r">
                <div className="flex items-center m-auto">
                  <div className="px-1">
                    <StaticImage
                      src="../../images/your-account-gray-icon.svg"
                      alt="logo"
                      placeholder="none"
                      height={20}
                      width={19}
                    />
                  </div>
                  <div className="text-[10px] font-bold text-gray-main w-[46px] ">
                    <Link to="/login" className="text-gray-main">
                      Your account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <SearchModal />
    </div>
  );
};

export default Header;
