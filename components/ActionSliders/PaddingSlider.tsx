import React from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import PaddingRoundedIcon from "@mui/icons-material/PaddingRounded";
import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";
type Props = {
  params: {
    default: number;
    min: number;
    max: number;
    step: number;
  };
  setPadding: (value: number) => void;
  nightModeSwitch: boolean;
};
const PaddingSlider = ({ params, setPadding, nightModeSwitch }: Props) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ mb: 1, position: "relative" }}
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Tooltip placement="top" title="Padding">
        <PaddingRoundedIcon
          htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
        ></PaddingRoundedIcon>
      </Tooltip>
      <DefaultMarkedMUISlider
        defaultValue={params.default}
        step={params.step}
        min={params.min}
        max={params.max}
        onChangeMod={(e: Event) => {
          setPadding(+(e.target as HTMLInputElement).value * 10);
        }}
      />
    </Stack>
  );
};

export default PaddingSlider;
