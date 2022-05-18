import React, { FC, useState } from "react";
import { RiMenuFill } from "@react-icons/all-files/ri/RiMenuFill";
import { css } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";
import ServiceCard from "../QuickClose/ServiceCard";
import MobileMenuDisclosure from "./MobileMenuDisclosure";
import {
  informationAndAdviceMenuThree,
  informationAndAdviceMenuTwo,
} from "./InformationAndAdviceMenu";
import { yourCommunityMenuOptions } from "./YourCommunityMenu";
import { aboutUsMenuOptions } from "./AboutUsMenu";

interface IMobileMenuItemProps {
  title: string;
}
const MobileMenuItem: FC<IMobileMenuItemProps> = ({ title }) => {
  return (
    <div className="flex items-center pl-8 cursor-pointer">
      <div className="font-bold text-blue-teal text-[20px] pr-3 py-3">
        {title}
      </div>
      <StaticImage
        src="../../images/chevron_right_blue_icon.svg"
        alt="Logo"
        className="cursor-pointer"
        placeholder="none"
        height={18}
      />
    </div>
  );
};

const GetInfoSubMenu = ({ title, menuItems }) => {
  return (
    <div className="border-t border-blue-teal py-2">
      <div className="py-1 font-bold text-[16px]">{title}</div>
      {menuItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

const GetSupportSubMenu = ({ menuItems }) => {
  return (
    <>
      {menuItems.map(({ title, description, cta }) => (
        <div className="border-t border-blue-teal py-2">
          <div className="py-1 font-bold text-[16px]">{title}</div>

          <div>{description}</div>
          <div>{cta}</div>
        </div>
      ))}
    </>
  );
};

const AboutUsSubMenu = ({ menuItems }) => {
  return (
    <>
      {menuItems.map(({ title, more }) => (
        <div className="border-t border-blue-teal py-2">
          <div className="py-1 font-bold text-[16px]">{title}</div>

          {more.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      ))}
    </>
  );
};

const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Change to Tailwind, uninstall @emotion/css
  const menuOverlay = css`
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    height: 100vh;
    width: 80%;
    transform: translateX(100%);
    transition: all 500ms ease-in-out;
    overflow: scroll;
    &.show {
      background-color: white;
      transform: translateX(0%);
      border-radius: 20px 0px 0px 20px; /*TL TR BR BL*/
    }
    nav {
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        height: 30px;
        text-decoration: none;
        color: black;
        cursor: pointer;
        transition: all 150ms ease-in-out;
        &:hover {
          color: #f28eba;
        }
      }
    }
    @media (max-width: 800px) {
      width: 90%;
    }
  `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button className="p-2" onClick={toggleMenu}>
        <RiMenuFill className="text-blue-teal h-full w-[28px] cursor-pointer" />
      </button>

      <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
        <button
          className="w-full flex justify-end items-start top-0"
          onClick={toggleMenu}
        >
          <StaticImage
            src="../../images/blue-close-bg.svg"
            alt="Logo"
            className="cursor-pointer"
            placeholder="none"
            height={66}
          />
        </button>
        <div className="pt-6 pb-6">
          <MobileMenuDisclosure
            title="Get info"
            subMenus={
              <>
                <GetInfoSubMenu
                  title="Get info"
                  menuItems={informationAndAdviceMenuTwo}
                />
                <GetInfoSubMenu
                  title="Apps and tools"
                  menuItems={informationAndAdviceMenuThree}
                />
              </>
            }
          />

          <MobileMenuDisclosure
            title="Get support"
            subMenus={
              <GetSupportSubMenu menuItems={yourCommunityMenuOptions} />
            }
          />

          <MobileMenuItem title="Get involved" />
          <MobileMenuDisclosure
            title="About us"
            subMenus={<AboutUsSubMenu menuItems={aboutUsMenuOptions} />}
          />
        </div>

        <div className="py-10"></div>
      </div>
    </>
  );
};

export default MobileMenu;
