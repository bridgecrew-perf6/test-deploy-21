import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, ReactNode } from "react";
interface IModalProps {
  openModal: boolean;
  closeModal: () => void;
  content: ReactNode;
  widths?: string;
}

const PlainModal: FC<IModalProps> = ({
  content,
  openModal,
  closeModal,
  widths = "w-full",
}: IModalProps) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            leave="ease-in duration-200"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 opacity-50" />
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
              className={`inline-block overflow-hidden text-left align-middle transition-all transform ${widths}`}
            >
              <div className="flex items-center justify-center">{content}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PlainModal;
