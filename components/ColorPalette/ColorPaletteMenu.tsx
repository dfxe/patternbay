import React from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { nanoid } from "nanoid";

type Props = {
  setPaletteUsed: (colorsUsed: string[]) => void;
};
export default function ColorPaletteMenu({ setPaletteUsed }: Props) {
  const getColors = (): JSX.Element[] => {
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
    let patterns: JSX.Element[] = [];
    for (let i = 0; i < colors.length; i++) {
      patterns.push(
        <ListItemButton
          key={nanoid()}
          aria-label="Circlezs Menu"
          sx={{
            display: "flex",
            backgroundColor: "#22222244",
            borderRadius: "30px",
            flexDirection: "row",
            marginLeft: "0",
            marginRight: "0",
            paddingRight: "0",
            paddingLeft: "0",
          }}
          onClick={() => {
            //use the color palette
            setPaletteUsed([...colors[i]]);
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

  return (
    <Box>
      <List
        sx={{
          overflowY: "auto",
          height: "12vh",
          border: "1px solid #eae3f1",
          borderRadius: "20px",
          padding: "1em 1em 1em 1em",
        }}
        className="grid grid-cols-4 gap-2"
      >
        {colorButtons.map((color) => color)}
      </List>
    </Box>
  );
}
