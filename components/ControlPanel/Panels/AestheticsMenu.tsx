import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNightMode } from "../Providers/NightModeProvider";
import { useGPSize } from "../Providers/GPSizeProvider";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import { nanoid } from "nanoid";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import InputColor from "./InputColor";
import HalfRect from "../../../images/GeometricShapes/HalfRect";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
import Cloud from "../../../images/GeometricShapes/Cloud";
import Circle from "../../../images/GeometricShapes/Circle";
import CurveLine from "../../../images/GeometricShapes/CurveLine";
import Flower from "../../../images/GeometricShapes/Flower";

import Heart from "../../../images/GeometricShapes/Heart";
import Oval from "../../../images/GeometricShapes/Oval";
import PieChart from "../../../images/GeometricShapes/PieChart";
import RoundedSquare from "../../../images/GeometricShapes/RoundedSquare";
import SemiCircle from "../../../images/GeometricShapes/SemiCircle";
import SpeechBubbleOne from "../../../images/GeometricShapes/SpeechBubbleOne";
import Square from "../../../images/GeometricShapes/Square";
import Triangle from "../../../images/GeometricShapes/Triangle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Divider from "@mui/material/Divider";
import ShapesPaletteMenu from "../../ShapesPalette/ShapesPaletteMenu";
import MenuBackdrop from "./MenuBackdrop";

