import React, { Dispatch, SetStateAction } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HalfRect from "../../images/GeometricShapes/HalfRect";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
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
import { keyframes } from "@emotion/react";
import { nanoid } from "nanoid";

type Props = {
  isFocusingOnShapes: boolean;
  selectedShapeIndex: number[];
  setIsFocusingOnShapes: Dispatch<SetStateAction<boolean>>;
  setSelectedShapeIndex: Dispatch<SetStateAction<number[]>>;
};
const ShapesPaletteMenu = ({
  isFocusingOnShapes,
  selectedShapeIndex,
  setIsFocusingOnShapes,
  setSelectedShapeIndex,
}: Props) => {
  //Todo change to some enum with the shape names, then call the shape name from the enum
  const allShapes = [
    <HalfRect key={nanoid()} color={"#6550a3"}></HalfRect>,
    <Cloud key={nanoid()} color={"#6550a3"}></Cloud>,
    <Circle key={nanoid()} color={"#6550a3"}></Circle>,
    <CurveLine key={nanoid()} color={"#6550a3"}></CurveLine>,
    <Flower key={nanoid()} color={"#6550a3"}></Flower>,
    <SemiCircle key={nanoid()} color={"#6550a3"}></SemiCircle>,
    <Heart key={nanoid()} color={"#6550a3"}></Heart>,
    <Oval key={nanoid()} color={"#6550a3"}></Oval>,
    <PieChart key={nanoid()} color={"#6550a3"}></PieChart>,
    <RoundedSquare key={nanoid()} color={"#6550a3"}></RoundedSquare>,
    <SpeechBubbleOne key={nanoid()} color={"#6550a3"}></SpeechBubbleOne>,
    <Square key={nanoid()} color={"#6550a3"}></Square>,
    <Triangle key={nanoid()} color={"#6550a3"}></Triangle>,
  ];
  const popUp = keyframes({
    from: { width: "10em", height: "5em" },
    to: { width: "30%", height: "60%" },
  });
  return (
    <List
      aria-label="ze-list"
      sx={
        isFocusingOnShapes
          ? {
              position: "absolute",
              left: "5%",
              display: "grid",
              gridTemplateColumns: `repeat(${4}, 1fr)`,
              gridTemplateRows: "auto",
              gridGap: "0.1em",
              padding: "20px",
              backgroundColor: "#eae3f1",
              borderRadius: "64px",
              animation: `${popUp} 1s ease-in-out 1`,
              animationPlayState: "initial",
              zindex: 100,
            }
          : {
              display: "grid",
              gridTemplateColumns: `repeat(${3}, 1fr)`,
              gridTemplateRows: "auto",
              gridGap: "0",
              backgroundColor: "#eae3f1",
              width: "10em",
              height: "5em",
              borderRadius: "64px",
              animation: `${popUp} 1s ease-in-out 1`,
              animationPlayState: "initial",
            }
      }
      onMouseEnter={() => setIsFocusingOnShapes(true)}
      onMouseLeave={() => setIsFocusingOnShapes(false)}
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
              ? "#f7c8b6"
              : "#eeeeee00",
            paddingLeft: "0",
            paddingRight: "0",
            marginLeft: "0",
            marginRight: "0",
            borderRadius: "30px",
          }}
        >
          <ListItemIcon
            sx={
              isFocusingOnShapes
                ? {
                    display: "flex",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                  }
                : {
                    display: "flex",
                    justifyContent: "center",
                    width: "12px",
                    height: "12px",
                    paddingLeft: "0",
                    paddingRight: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    zIndex: "4",
                  }
            }
          >
            {shape}
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};

export default ShapesPaletteMenu;
