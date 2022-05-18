import { Transition } from "@headlessui/react";
import { VscLocation } from "@react-icons/all-files/vsc/VscLocation";
import React, { FC, Fragment, useState, useRef } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { CgSpinnerTwo } from "@react-icons/all-files/cg/CgSpinnerTwo";
import useOuterClick from "../../lib/useOuterClick";
import useGeoLocation from "../../hooks/useGeoLocation";

const LocationSearchPill: FC = () => {
  const ref = useRef();

  const { loading, error, location } = useGeoLocation();

  console.log("Loading is: ", loading);
  console.log("error is: ", error);
  console.log("location is: ", location);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: "AIzaSyDeDZp7L3SqKohDGG_CfhAw_jbdfl34q0U",
  });

  const [value, setValue] = useState("");
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [geoError, setGeoError] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    getPlacePredictions({ input: evt.target.value });
    setValue(evt.target.value);
    setShowSelectMenu(true);
  };

  const handleOnClickSelect = (value) => {
    setValue(value);
    setShowSelectMenu(false);
  };

  const handleSetGeoLocation = () => {
    if (error) {
      setGeoError(error);
      setTimeout(() => {
        setGeoError("");
      }, 3000);
    } else {
      setValue(location);
    }
  };

  useOuterClick(ref, () => setShowSelectMenu(false));

  return (
    <div className="w-full cursor-pointer z-50 sticky">
      <div className=" w-full">
        <label className="text-[10px] px-2 font-bold text-blue-teal">
          Location
        </label>
        <div className="flex items-center">
          <input
            className="h-[30px] bg-blue-teal rounded-l-[10px] w-full py-1 px-2 text-lg text-white text-[10px] outline-none pl-[15px] search-plc"
            type="text"
            placeholder="Where do you live?"
            onChange={(evt) => handleChange(evt)}
            value={value}
          />
          <span className="flex items-center bg-blue-teal rounded-r-[10px] px-3 font-bold text-grey-100 h-[30px]">
            {loading ? (
              <CgSpinnerTwo className="text-white cursor-wait icon-spin" />
            ) : (
              <VscLocation
                className="text-white cursor-pointer"
                onClick={handleSetGeoLocation}
              />
            )}
          </span>
        </div>
        {geoError && (
          <div className="text-[10px] text-red-400 pl-2">{geoError}</div>
        )}

        {showSelectMenu && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute w-full bg-white rounded-[10px] shadow-xl max-h-60 mt-1 Z-50 p-2"
              ref={ref}
            >
              {placePredictions.map((item) => (
                <div
                  className="block truncate sm:text-sm hover:text-blue-teal cursor-pointer"
                  onClick={() => handleOnClickSelect(item.description)}
                >
                  {item.description}
                </div>
              ))}
            </div>
          </Transition>
        )}
      </div>
    </div>
  );
};

export default LocationSearchPill;