type ConstructableData = {
  index: number;
  rotation: number;
  color: string;
};
type Patternz = {
  patterns: JSX.Element[];
  constructables: ConstructableData[];
};
export default function GeometricPatterns() {
  const [cols, setCols] = useState(4);
  const defaultWidth = 500;
  const defaultHeight = 500;
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const [padding, setPadding] = useState(20);
  const [isFocusingOnShapes, setIsFocusingOnShapes] = useState(false);
  const [gBackgroundColor, setGBackgroundColor] = useState("#180c23");

  const [colorsUsed, setColorsUsed] = useState<string[]>([
    "#6f5a5a",
    "#69a594",
  ]);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState<number[]>([]);
  const [alignment, setAlignment] = useState("deg90");

  const handleChange = (
    //@ts-ignore
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const nightMode = useNightMode();
  const gpSize = useGPSize();
  const NUMBER_OF_SHAPES = 13;

  const getSelectedShape = (constructable: ConstructableData): JSX.Element => {
    const stylez = {
      rotate: constructable.rotation,
      color: constructable.color,
    };
    switch (constructable.index) {
      case 0:
        return <HalfRect key={nanoid()} {...stylez} />;
      case 1:
        return <Cloud key={nanoid()} {...stylez} />;
      case 2:
        return <Circle key={nanoid()} {...stylez} />;
      case 3:
        return <CurveLine key={nanoid()} {...stylez} />;
      case 4:
        return <Flower key={nanoid()} {...stylez} />;
      case 5:
        return <SemiCircle key={nanoid()} {...stylez} />;
      case 6:
        return <Heart key={nanoid()} {...stylez} />;
      case 7:
        return <Oval key={nanoid()} {...stylez} />;
      case 8:
        return <PieChart key={nanoid()} {...stylez} />;
      case 9:
        return <RoundedSquare key={nanoid()} {...stylez} />;
      case 10:
        return <SpeechBubbleOne key={nanoid()} {...stylez} />;
      case 11:
        return <Square key={nanoid()} {...stylez} />;
      case 12:
        return <Triangle key={nanoid()} {...stylez} />;
      default:
        return <Flower key={nanoid()} {...stylez} />;
    }
  };

  const generatePatternsRandomly = (
    maxPatterns: number,
    selectedIndexes: number[],
    rotationDegree: number
  ): Patternz => {
    let patterns: JSX.Element[] = [];
    let constructables: ConstructableData[] = [];

    for (let i = 0; i < maxPatterns; i++) {
      constructables.push({
        index:
          selectedIndexes.length > 0
            ? selectedIndexes[
                Math.floor(Math.random() * selectedIndexes.length)
              ]
            : Math.floor(Math.random() * NUMBER_OF_SHAPES),
        rotation: rotationDegree,
        color: colorsUsed[Math.floor(Math.random() * colorsUsed.length)],
      });

      patterns.push(
        getSelectedShape(constructables[constructables.length - 1])
      );
    }
    return { patterns, constructables } as Patternz;
  };
  const [patterns, setPatterns] = useState<Patternz>(
    generatePatternsRandomly(cols * cols, selectedShapeIndex, +alignment)
  );

  const reconstructPatterns = (
    indexes: number[],
    rotationDegs: number,
    colors: string[]
  ): JSX.Element[] => {
    let patterns: JSX.Element[] = [];
    for (let i = 0; i < indexes.length; i++) {
      patterns.push(
        getSelectedShape({
          index: indexes[i],
          rotation: rotationDegs,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      );
    }
    return patterns;
  };

  useEffect(() => {
    setPatterns(
      generatePatternsRandomly(cols * cols, selectedShapeIndex, +alignment)
    );
  }, []);

  useEffect(() => {
    setPatterns(
      generatePatternsRandomly(cols * cols, selectedShapeIndex, +alignment)
    );
  }, [cols, selectedShapeIndex]);

  useEffect(() => {
    let indexes: number[] = [];
    for (let i = 0; i < patterns.constructables.length; i++) {
      indexes.push(patterns.constructables[i].index);
    }
    //TODO Need to keep same color shape
    setPatterns({
      patterns: reconstructPatterns(indexes, +alignment, colorsUsed),
      constructables: patterns.constructables,
    });
  }, [colorsUsed, alignment]);

  return (
    <MenuBackdrop>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: nightMode.getter! ? "#eae3f1" : "#231f22",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        <InterestsRoundedIcon
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
        />
        &nbsp; Aesthetics Bay
      </Typography>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Height"
          defaultValue={gpSize.params.default.height}
          step={gpSize.params.step.height}
          min={gpSize.params.minSize.height}
          max={gpSize.params.maxSize.height}
          markPoints={null}
          /* TODO need onInput instead of updates every frame w/ onChange */
          onChangeMod={(e) => {
            setHeight(
              +(e.target as HTMLInputElement).value * 10 + defaultHeight
            );
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Width"
          defaultValue={gpSize.params.default.width}
          step={gpSize.params.step.width}
          min={gpSize.params.minSize.width}
          max={gpSize.params.maxSize.width}
          markPoints={null}
          onChangeMod={(e) => {
            setWidth(+(e.target as HTMLInputElement).value * 10 + defaultWidth);
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Column Number"
          defaultValue={4}
          step={1}
          min={1}
          max={10}
          markPoints={null}
          onChangeMod={(e) => {
            setCols(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Padding"
          defaultValue={2}
          step={1}
          min={2}
          max={10}
          markPoints={null}
          onChangeMod={(e) => {
            setPadding(+(e.target as HTMLInputElement).value * 10);
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            sx={{
              borderRadius: "30px 0 30px 0",
              width: "3em",
              height: "3em",
              color: nightMode.getter ? "#eae3f1" : "#231f22",
            }}
            value="0"
          >
            0°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="45"
          >
            45°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="90"
          >
            90°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="135"
          >
            135°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="180"
          >
            180°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="225"
          >
            225°
          </ToggleButton>
          <ToggleButton
            sx={{
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="270"
          >
            270°
          </ToggleButton>
          <ToggleButton
            sx={{
              borderRadius: "30px 30px 0 0",
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
            }}
            value="315"
          >
            315°
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider />
      <ColorPaletteMenu setPaletteUsed={setColorsUsed} />

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography className="text-bro-dark dark:text-ind-light">
          Background Color
        </Typography>
        <InputColor
          colorValue={gBackgroundColor}
          setColorValue={setGBackgroundColor}
          inputLabel={"background"}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ShapesPaletteMenu
          isFocusingOnShapes={isFocusingOnShapes}
          setIsFocusingOnShapes={setIsFocusingOnShapes}
          selectedShapeIndex={selectedShapeIndex}
          setSelectedShapeIndex={setSelectedShapeIndex}
        />
        <Button
          name="Generate"
          className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover"
          variant="contained"
          onClick={() => {
            setPatterns(
              generatePatternsRandomly(
                cols * cols,
                selectedShapeIndex,
                +alignment
              )
            );
          }}
        >
          Generate
        </Button>
      </Box>
      <Box
        id="u-all-aesthetic-patterns-parent"
        aria-label="Geometric Menu Sliders"
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: "auto",
          gridGap: "1em",
          position: "absolute",
          top: "10vh",
          left: "40vw",
          padding: `${padding}px`,
          borderRadius: "30px",
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: gBackgroundColor,
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          zIndex: 3,
        }}
      >
        {patterns.patterns}
      </Box>
    </MenuBackdrop>
  );
}
