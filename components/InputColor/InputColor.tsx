import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useColors } from "../ControlPanel/Providers/ColorProvider";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";

type Props = {
  colorValue: string;
  setColorValue: (color: string) => void;
  inputLabel: string;
};
const InputColor = ({ colorValue, setColorValue, inputLabel }: Props) => {
  const nightMode = useNightMode();
  return (
    <Box
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <input
        type="color"
        name="favcolor"
        id="input-primary-color"
        value={colorValue}
        onChange={(e) => +(e.target as HTMLInputElement).value}
      />
      <Typography
        gutterBottom
        variant="body2"
        sx={{
          color: nightMode.getter ? "#eae3f1" : "#3f383b",
        }}
      >
        {/* &nbsp;&nbsp;
        {colorValue} <br /> */}
        &nbsp;&nbsp;
        {inputLabel}
      </Typography>
    </Box>
  );
};
export default InputColor;
