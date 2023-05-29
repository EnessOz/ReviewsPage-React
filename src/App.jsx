import React, { useState } from "react";
import reviews from "./data";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import ContainerComp from "./components/container";


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = reviews.length;

  const handlePrev = () => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * totalItems);
    setCurrentIndex(randomIndex);
  };

  return (
    <ContainerComp
      reviews={reviews}
      currentIndex={currentIndex}
      handleNext={handleNext}
      handlePrev={handlePrev}
      handleRandom={handleRandom}
      AiOutlineArrowLeft={AiOutlineArrowLeft}
      AiOutlineArrowRight={AiOutlineArrowRight}
      GiPerspectiveDiceSixFacesRandom={GiPerspectiveDiceSixFacesRandom}
    />
  );
};

export default App;