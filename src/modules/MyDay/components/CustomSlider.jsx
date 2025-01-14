import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/slider.css";
import { Button, Flex, Row } from "antd";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import quickwins from "../../../assets/images/quickwins.jpg";

const CustomSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Row className="slider-card">
      {/* Navigation Buttons */}
      <Button
        type="text"
        className="slider-button prev"
        onClick={handlePrev}
        style={{ visibility: "visible" }}
      >
        <img src={leftArrow} alt="" />
      </Button>
      <Button
        type="text"
        className="slider-button next"
        onClick={handleNext}
        style={{
          visibility: currentIndex === slides.length - 1 ? "hidden" : "visible",
        }}
      >
        <img src={rightArrow} alt="" />
      </Button>

      {/* Slides */}
      <Row className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            width: "100%",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <div className="slider-slide" key={slide.task.id} style={{}}>
              <Flex
                className=""
                align="center"
                vertical
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <img src={quickwins} alt="" className="slide-image" />
                <p className="slide-title f-sfpro">{slide.task.name}</p>
              </Flex>
            </div>
          ))}
        </div>
      </Row>
    </Row>
  );
};

CustomSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.shape({
        name: PropTypes.string.isRequired, // Task name is required
      }).isRequired,
    })
  ).isRequired, // The slides array is required
};

export default CustomSlider;
