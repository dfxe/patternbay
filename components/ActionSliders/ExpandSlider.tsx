import React from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import ExpandRoundedIcon from "@mui/icons-material/ExpandRounded";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";
import DefaultMarkedMUISlider from "../DStyles/DefaultMarkedMUISlider";
type Props = {
  params: {
    default: number;
    min: number;
    max: number;
    step: number;
    label?: string;
  };
  setExpand: (expand: number) => void;
  nightModeSwitch: boolean;
};
const ExpandSlider = ({ params, setExpand, nightModeSwitch }: Props) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ mb: 1, position: "relative" }}
      alignItems="center"
      gap={1}
    >
      <Tooltip placement="top" title={params.label || "Option"}>
        {params.label === "Gap" ? (
          <ExpandRoundedIcon
            htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
          ></ExpandRoundedIcon>
        ) : (
          <ViewColumnRoundedIcon
            htmlColor={nightModeSwitch ? "#eae3f1" : "#231f22"}
          ></ViewColumnRoundedIcon>
        )}
      </Tooltip>
      <DefaultMarkedMUISlider
        defaultValue={params.default}
        step={params.step}
        min={params.min}
        max={params.max}
        onChangeMod={(e) => {
          setExpand(+(e.target as HTMLInputElement).value);
        }}
      />
    </Stack>
  );
};

export default ExpandSlider;
