import React from "react";
import { useSelector } from "react-redux";
import { Transition } from "@headlessui/react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import Container from "../../Container";

const NewsLetterForm = () => {
  const {
    newsLetter: { userNewsletterEmail },
  } = useSelector((state: any) => state);

  const showMainForm = userNewsletterEmail ? true : false;

  return (
    <div className="w-full">
      <div className="banner-bg"></div>
      <div className={`w-full bg-yellow-light/50 pt-2 pb-6`}>
        <Container>
          <div className="flex items-center justify-center pt-5 md:pt-[10px] w-full">
            <h2 className="hidden md:block">
              Be in the loop, subscribe to our Newsletter
            </h2>
            <div className="flex flex-col items-center md:hidden">
              <h2 className="text-[22px]">Be in the loop,</h2>
              <h2 className="text-[22px]">subscribe to our Newsletter</h2>
            </div>
          </div>
          <div className="pt-2">
            {!showMainForm ? (
              <FirstForm />
            ) : (
              <Transition
                show={showMainForm}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <SecondForm />
              </Transition>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsLetterForm;
