import React, { useState, useEffect, ReactEventHandler } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import CircleGenerator from "./CircleGenerator";

import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import Tooltip from "@mui/material/Tooltip";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";
type Props = {
  concentricsNumber: number;
};
const CircleUnit = ({ concentricsNumber }: Props) => {
  //This is just one of the concentric circles with the slider
  const [currentSliderNum, setCurrentSliderNum] = useState(1);
  const nightMode = useNightMode();
  //TODO fix reseting numbers of concentrics
  const mqMin1024 = useMediaQuery("(min-width:1024px)");

  const handleThisNumber = (eventNo: number) => {
    setCurrentSliderNum(eventNo);
  };
  //TODO fix value label zindex, div scroll issue
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        aria-label="circle-unit-container"
        sx={{
          position: mqMin1024 ? "absolute" : "fixed",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          top: mqMin1024 ? "40vh" : "30vh",
          left: mqMin1024 ? "20vw" : "15vw",
          backgroundColor: mqMin1024 ? "#00000000" : "#efefff",
          zIndex: mqMin1024 ? "999999" : "11",
        }}
      >
        {/* These are the concentric circles */}
        <CircleGenerator
          entityNumber={currentSliderNum}
          concentricsNumber={concentricsNumber}
        />
      </Box>

      <Box
        aria-label="circle-unit-slider"
        sx={{
          position: mqMin1024 ? "absolute" : "fixed",
          display: "flex",
          flexDirection: mqMin1024 ? "row" : "column",

          borderRadius: 1,
          left: mqMin1024 ? "75vw" : "15vw",
          top: mqMin1024 ? `${-10 + concentricsNumber * 10}vh` : "30vh",
          width: "100%",
          height: "50%",
          overflowY: "scroll",
          padding: "1.5rem",
          zIndex: 9999,
        }}
        //fix position of concentric icon
        gap={1}
      >
        <Tooltip placement="top" title="Concentric">
          <AdjustRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></AdjustRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
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
    </Box>
  );
};

export default React.memo(CircleUnit);
