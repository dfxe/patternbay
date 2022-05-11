import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { keyframes, styled } from "@mui/material/styles";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";
import { Mark } from "@mui/base/SliderUnstyled/SliderUnstyledProps";
import { formLabelClasses } from "@mui/material";
function valuetext(value: number) {
  return `${value}°C`;
}
const hoverAnim = keyframes`
  0% {
    
    transform: scale(1) translate(-11px,-10px);

  }

  100% {

    transform: scale(1.4) translate(-11px,-10px);

  }
`;
const PrettoSlider = styled(Slider)({
  color: "#6068d2",
  height: "10px",
  width: "90%",
  paddingInlineStart: 10,

  "& .MuiSlider-track": {
    border: "none",

    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    transition: "all 0.2s ease",

    "&:focus, &:hover, &:active": {
      boxShadow: "inherit #292d36",
      animation: `${hoverAnim} 0.5s ease forwards`,
    },

    "$:not(:hover), &:not(:focus), &:not(:active)": {
      animation: `${hoverAnim} 0.5s ease backwards`,
    },

    "&:before": {
      display: "none",
    },
  },

  "& .MuiSlider-markLabel": {
    //TODO: add night mode
    color: "#6068d2",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",

    backgroundColor: "#6068d2",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

interface Props {
  sliderLabel?: string;
  disabled?: boolean;
  defaultValue: number;
  min: number;
  max: number;
  markPoints?: Mark[];
  step: number;
  onChangeMod: (e: React.ChangeEvent<{}>) => void;
}

export default function DefaultMarkedMUISlider({
  sliderLabel,
  disabled,
  defaultValue,
  step,
  min,
  max,
  markPoints,
  onChangeMod,
}: Props) {
  const nightMode = useNightMode();
  return (
    <Box
      sx={{
        width: "18vw",
        marginTop: 0,
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      <Typography
        id="track-false-range-slider"
        sx={{
          color: nightMode.getter ? "#eae3f1" : "#3f383b",
          fontWeight: "bold",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
        }}
        gutterBottom
        aria-label={sliderLabel}
      >
        {sliderLabel}
      </Typography>

      <PrettoSlider
        disabled={disabled}
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        step={step}
        marks={markPoints ? markPoints : true}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        //@ts-ignore
        onChange={onChangeMod}
      />
    </Box>
  );
}
