import React from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import PhotoSizeSelectLargeRoundedIcon from "@mui/icons-material/PhotoSizeSelectLargeRounded";
import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";

type Props = {
  params: {
    default: number;
    min: number;
    max: number;
    step: number;
  };
  setSize: (value: number) => void;
  nightModeSwitch: boolean;
};
const SizeSlider = ({ params, setSize, nightModeSwitch }: Props) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ mb: 1, position: "relative" }}
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Tooltip placement="top" title="Size">
        <PhotoSizeSelectLargeRoundedIcon
          htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
        ></PhotoSizeSelectLargeRoundedIcon>
      </Tooltip>
      <DefaultMarkedMUISlider
        defaultValue={params.default}
        step={params.step}
        min={params.min}
        max={params.max}
        onChangeMod={(e) => {
          setSize(+(e.target as HTMLInputElement).value);
        }}
      />
    </Stack>
  );
};

export default SizeSlider;
