import React, { useState, useEffect, ReactEventHandler } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import CircleGenerator from "./CircleGenerator";

import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";

type Props = {
  concentricsNumber: number;
};
const CircleUnit = ({ concentricsNumber }: Props) => {
  //This is just one of the concentric circles with the slider
  const [currentSliderNum, setCurrentSliderNum] = useState(1);
  //TODO fix reseting numbers of concentrics
  const mqMin1024 = useMediaQuery("(min-width:1024px)");

  const handleThisNumber = (eventNo: number) => {
    setCurrentSliderNum(eventNo);
  };

  return (
    <>
      <Box
        aria-label="Circlez Menu"
        sx={{
          position: mqMin1024 ? "fixed" : "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: mqMin1024 ? "50vh" : "30vh",
          left: mqMin1024 ? "45vw" : "15vw",
          backgroundColor: mqMin1024 ? "#00000000" : "#efefff",
          zIndex: mqMin1024 ? "11" : "11",
        }}
      >
        {/* These are the concentric circles */}
        <CircleGenerator
          entityNumber={currentSliderNum}
          concentricsNumber={concentricsNumber}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: mqMin1024 ? "row" : "column",
          borderRadius: 1,
          zIndex: 4,
        }}
        hidden={false}
      >
        <DefaultMarkedMUISlider
          sliderLabel="Concentrics"
          defaultValue={1}
          min={0}
          max={15}
          step={1}
          markPoints={[
            { value: 1, label: "1" },
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 15, label: "15" },
          ]}
          onChangeMod={(e) => {
            handleThisNumber(+(e.target as HTMLInputElement).value);
          }}
        />
      </Box>
    </>
  );
};

export default React.memo(CircleUnit);
