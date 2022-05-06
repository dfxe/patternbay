import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { nanoid } from "nanoid";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";
import Button from "@mui/material/Button";
import InputColor from "../ControlPanel/Panels/InputColor";

type Props = {
  setPaletteUsed: (colorsUsed: string[]) => void;
};
export default function ColorPaletteMenu({ setPaletteUsed }: Props) {
  const nightMode = useNightMode();
  const colors = [
    //LilacLotion & ShallowWater
    ["#fc3d90", "#89ebf8"],
    ["#d9f9b8", "#e9f044"],
    ["#6f5a5a", "#69a594"],
    ["#79e7cd", "#485266"],
    ["#52c1a9", "#d985dc"],
    ["#17b662", "#7b8dac"],
    ["#f8e821", "#9e4299"],
    ["#639718", "#3c4bc5"],
    ["#5f96a3", "#ea3d64"],
    ["#0b7b6e", "#3c4ed4"],
    ["#0a371c", "#76ccd2"],
    ["#9f452d", "#c0f3dc"],
    ["#f7cd1f", "#56c6ae"],
    ["#e77ac6", "#00e4d8"],
  ];
  const [firstColor, setFirstColor] = React.useState(colors[0][0]);
  const [secondColor, setSecondColor] = React.useState(colors[0][1]);

  const getColors = (): JSX.Element[] => {
    let patterns: JSX.Element[] = [];
    for (let i = 0; i < colors.length; i++) {
      patterns.push(
        <ListItemButton
          key={nanoid()}
          aria-label="Circlezs Menu"
          sx={{
            display: "flex",

            borderRadius: "30px",
            flexDirection: "row",

            padding: "0.5em",
            width: "2em",
            height: "1em",
            "&: hover": {
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
          onClick={() => {
            //use the color palette
            setPaletteUsed([...colors[i]]);
            setFirstColor(colors[i][0]);
            setSecondColor(colors[i][1]);
          }}
        >
          <Box
            sx={{
              backgroundColor: colors[i][0],
              width: "2em",
              height: "1em",
              borderRadius: "64px 0 0 64px",
            }}
          />
          <Box
            sx={{
              backgroundColor: colors[i][1],
              width: "2em",
              height: "1em",
              borderRadius: "0 64px 64px 0",
            }}
          />
        </ListItemButton>
      );
    }
    return patterns;
  };
  const [colorButtons, setColorButtons] = React.useState<JSX.Element[]>(
    getColors()
  );

  useEffect(() => {
    setPaletteUsed([firstColor, secondColor]);
  }, [firstColor, secondColor]);

  //TODO add custom colors at the end of the list
  //TODO add can change the color of an individual entity
  return (
    <Box
      aria-label="current-colors"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        position: "absolute",

        left: "30vw",
        bottom: "1vh",

        backgroundColor: "#383e4a",
        borderRadius: "64px",
        padding: "1em",
      }}
    >
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",

          border: `1px solid ${nightMode.getter ? " #eae3f1" : "#383e4a"}`,
          borderRadius: "20px",
        }}
      >
        {colorButtons.map((color) => color)}
      </List>
      &nbsp;&nbsp;
      <InputColor
        colorValue={firstColor}
        setColorValue={setFirstColor}
        inputLabel={""}
      ></InputColor>
      <InputColor
        colorValue={secondColor}
        setColorValue={setSecondColor}
        inputLabel={""}
      ></InputColor>
    </Box>
  );
}
