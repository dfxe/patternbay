import React from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import RoundedCornerSharpIcon from "@mui/icons-material/RoundedCornerSharp";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";
type Props = {
  params: {
    default: number;
    min: number;
    max: number;
    step: number;
  };
  setBorderRadius: (value: number) => void;
  nightModeSwitch: boolean;
};
const BorderSlider = ({ params, setBorderRadius, nightModeSwitch }: Props) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ mb: 1, position: "relative" }}
      alignItems="center"
      gap={1}
    >
      <Tooltip placement="top" title="Sharp Corners">
        <RoundedCornerSharpIcon
          htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
        ></RoundedCornerSharpIcon>
      </Tooltip>
      <DefaultMarkedMUISlider
        defaultValue={params.default}
        step={params.step}
        min={params.min}
        max={params.max}
        markPoints={null}
        onChangeMod={(e) => {
          setBorderRadius(+(e.target as HTMLInputElement).value);
        }}
      />
      <Tooltip placement="top" title="Round Corners">
        <RoundedCornerIcon
          htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
        ></RoundedCornerIcon>
      </Tooltip>
    </Stack>
  );
};

export default BorderSlider;
