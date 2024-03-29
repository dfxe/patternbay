import React from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import ScreenRotationAltRoundedIcon from "@mui/icons-material/ScreenRotationAltRounded";
import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";
//@ts-ignore
import { Mark } from "@mui/base/SliderUnstyled/SliderUnstyledProps";
type Props = {
  params: {
    default: number;
    min: number;
    max: number;
    step: number;
  };
  setRotation: (rotation: number) => void;
  markPoints?: Mark[];
  nightModeSwitch: boolean;
};
const RotationSlider = ({
  params,
  setRotation,
  markPoints,
  nightModeSwitch,
}: Props) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ mb: 1, position: "relative" }}
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Tooltip placement="top" title="Gradient Rotation">
        <ScreenRotationAltRoundedIcon
          htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
        ></ScreenRotationAltRoundedIcon>
      </Tooltip>
      <DefaultMarkedMUISlider
        sliderLabel=""
        defaultValue={params.default}
        step={params.step}
        min={params.min}
        max={params.max}
        markPoints={markPoints ? markPoints : undefined}
        onChangeMod={(e) => {
          setRotation(+(e.target as HTMLInputElement).value);
        }}
      />
    </Stack>
  );
};

export default RotationSlider;
