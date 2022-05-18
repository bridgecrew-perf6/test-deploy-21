import { Dialog, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC, Fragment, ReactNode, useState } from "react";
interface IModalProps {
  openModal: boolean;
  closeModal: () => void;
  content: ReactNode;
  widths?: string;
  title?: string;
}

const ModalWrapper: FC<IModalProps> = ({
  content,
  openModal,
  closeModal,
  widths = "w-full md:w-1/2 lg:w-1/3",
  title,
}: IModalProps) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (state: boolean) => {
    console.log("Hovered state is: ************: ", state);

    setHovered(state);
  };
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            leave="ease-in duration-200"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`inline-block overflow-hidden text-left align-middle transition-all transform bg-white shadow rounded-[14px] ${widths}`}
            >
              <div className="flex w-full items-center justify-between top-0">
                <div className="mr-auto invisible">.</div>
                <h3 className="text-blue-teal">{title}</h3>
                <div
                  onClick={closeModal}
                  onMouseOver={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                  className="ml-auto"
                >
                  {hovered ? (
                    <Transition
                      show={hovered}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-90"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <StaticImage
                        src="../../images/yellow-close-bg.svg"
                        alt="Logo"
                        className="cursor-pointer"
                        placeholder="none"
                        height={66}
                      />
                    </Transition>
                  ) : (
                    <Transition
                      show={!hovered}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-90"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <StaticImage
                        src="../../images/blue-close-bg.svg"
                        alt="Logo"
                        className="cursor-pointer"
                        placeholder="none"
                        height={66}
                      />
                    </Transition>
                  )}
                </div>
              </div>
              <div className="m-4">{content}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalWrapper;
