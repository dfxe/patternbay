//@ts-nocheck
//TODO fix types - not important now, fix when it is
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useOnWindowResize, useMouse } from "rooks";
import "./waveSlider.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type Props = {
  sliderLabel: string;
  defaultValue: number;
  step: number;
  min: number;
  max: number;
  strokeColor: string;
  strokeWidth: number;
  animateWavePath: boolean;
  waveOffset: number;
  waveStraightenOffset: number;
  backbarSX: string;
  svgSX: string;
  sx: string;
  isValueLabelHidden: boolean;
  onChangeMod: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};
const WaveSlider = ({
  onChangeMod,

  min,
  max,
  step,
  strokeColor,
  strokeWidth,
  animateWavePath,
  waveOffset,
  waveStraightenOffset,
  backbarSX,
  svgSX,
  sx,
  isValueLabelHidden,
}: Props) => {
  const [animateNow, setAnimateNow] = useState(false);
  const sliderInputRef = React.useRef(null);
  const wavePathRef = React.useRef(null);
  const [tooltipLabelPosition, setTooltipLabelPosition] = useState("");
  const mousePos = useMouse();

  const composeBezierWavePath = (
    isWavy: boolean,
    coordsY: number,
    pathEndValue: number,
    maxSteps: number
  ) => {
    let wavePath = `M-10 40 Q${waveStraightenOffset} 40,0 40 `;

    //perfect for mobile widths, but still no extra marks between
    const normalizer = () => {
      //heuristic to determine how many marks to add
      if (sliderInputRef.current) {
        return (
          (sliderInputRef.current.getBoundingClientRect().x / maxSteps) *
          waveOffset
        );
      }
      return (backbarSX.width / maxSteps) * waveOffset;
    };
    //stepRate = Math.floor(max / step)
    const stepRate = step;
    let lastStep = "";
    for (let i = 0; i <= pathEndValue; i += stepRate) {
      wavePath += `T ${i * normalizer()} ${coordsY} `;
      lastStep = `${i * normalizer()}`;
    }
    //add circle end
    //setTooltipLabelPosition((parseInt(lastStep, 10) + 20).toString());
    wavePath += "m -20, 0 a 2,2 20 1,0 20,0 a 5,5 0 1,0 -20,0";
    return wavePath;
  };
  const [inputValue, setInputValue] = useState(min);
  const [wavePathD, setWavePathD] = useState(
    `M0 20 Q${waveStraightenOffset} 20,0 20 T ${10} ${30} m -20, 0 a 2,2 20 1,0 20,0 a 5,5 0 1,0 -20,0 `
  );

  const [isSelected, setIsSelected] = useState(false);

  //TODO animate it like in the android 12 example
  const handleAnimOnChange = (isAnimating) => {
    if (isAnimating) {
      if (wavePathRef.current !== "undefined") {
        wavePathRef?.current.animate(
          [
            // keyframes
            { strokeDasharray: 10, strokeDashoffset: 100 },
            { strokeDashoffset: 0 },
          ],
          {
            // timing options
            duration: 1000,
            iterations: 1,
            direction: "normal",
            easing: "linear",
          }
        );
      }
    }
  };

  const tooltipCorrectionFn = () => {
    //TODO needs tests
    if (tooltipLabelPosition?.length > 1) {
      return (
        (mousePos!.x! > parseInt(tooltipLabelPosition.replace(/^\D+/g, ""), 10)
          ? mousePos!.x!.toString()
          : mousePos!.x!.toString()) + "px"
      );
    }
    return mousePos!.x!.toString() + "px";
  };
  return (
    <>
      <div style={backbarSX}></div>
      <input
        type="range"
        ref={sliderInputRef}
        className="waveSlider"
        min={min}
        max={max}
        step={step}
        value={inputValue}
        style={sx}
        onInput={(e) => {
          e.preventDefault();
          onChangeMod(e);
          setInputValue(+(e.target as HTMLInputElement).value);
          setWavePathD(() =>
            composeBezierWavePath(
              10,
              30,
              +(e.target as HTMLInputElement).value,
              max
            )
          );
          setAnimateNow(!animateNow);

          setTooltipLabelPosition(() => tooltipCorrectionFn());
        }}
        onChange={(e) => {
          e.preventDefault();

          setInputValue(+e.target.value);
          setWavePathD(() =>
            composeBezierWavePath(10, 30, +e.target.value, max)
          );
          handleAnimOnChange(animateWavePath);
        }}
        onMouseEnter={(e) => {
          e.preventDefault();
          setIsSelected(true);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setIsSelected(false);
        }}
      />
      <svg
        style={{ ...svgSX }}
        aria-readonly="true"
        preserveAspectRatio="xMinYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={wavePathD}
          ref={wavePathRef}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div
        className="waveSlider-input-value-tag"
        style={{
          display: isValueLabelHidden
            ? "none"
            : inputValue <= 0
            ? "none"
            : isSelected
            ? "block"
            : "none",
          position: "absolute",
          top: "-15px",
          left: tooltipLabelPosition,
          zIndex: "999",
        }}
      >
        <Typography
          sx={{ margin: "0 auto", positon: "absolute", color: "black" }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {inputValue}
        </Typography>
      </div>
    </>
  );
};

export default React.memo(WaveSlider);
