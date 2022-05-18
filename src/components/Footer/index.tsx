import Container from "../Container";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer-bg relative w-full flex flex-col items-center">
      <div className="h-[550px] lg:h-[315px] flex flex-col items-center justify-end">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-x lg:divide-y-0 divide-white h-full lg:h-[144px] ">
            <div className="px-4 lg:px-8 py-0">
              <Link to="/">
                <StaticImage
                  src="../../images/logo-white.svg"
                  alt="Logo"
                  className="mt-8 lg:-mt-4 mb:0 lg:mb-[30px] cursor-pointer"
                  placeholder="none"
                  width={129}
                  height={39}
                />
              </Link>
              <p className="text-white text-[12px] lg:text-[14px] leading-[16px] lg:leading-normal pt-4 lg:pt-0 pb-[16px] lg:pb-0">
                The Mix is a UK based charity that provides free, confidential
                support for young people under 25 via online, social and mobile.
              </p>
            </div>
            <div className="px-4 lg:px-8 py-0">
              <div className="py-[16px] lg:py-0">
                <h3 className="text-white mb:6 lg:mb-[30px]">Accreditations</h3>
                <div className="flex space-x-4 pt-[16px] lg:pt-0">
                  <a
                    href="https://investinginvolunteers.co.uk/"
                    target="_blank"
                    className="w-16 h-16 bg-white rounded-xl border-0 flex items-center justify-center "
                  >
                    <StaticImage
                      src="../../images/acc-1.svg"
                      alt="Logo"
                      placeholder="none"
                      className="image-hover"
                    />
                  </a>
                  <a
                    href="https://www.helplines.org/"
                    target="_blank"
                    className="w-16 h-16 bg-white rounded-xl border-0 flex items-center justify-center "
                  >
                    <StaticImage
                      src="../../images/acc-2.svg"
                      alt="Logo"
                      placeholder="none"
                      className="image-hover"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-8 py-0">
              <div className="py-[16px] lg:py-0">
                <h3 className="text-white mb:6 lg:mb-[30px]">Get social</h3>
                <div className="flex space-x-4 items-center pt-[16px] lg:pt-0">
                  {/* the image is loaded at build time, you cannot pass the filename in as a prop, or otherwise generate it outside of the component */}
                  <a href="https://www.instagram.com/themixuk/" target="_blank">
                    <StaticImage
                      src="../../images/instagram-icon.svg"
                      alt="YouTube"
                      height={30}
                      placeholder="none"
                      className="cursor-pointer image-hover"
                    />
                  </a>
                  <a href="https://www.facebook.com/TheMixUK" target="_blank">
                    <StaticImage
                      src="../../images/facebook-icon.svg"
                      alt="YouTube"
                      height={30}
                      placeholder="none"
                      className="cursor-pointer image-hover"
                    />
                  </a>
                  <a href="https://www.youtube.com/themixuk" target="_blank">
                    <StaticImage
                      src="../../images/youtube-icon.svg"
                      alt="YouTube"
                      placeholder="none"
                      height={30}
                      className="cursor-pointer image-hover"
                    />
                  </a>
                  <a href="https://twitter.com/themixUK" target="_blank">
                    <StaticImage
                      src="../../images/twitter-icon.svg"
                      alt="YouTube"
                      width={30}
                      placeholder="none"
                      className="cursor-pointer image-hover"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/the-mix-charity"
                    target="_blank"
                  >
                    <StaticImage
                      src="../../images/linkedin-icon.svg"
                      alt="YouTube"
                      height={30}
                      placeholder="none"
                      className="cursor-pointer image-hover"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-8 py-0">
              <div className="pt-0 pb-0">
                <h3 className="text-white mb:2 lg:mb-[30px] pt-[16px] lg:pt-0">
                  About
                </h3>
                <div className="block lg:flex justify-between pb-2 lg:pb-1 pt-[16px] lg:pt-0">
                  <div className="grid grid-cols-3 lg:block">
                    <div className="text-white text-[12px] lg:text-[14px] pb-2 cursor-pointer image-hover">
                      Contact us
                    </div>
                    <div className="text-center lg:text-left text-white text-[12px] lg:text-[14px] pb-0 lg:pb-2 cursor-pointer image-hover">
                      Privacy policy
                    </div>
                    <div className="text-center lg:text-left text-white text-[12px] lg:text-[14px]  cursor-pointer image-hover">
                      Cookies policy
                    </div>
                  </div>
                  <div className="grid grid-cols-3 lg:block">
                    <div className="text-[12px] lg:text-[14px] text-white pb-2 cursor-pointer image-hover">
                      Accessibility
                    </div>
                    <div className="text-center lg:text-left text-white text-[12px] lg:text-[14px] pb-0 lg:pb-2  cursor-pointer image-hover">
                      Terms of use
                    </div>
                    <div className="text-center lg:text-left text-white text-[12px] lg:text-[14px]  cursor-pointer image-hover">
                      Site map
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="text-center text-white text-[11px] font-extralight mb-2 lg:mb-[25px] mt-4 lg:mt-14">
          The Mix. Registered charity number: 1048995
        </div>
      </div>
    </footer>
  );
};

export default Footer;
