"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const SliderBtn = ({ containerStyle, btnStyle, iconStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button
        aria-label="leftbtn"
        className={btnStyle}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button
        aria-label="rightbtn"
        className={btnStyle}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderBtn;
