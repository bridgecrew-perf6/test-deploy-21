import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode, FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import QuickClose from "../QuickClose";
import QuickCloseInfo from "../QuickClose/QuickCloseInfo";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import SideLinks from "../SideLinks";
import BackToTop from "../BackToTop";
import Container from "../Container";
import VideoOverlay from "../Modal/VideoOverlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}
const Layout: FC<ILayoutProps> = ({
  children,
  title = "The Mix",
}: ILayoutProps) => {
  const handleQuickClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
    window.open("https://www.google.com/doodles", "_blank");
  };

  return (
    <main className="flex flex-col min-h-screen w-full">
      <title>{title}</title>
      <Header />
      <div className="flex-grow body-bg">
        <div className="invisible lg:visible fixed right-0 top-[20%] w-[40px] z-50">
          <div
            className="quick-close shadow bg-gray-main w-full flex items-center py-4 rounded-b-lg cursor-pointer z-50"
            data-tip
            data-for="registerTip"
            onClick={() => handleQuickClose()}
          >
            <div className="text-[16px] text-bold text-white pb-2">
              Quick close
            </div>
            <MdClose className="text-white h-[14px] w-[14px]" />
          </div>
          <QuickClose />
          <div
            className="bg-gray-main shadow w-full flex items-center mt-[3px] rounded-b-lg m-auto h-[38px] cursor-pointer"
            data-tip
            data-for="quickCLoseInfoTip"
          >
            <StaticImage
              src="../../images/quick-close-info-icon.svg"
              alt="Info"
              className="text-center m-auto"
              placeholder="none"
              height={19}
              width={19}
            />
          </div>
          <QuickCloseInfo />
          {/* <div className="bg-gray-white shadow rounded-lg py-[8px] mt-[12px]">
            <SideLinks
              image={
                <StaticImage
                  src="../../images/crisis-messenger-icon.svg"
                  alt="Info"
                  className="text-center m-auto"
                  placeholder="none"
                  height={19}
                  width={19}
                />
              }
              bg="bg-red-main"
              styles="mx-auto my-[3px]"
            />

            <SideLinks
              image={
                <StaticImage
                  src="../../images/online-peer-support-icon.svg"
                  alt="Info"
                  className="text-center m-auto"
                  placeholder="none"
                  height={19}
                  width={19}
                />
              }
              bg="bg-red-main"
              styles="mx-auto my-[3px]"
            />

            <SideLinks
              image={
                <StaticImage
                  src="../../images/helpline-icon.svg"
                  alt="Info"
                  className="text-center m-auto"
                  placeholder="none"
                  height={19}
                  width={19}
                />
              }
              bg="bg-yellow-main"
              styles="mx-auto my-[3px]"
            />

            <SideLinks
              image={
                <StaticImage
                  src="../../images/counselling-icon.svg"
                  alt="Info"
                  className="text-center m-auto"
                  placeholder="none"
                  height={19}
                  width={19}
                />
              }
              bg="bg-blue-teal"
              styles="mx-auto my-[3px]"
            />
          </div> */}
        </div>
        {children}
        <ToastContainer />
      </div>

      <BackToTop />
      <Footer />
      <VideoOverlay />
    </main>
  );
};

export default Layout;
