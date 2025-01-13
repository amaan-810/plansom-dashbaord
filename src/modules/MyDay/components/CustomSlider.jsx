import React, { useState } from "react";
import "../styles/slider.css";
import { Button, Flex, Row,Typography } from "antd";
import leftArrow from '../../../assets/images/leftArrow.svg'
import rightArrow from '../../../assets/images/rightArrow.svg'
import Paragraph from "antd/es/typography/Paragraph";
import quickwins from "../../../assets/images/quickwins.jpg"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const CustomSlider = ({ slides }) => {
    const screens=useBreakpoint();

    const {Paragraph,Text}=Typography
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
        <Button type="text"
          className="slider-button prev"
          onClick={handlePrev}
          style={{ visibility: "visible" }}
        >
         <img src={leftArrow} alt=""/>
        </Button>
        <Button type="text"
          className="slider-button next"
          onClick={handleNext}
          style={{
            visibility: currentIndex === slides.length - 1 ? "hidden" : "visible",
          }}
        >
          <img src={rightArrow} alt=""/>
        </Button>
  
        {/* Slides */}
        <Row className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              width:"100%",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <div className="slider-slide" key={index} style={{
                // width: "",
                // // screens.lg && !screens.xl ? "3.5rem" : "",
                // // height: screens.sm && "3rem",
                overflow: "hidden",
                textOverflow:"ellipsis",
                whiteSpace: "nowarp"
                }}>
                <Flex className="" align="center" vertical style={{overflow:"hidden",width:"100%",height:"100%",}}>
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
  
  export default CustomSlider;