import Container from "../../Container";
import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../../Header/LinkButton";

const GetSocial = () => {
  return (
    <Container>
      <div className="py-4">
        <h2 className="border-b border-gray-light py-2">Get social</h2>
        <div className="flex flex-col lg:flex-row mt-4 h-[350px] lg:h-[225px] shadow rounded-[10px]">
          <div className="w-full lg:w-[40%] get-social-bg flex justify-center overflow-hidden">
            <img
              src="../../../images/tiktok_logo.svg"
              alt="Logo"
              placeholder="none"
              className="block lg:hidden h-[72px] w-[128px] m-auto overflow-hidden image-hover"
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="my-auto pt-[16px] lg:pt-[24px]">
              <div className="flex justify-between items-end py-2">
                <h3 className="pl-[16px] lg:px-[30px]">
                  Did you know we're on TikTok?{" "}
                </h3>
                <StaticImage
                  src="../../../images/tiktok_logo.svg"
                  alt="Logo"
                  placeholder="none"
                  height={52}
                  className="hidden lg:flex"
                />
              </div>
              <div className="text-[14px] lg:text-[16px] py-2 px-[16px] lg:px-[30px]">
                We’re a diverse bunch, with a wealth of experience and varied
                backgrounds. Our working ethos is based on respect, challenge
                and nice coffee. We’re a diverse bunch, with a wealth of
                experience and varied backgrounds.
              </div>
              <div className="flex items-center justify-end px-[16px] lg:px-[30px]">
                <LinkButton
                  text="Follow us"
                  bgColor="bg-blue-teal"
                  fontColor="text-white"
                  styles="w-[85px] lg:w-[110px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetSocial;
