import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
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

type Props = {
  sliderLabel: string;
  defaultValue: number;
  step: number;
  min: number;
  max: number;
  onChangeMod: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};
export default function DefaultMUISlider({
  sliderLabel,
  defaultValue,
  step,
  min,
  max,
  onChangeMod,
}: Props) {
  return (
    <Box sx={{ width: 320 }}>
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider
        defaultValue={defaultValue}
        step={step}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={onChangeMod}
        sx={{ backgroundColor: "#f5f5f5" }}
      />
    </Box>
  );
}
