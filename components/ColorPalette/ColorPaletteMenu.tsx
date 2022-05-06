import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { nanoid } from "nanoid";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";

import InputColor from "../ControlPanel/Panels/InputColor";
import { keyframes, styled } from "@mui/material/styles";

const hoverAnim = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(2,2);
    z-index: 100;
  }
`;

type Props = {
  setPaletteUsed: (colorsUsed: string[]) => void;
  hasThirdColor: boolean;
};
export default function ColorPaletteMenu({
  setPaletteUsed,
  hasThirdColor,
}: Props) {
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

  const [customColors, setCustomColors] = useState({
    firstColor: colors[0][0],
    secondColor: colors[0][1],
    thirdColor: "",
  });

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
            "&:hover": {
              animation: `${hoverAnim} 0.2s ease forwards`,
            },
          }}
          onClick={() => {
            //use the color palette
            setPaletteUsed([...colors[i]]);
            setCustomColors({
              firstColor: colors[i][0],
              secondColor: colors[i][1],
              thirdColor: hasThirdColor ? "gray" : "",
            });
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
    setPaletteUsed([customColors.firstColor, customColors.secondColor]);
  }, [customColors.firstColor, customColors.secondColor]);

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

        backgroundColor: nightMode.getter ? "#383e4a" : " #eae3f1",
        borderRadius: "64px",
        padding: "1em",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
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
        colorValue={customColors.firstColor}
        setColorValue={(color) =>
          setCustomColors({ ...customColors, firstColor: color })
        }
        inputLabel={""}
      />
      <InputColor
        colorValue={customColors.secondColor}
        setColorValue={(color) =>
          setCustomColors({ ...customColors, secondColor: color })
        }
        inputLabel={""}
      />
      {/* TODO third has to be available in aesthetics baym */}
      {hasThirdColor && (
        <InputColor
          colorValue={customColors.thirdColor}
          setColorValue={(color) =>
            setCustomColors({ ...customColors, thirdColor: color })
          }
          inputLabel={""}
        />
      )}
    </Box>
  );
}
