import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";

const useGeoLocation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError]: any = useState("");
  const [location, setLocation] = useState("");

  Geocode.setApiKey("AIzaSyDeDZp7L3SqKohDGG_CfhAw_jbdfl34q0U");

  const onSuccess = (location) => {
    Geocode.fromLatLng(
      location.coords.latitude,
      location.coords.longitude
    ).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        setLocation(address);
      },
      (error) => {
        console.error(error);
        setError(error);
        setLocation("");
      }
    );
    setLoading(false);
  };

  const onError = () => {
    setError("Permission denied");
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    if (!("geolocation" in navigator)) {
      setError("Geolocation not supported");
      setLoading(false);
      setLocation("");
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { loading, error, location };
};

export default useGeoLocation;
