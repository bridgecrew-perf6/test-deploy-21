import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { closeLocationSearchModal } from "../../state/modals";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

// kwy: AIzaSyDeDZp7L3SqKohDGG_CfhAw_jbdfl34q0U
const LocationSearchModal: FC = () => {
  const dispatch = useDispatch();

  const {
    modals: { isSearchLocationModalOpen },
  } = useSelector((state: any) => state);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: "AIzaSyDeDZp7L3SqKohDGG_CfhAw_jbdfl34q0U",
  });

  const [value, setValue] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    getPlacePredictions({ input: evt.target.value });
    setValue(evt.target.value);
  };

  console.log("Predictions is: ", placePredictions);

  return (
    <Modal
      openModal={isSearchLocationModalOpen}
      closeModal={() => dispatch(closeLocationSearchModal())}
      widths="w-5/6 md:w-2/3 lg:w-1/3"
      title="Search location"
      content={
        <div>
          <input
            placeholder="Debounce 500 ms"
            onChange={(evt) => handleChange(evt)}
          />
          {placePredictions.map((item) => (
            <div>{item.description}</div>
          ))}
        </div>
      }
    />
  );
};

export default LocationSearchModal;
