import React, { FC } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";

interface DataItem {
  name: string;
  value: string;
}

interface ISelectProps {
  data: Array<DataItem>;
  label: string;
  placeholderText: string;
}

const Select: FC<ISelectProps> = ({ data, label, placeholderText }) => {
  const [selected, setSelected] = useState<any>();

  return (
    <div className="z-50 w-full h-[30px]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-full">
          <Listbox.Label className="text-[10px] px-2 font-bold text-blue-teal">
            {label}
          </Listbox.Label>
          <Listbox.Button className="flex items-center justify-between bg-blue-teal text-white rounded-[10px] w-full p-2 h-full">
            <div className="text-[10px] text-white">
              {selected && selected.name ? selected.name : placeholderText}
            </div>
            <StaticImage
              src="../../images/down-chevron-white-icon.svg"
              alt="search"
              placeholder="none"
              width={10}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `${
                      active ? "text-blue-teal bg-amber-100" : "text-gray-main"
                    } 
                          cursor-pointer select-none relative p-2`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
