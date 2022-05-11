import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNightMode } from "../Providers/NightModeProvider";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import { nanoid } from "nanoid";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import InputColor from "../../InputColor/InputColor";
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
import Diamond from "../../../images/GeometricShapes/Diamond";
import ElementTooltip from "./ElementTooltip";
import { useElementTooltip } from "../Providers/ElementTooltipProvider";
import { keyframes, styled } from "@mui/material/styles";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";
import PaddingRoundedIcon from "@mui/icons-material/PaddingRounded";
import Tooltip from "@mui/material/Tooltip";

import ExpandRoundedIcon from "@mui/icons-material/ExpandRounded";
import BorderSlider from "../../ActionSliders/BorderSlider";

type ConstructableData = {
  index: number;
  props: { rotation: number; color: string };
  canClick: boolean;
};
type Patternz = {
  patterns: JSX.Element[];
  constructables: ConstructableData[];
};
const hoverAnim = keyframes`
  0% {
    
    transform: scale(1);
  }

  100% {

    transform: scale(1.01);

  }
`;
const AestheticsGrid = styled(Box)({
  color: "#6068d2",
  "&:hover": {
    animation: `${hoverAnim} 0.2s ease forwards`,
  },
});

export default function GeometricPatterns() {
  const [cols, setCols] = useState(4);
  const elementTooltip = useElementTooltip();
  const sizeParams = {
    width: { min: 30, max: 40, default: 30, step: 1 },
    height: { min: 30, max: 50, default: 30, step: 1 },
    borderRadius: { min: 0, max: 10, default: 0, step: 1 },
    gap: { min: 0, max: 4, default: 0, step: 0.2 },
  };
  const [width, setWidth] = useState(sizeParams.width.default);
  const [height, setHeight] = useState(sizeParams.height.default);
  const [borderRadius, setBorderRadius] = useState(
    sizeParams.borderRadius.default
  );
  const [gridGap, setGridGap] = useState(sizeParams.gap.default);
  const [padding, setPadding] = useState(20);
  const [gBackgroundColor, setGBackgroundColor] = useState("#180c23");

  type Colors = {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
  };
  const [colorsUsed, setColorsUsed] = useState<Colors>({
    firstColor: "#6f5a5a",
    secondColor: "#69a594",
    thirdColor: "#a5a5a5",
  });
  const [selectedShapeIndex, setSelectedShapeIndex] = useState<number[]>([]);
  const [alignment, setAlignment] = useState("deg90");

  const handleRotation = (
    //@ts-ignore
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const nightMode = useNightMode();

  const NUMBER_OF_SHAPES = 14;

  const getSelectedShape = (constructable: ConstructableData): JSX.Element => {
    const stylez = {
      props: constructable.props,
      canClick: constructable.canClick,
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
      case 13:
        return <Diamond key={nanoid()} {...stylez} />;
      default:
        return <Flower key={nanoid()} {...stylez} />;
    }
  };
  //TODO colors not accessing right pointer
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
        props: {
          rotation: rotationDegree,
          // one of the colors
          color:
            Math.random() > 0.5
              ? colorsUsed.firstColor
              : colorsUsed.secondColor,
        },
        canClick: true,
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
          props: {
            rotation: rotationDegs,
            color: colors[i],
          },
          canClick: true,
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
    //TODO Need to keep same color shape, well good luck
    setPatterns({
      patterns: reconstructPatterns(indexes, +alignment, [
        colorsUsed.firstColor,
        colorsUsed.secondColor,
      ]),
      constructables: patterns.constructables,
    });

    elementTooltip.setColors([colorsUsed.firstColor, colorsUsed.secondColor]);

    setGBackgroundColor(colorsUsed.thirdColor);
  }, [colorsUsed, alignment]);

  return (
    <MenuBackdrop>
      <ElementTooltip />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          whiteSpace: "nowrap",
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
      <br></br>
      <BorderSlider
        params={sizeParams.borderRadius}
        setBorderRadius={setBorderRadius}
        nightModeSwitch={nightMode.getter}
      />
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Gap">
          <ExpandRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></ExpandRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          defaultValue={sizeParams.gap.default}
          step={sizeParams.gap.step}
          min={sizeParams.gap.min}
          max={sizeParams.gap.max}
          markPoints={null}
          onChangeMod={(e) => {
            setGridGap(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>

      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Columns">
          <ViewColumnRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></ViewColumnRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
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
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Padding">
          <PaddingRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></PaddingRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
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
          onChange={handleRotation}
        >
          <ToggleButton
            sx={{
              borderRadius: "30px 0  0 30px",
              width: "3em",
              height: "3em",
              fontSize: "0.8em",
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
              fontSize: "0.8em",
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
              fontSize: "0.8em",
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
              fontSize: "0.8em",
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
              fontSize: "0.8em",
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
              fontSize: "0.8em",
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
              fontSize: "0.8em",
            }}
            value="270"
          >
            270°
          </ToggleButton>
          <ToggleButton
            sx={{
              borderRadius: "0 30px 30px 0",
              color: nightMode.getter ? "#eae3f1" : "#231f22",
              width: "3em",
              height: "3em",
              fontSize: "0.8em",
            }}
            value="315"
          >
            315°
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <ColorPaletteMenu setPalette={setColorsUsed} hasThirdColor={true} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ShapesPaletteMenu
          selectedShapeIndex={selectedShapeIndex}
          setSelectedShapeIndex={setSelectedShapeIndex}
        />

        <Button
          sx={{
            borderRadius: "64px",
            padding: "1em 1em 1em 1em",
            marginBlockStart: "1rem",
            "&:hover": {
              backgroundColor: "#6f5caa",
            },
            "&:not(:hover)": {
              backgroundColor: "#6068df",
            },
          }}
          name="Generate"
          variant="contained"
          color="primary"
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
      <AestheticsGrid
        id="u-all-aesthetic-patterns-parent"
        aria-label="Geometric Menu Sliders"
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: "auto",
          gridGap: `${gridGap}em`,
          position: "absolute",
          top: "2vh",
          left: "40vw",
          padding: `${padding}px`,
          borderRadius: `${borderRadius}%`,
          width: `30vw`,
          height: `auto`,
          backgroundColor: gBackgroundColor,
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          zIndex: 3,
        }}
      >
        {patterns.patterns}
      </AestheticsGrid>
    </MenuBackdrop>
  );
}
