import React, { useState } from "react";
import { Funnel } from "../../types";
import { FunnelComponent } from "../funnelPageComponent/FunnelPageComponent";

interface CarouselProps {
  funnel: Funnel;
}

const CarouselComponent: React.FC<CarouselProps> = ({ funnel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % funnel.pages.length);
  };
  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + funnel.pages.length) % funnel.pages.length
    );
  };

  return (
    <div>
      <h1 className="text-white">{funnel.name}</h1>
      <div className="carousel-container flex items-center">
        <button className="h-12" onClick={handlePrev}>{`<`}</button>
        <div className="flex flex-col items-center transition duration-700">
          <FunnelComponent
            funnel={funnel.pages[currentIndex]}
            bgColor={funnel.bgColor}
          />
          <div className="flex justify-around">
            {funnel.pages.map((_, index) => (
              <div
                style={{
                  backgroundColor: index === currentIndex ? "white" : "#888",
                  width: "20px",
                  borderRadius: "50px",
                  height: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleSlide(index)}
              />
            ))}
          </div>
        </div>
        <button className="h-12" onClick={handleNext}>{`>`}</button>
      </div>
    </div>
  );
};

export { CarouselComponent };
