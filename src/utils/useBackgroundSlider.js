import { useState, useEffect } from "react";

const useBackgroundSlider = (imageArray, intervalTime = 5000) => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % imageArray.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [imageArray, intervalTime]);

  return currentBg;
};

export default useBackgroundSlider;
// This custom hook manages the background image slider functionality.
// It takes an array of image URLs and an optional interval time (default is 5000ms).