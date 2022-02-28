import { useState, useEffect } from "react";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};
const useTextTitle = (smallScreen, largeScreen) => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 560 ? smallScreen : largeScreen;
};

export default useTextTitle;
