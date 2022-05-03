import React, { Dispatch, SetStateAction } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HalfRect from "../../images/GeometricShapes/HalfRect";

import Cloud from "../../images/GeometricShapes/Cloud";
import Circle from "../../images/GeometricShapes/Circle";
import CurveLine from "../../images/GeometricShapes/CurveLine";
import Flower from "../../images/GeometricShapes/Flower";

import Heart from "../../images/GeometricShapes/Heart";
import Oval from "../../images/GeometricShapes/Oval";
import PieChart from "../../images/GeometricShapes/PieChart";
import RoundedSquare from "../../images/GeometricShapes/RoundedSquare";
import SemiCircle from "../../images/GeometricShapes/SemiCircle";
import SpeechBubbleOne from "../../images/GeometricShapes/SpeechBubbleOne";
import Square from "../../images/GeometricShapes/Square";
import Triangle from "../../images/GeometricShapes/Triangle";
//@ts-ignore
import { keyframes } from "@emotion/react";
import { nanoid } from "nanoid";
import Diamond from "../../images/GeometricShapes/Diamond";

type Props = {
  selectedShapeIndex: number[];

  setSelectedShapeIndex: Dispatch<SetStateAction<number[]>>;
};
const ShapesPaletteMenu = ({
  selectedShapeIndex,

  setSelectedShapeIndex,
}: Props) => {
  //Todo change to some enum with the shape names, then call the shape name from the enum
  const allShapes = [
    <HalfRect key={nanoid()} color={"#6068d2"}></HalfRect>,
    <Cloud key={nanoid()} color={"#6068d2"}></Cloud>,
    <Circle key={nanoid()} color={"#6068d2"}></Circle>,
    <CurveLine key={nanoid()} color={"#6068d2"}></CurveLine>,
    <Flower key={nanoid()} color={"#6068d2"}></Flower>,
    <SemiCircle key={nanoid()} color={"#6068d2"}></SemiCircle>,
    <Heart key={nanoid()} color={"#6068d2"}></Heart>,
    <Oval key={nanoid()} color={"#6068d2"}></Oval>,
    <PieChart key={nanoid()} color={"#6068d2"}></PieChart>,
    <RoundedSquare key={nanoid()} color={"#6068d2"}></RoundedSquare>,
    <SpeechBubbleOne key={nanoid()} color={"#6068d2"}></SpeechBubbleOne>,
    <Square key={nanoid()} color={"#6068d2"}></Square>,
    <Triangle key={nanoid()} color={"#6068d2"}></Triangle>,
    <Diamond key={nanoid()} color={"#6068d2"}></Diamond>,
  ];

  return (
    <List
      aria-label="ze-list"
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${4}, 1fr)`,
        gridTemplateRows: "auto",
        gridGap: "4px",
        width: "100%",
        overflowY: "scroll",
        height: "20vh",
      }}
    >
      {allShapes.map((shape, i) => (
        <ListItemButton
          key={nanoid()}
          onClick={() =>
            setSelectedShapeIndex(
              selectedShapeIndex.includes(i)
                ? selectedShapeIndex.filter((index) => index !== i)
                : [...selectedShapeIndex, i]
            )
          }
          sx={{
            backgroundColor: selectedShapeIndex.includes(i)
              ? "#b6b5e5"
              : "#eeeeee00",
            paddingLeft: "0",
            paddingRight: "0",
            marginLeft: "0",
            marginRight: "0",
            borderRadius: "30px",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",

              width: "20px",
              height: "20px",
              paddingLeft: "0",
              paddingRight: "0",
              marginLeft: "0",
              marginRight: "0",
              zIndex: "4",
            }}
          >
            {shape}
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};

export default ShapesPaletteMenu;
