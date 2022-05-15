import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { nanoid } from "nanoid";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputColor from "../InputColor/InputColor";
import { keyframes, styled } from "@mui/material/styles";
import GradientRoundedIcon from "@mui/icons-material/GradientRounded";

const hoverAnim = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(2,2);
    z-index: 100;
  }
`;

interface Props {
  //setpalette has 3 parameters: firstColor, secondColor, thirdColor
  setPalette: Dispatch<
    SetStateAction<{
      firstColor: string;
      secondColor: string;
      thirdColor: string;
    }>
  >;
  hasThirdColor: boolean;
}
export default function ColorPaletteMenu({ setPalette, hasThirdColor }: Props) {
  const nightMode = useNightMode();
  const mqMin1256 = useMediaQuery("(min-width:1256px)");
  const colors = [
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
    ["#362d38", "#ae3103"],
    ["#70cf94", "#5f4874"],
  ];

  const [customColors, setCustomColors] = useState({
    firstColor: colors[0][0],
    secondColor: colors[0][1],
    thirdColor: "#8eb0ff",
  });

  const getColors = (): JSX.Element[] => {
    let patterns: JSX.Element[] = [];
    for (let i = 0; i < colors.length; i++) {
      //TODO colors are broken
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
          }}
          onClick={() => {
            //use the color palette

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
    setPalette({
      firstColor: customColors.firstColor,
      secondColor: customColors.secondColor,
      thirdColor: customColors.thirdColor,
    });
  }, [customColors]);

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

        left: mqMin1256! ? "30vw" : "36vw",
        bottom: mqMin1256 ? "1vh" : "6vh",

        backgroundColor: nightMode.getter ? "#383e4a" : " #eae3f1",
        borderRadius: "64px",
        padding: "1em",
        border: `5px solid ${nightMode.getter ? "#292d3655" : "#eae3f1"}`,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 100px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridGap: "0.5em",
          border: `2px solid ${nightMode.getter ? " #eae3f1" : "#383e4a"}`,
          borderRadius: "20px",
        }}
      >
        {colorButtons.map((color) => color)}
      </List>
      &nbsp;&nbsp;
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "1em 1em 1em 1em",
          border: `2px solid  ${nightMode.getter ? " #eae3f1" : "#383e4a"}`,
          borderRadius: "20px",
        }}
      >
        <GradientRoundedIcon
          htmlColor={nightMode.getter ? " #eae3f1" : "#383e4a"}
        ></GradientRoundedIcon>
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
      </Box>
      &nbsp;&nbsp;
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
