import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import SliderUnstyled from "@mui/base/SliderUnstyled";

const M3SliderTemplate = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? "#604b9a" : "#90caf9"};
  height: 50px;
  width: 19%;
  padding: 13px 0;
  display: inline-block;
  position: absolute;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.9;

  z-index: 0;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-rail {
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 30px;
    background-color: currentColor;
    opacity: 0.38;
    z-index: 0;
  }

  & .MuiSlider-track {

    position: absolute;
    height: 40px;
    border-radius: 30px;
    background-color: currentColor;
    z-index: 0;
    top: -4px;
    :hover,
    &.Mui-focusVisible {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? "#1976d2" : "#90caf9",
        0.15
      )};
    }

    &.Mui-active {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? "#1976d2" : "#90caf9",
        0.3
      )};
    }
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 30px;
    height: 50px;
    border-radius:  30px ;
    outline: 0;
    top: -5px;
    border: 0px solid #ffffff00;
    background-color: #00000000;

  }

  @media (max-width: ${1024}px) {
    width: 70%;
    height: 50px;
    & .MuiSlider-rail {
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 30px;
      background-color: currentColor;
      opacity: 0.38;
      z-index: 0;
    }
  }

`
);

type Props = {
  sliderLabel: string;
  defaultValue: number;
  step: number;
  min: number;
  max: number;
  canRemoveThis: boolean;
  onChangeMod: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};
const M3Slider = ({
  canRemoveThis,
  step,
  min,
  max,
  defaultValue,
  onChangeMod,
}: Props) => {
  const mqMin1024 = useMediaQuery("(min-width:1024px)");
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <Box
      sx={{
        width: mqMin1024 ? "18vw" : "80vw",
        marginLeft: "0",
        borderRadius: "30px",
      }}
    >
      {isMouseEnter && canRemoveThis && (
        <button
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2em",
            height: "2em",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "none",
            top: mqMin1024 ? "10vh" : "1vh",
            cursor: "pointer",
            zIndex: 99,
          }}
        >
          x
        </button>
      )}
      <Typography
        sx={{
          positon: "absolute",
          marginTop: "1em",
          paddingLeft: "1em",
          color: "black",
          marginBottom: 0,
          paddingBottom: 0,
        }}
        variant="body1"
        gutterBottom
        component="div"
      >
        {/*sliderTitle !== ""
          ? sliderTitle + " " + value + valueStyle
      : value + valueStyle*/}
      </Typography>
      <M3SliderTemplate
        step={step}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={onChangeMod}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      />
    </Box>
  );
};
export default React.memo(M3Slider);
