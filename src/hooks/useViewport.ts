import React, { useState, useEffect } from "react";

const useViewport = () => {
  const isBrowser = typeof window !== "undefined";

  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 1080);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Return the width so we can use it in our components
  return { width };
};

export default useViewport;
