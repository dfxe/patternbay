import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNightMode } from "../Providers/NightModeProvider";
import Stack from "@mui/material/Stack";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import Typography from "@mui/material/Typography";

import InputColor from "../../InputColor/InputColor";
import TextField from "@mui/material/TextField";
import GradientRounded from "@mui/icons-material/GradientRounded";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import MenuBackdrop from "./MenuBackdrop";
import BorderStyleRoundedIcon from "@mui/icons-material/BorderStyleRounded";
import ScreenRotationAltRoundedIcon from "@mui/icons-material/ScreenRotationAltRounded";
import ContrastRoundedIcon from "@mui/icons-material/ContrastRounded";
import Brightness6RoundedIcon from "@mui/icons-material/Brightness6Rounded";
import ThirtyFpsSelectRoundedIcon from "@mui/icons-material/ThirtyFpsSelectRounded";
import Tooltip from "@mui/material/Tooltip";
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import Checkbox from "@mui/material/Checkbox";
import DeblurIcon from "@mui/icons-material/Deblur";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import RoundedCornerSharpIcon from "@mui/icons-material/RoundedCornerSharp";

import BorderSlider from "../../ActionSliders/BorderSlider";
import RotationSlider from "../../ActionSliders/RotationSlider";
import BlurOffRoundedIcon from "@mui/icons-material/BlurOffRounded";

const NoiseGradientMenu = () => {
  const boundaryParams = {
    borderRadius: { min: 0, max: 20, step: 1, default: 3 },
    rotation: { min: 0, max: 360, step: 5, default: 0 },
  };
  const [dimensions, setDimensions] = useState({ width: 500, height: 300 });
  const [borderRadius, setBorderRadius] = useState(
    boundaryParams.borderRadius.default
  );
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [octaves, setOctaves] = useState(1);
  const [frequency, setFrequency] = useState(0.1);
  const [brightness, setBrightness] = useState(100);
  const [noiseGradientColor, setNoiseGradientColor] = useState("#6650a4");
  const [noiseGradientColor2, setNoiseGradientColor2] = useState("#6650a4");
  const [gradientType, setGradientType] = useState("linear");
  type BlurType = {
    hasBlur: boolean;
    blurStdDev: number;
  };
  const [blur, setBlur] = useState<BlurType>({
    hasBlur: true,
    blurStdDev: 0.4,
  });
  type Colors = {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
  };
  const [colorsUsed, setColorsUsed] = useState<Colors>({
    firstColor: "#6650a4",
    secondColor: "#6650a4",
    thirdColor: "#6650a4",
  });
  const nightMode = useNightMode();

  const handleGradientType = (
    //@ts-ignore
    event: React.MouseEvent<HTMLElement>,
    nextGradientType: string
  ) => {
    if (nextGradientType === gradientType) return;
    setGradientType(nextGradientType);
  };

  /* const toggleFilterBlur = (value: boolean) => {
    setBlur({ ...blur, hasBlur: value });
  };
 */
  useEffect(() => {
    setNoiseGradientColor(colorsUsed.firstColor);
    setNoiseGradientColor2(colorsUsed.secondColor);
  }, [colorsUsed]);

  return (
    <MenuBackdrop>
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
        <GradientRounded
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
        />
        &nbsp; Gradients Bay
      </Typography>
      <br></br>
      {/* transform this into a svg */}
      {/* <Box
        id="the-noise-gradient-itself"
        aria-label="Noise Gradient"
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          position: "absolute",
          top: "10vh",
          left: "40vw",
          borderRadius: borderRadius,
          zIndex: "4",
          filter: `contrast(${contrast}%) brightness(${brightness}%)`,
          background:
            alignment === "linear"
              ? `linear-gradient(${rotation}deg, ${noiseGradientColor}, ${noiseGradientColor2}),\n\turl(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='${octaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='500%25' height='300%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`
              : alignment === "radial"
              ? `radial-gradient(circle at 50% 50%, ${noiseGradientColor}, ${noiseGradientColor2}),
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='${octaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              : `conic-gradient(from ${rotation}deg at 50% 50%, ${noiseGradientColor}, ${noiseGradientColor2}),
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='${octaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      /> */}
      {/* <div id="the-noise-gradient-itself">
        <svg
          aria-label="noise-gradient-svg"
          style={{
            position: "absolute",
            left: "10vw",
            top: "0vh",
            width: "100%",
            height: "100%",
          }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {blur.hasBlur && (
              <filter id="a-noise-gradient-menu-canvas-filter">
                <feGaussianBlur stdDeviation={blur.blurStdDev} />
              </filter>
            )}
            <rect
              id="my-gradient-menu-canvas"
              rx={borderRadius}
              ry={borderRadius}
              width="80%"
              height="50%"
            />
          

            {gradientType === "linear" && (
              <linearGradient
                id="a-noise-gradient-menu-canvas"
                gradientTransform={`rotate(${rotation})`}
              >
                <stop offset="20%" stopColor={noiseGradientColor} />
                <stop offset="90%" stopColor={noiseGradientColor2} />
              </linearGradient>
            )}
            {gradientType === "radial" && (
              <radialGradient id="a-noise-gradient-menu-canvas">
                <stop offset="10%" stopColor={noiseGradientColor} />
                <stop offset="95%" stopColor={noiseGradientColor2} />
              </radialGradient>
            )}
            {gradientType === "conic" && (
              <radialGradient id="a-noise-gradient-menu-canvas">
                <stop offset="10%" stopColor={noiseGradientColor} />
                <stop offset="95%" stopColor={noiseGradientColor2} />
              </radialGradient>
            )}
          </defs>

          <use
            x="5"
            y="5"
            href="#my-gradient-menu-canvas"
            fill="url('#a-noise-gradient-menu-canvas')"
            filter={
              blur.hasBlur ? "url('#a-noise-gradient-menu-canvas-filter')" : ""
            }
          />
        </svg>
      </div> */}
      {/* <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          label="width"
          value={dimensions.width}
          onChange={(e) =>
            setDimensions({
              ...dimensions,
              width:
                +(e.target as HTMLInputElement).value < 501
                  ? +(e.target as HTMLInputElement).value
                  : dimensions.width,
            })
          }
        />
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          label="height"
          value={dimensions.height}
          onChange={(e) =>
            setDimensions({
              ...dimensions,
              height:
                +(e.target as HTMLInputElement).value < 501
                  ? +(e.target as HTMLInputElement).value
                  : dimensions.height,
            })
          }
        />
      </Stack> */}

      <BorderSlider
        params={boundaryParams.borderRadius}
        setBorderRadius={setBorderRadius}
        nightModeSwitch={nightMode.getter}
      />
      <ColorPaletteMenu setPalette={setColorsUsed} hasThirdColor={false} />
      <RotationSlider
        params={boundaryParams.rotation}
        setRotation={setRotation}
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
        <Tooltip placement="top" title="Contrast">
          <ContrastRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></ContrastRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          defaultValue={100}
          step={10}
          min={100}
          max={400}
          onChangeMod={(e) => {
            setContrast(+(e.target as HTMLInputElement).value);
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
        <Tooltip placement="top" title="Brightness">
          <Brightness6RoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></Brightness6RoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          defaultValue={100}
          step={10}
          min={100}
          max={1000}
          onChangeMod={(e) => {
            setBrightness(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>
      {/* <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Octaves"
          defaultValue={1}
          step={1}
          min={1}
          max={10}
          markPoints={null}
          onChangeMod={(e) => {
            setOctaves(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack> */}
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Frequency">
          <ThirtyFpsSelectRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></ThirtyFpsSelectRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          defaultValue={0.1}
          step={0.1}
          min={0.1}
          max={5}
          onChangeMod={(e) => {
            setFrequency(+(e.target as HTMLInputElement).value);
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
        <Tooltip placement="top" title="No Blur">
          <BlurOffRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          />
        </Tooltip>
        <DefaultMarkedMUISlider
          disabled={false}
          defaultValue={0.4}
          step={0.1}
          min={0}
          max={2}
          onChangeMod={(e) => {
            setBlur({
              ...blur,
              blurStdDev: +(e.target as HTMLInputElement).value,
            });
          }}
        />
        <Tooltip placement="top" title="Blur">
          <DeblurIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></DeblurIcon>
        </Tooltip>
      </Stack>
      {/* TODO fix disable on double click */}
      <ToggleButtonGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        color="primary"
        value={gradientType}
        exclusive
        onChange={handleGradientType}
      >
        <ToggleButton
          sx={{
            borderRadius: "30px 0 0 30px",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
          }}
          value="linear"
        >
          <LinearScaleRoundedIcon />
        </ToggleButton>
        <ToggleButton
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
          value="radial"
        >
          <RadioButtonCheckedRoundedIcon />
        </ToggleButton>
        <ToggleButton
          sx={{
            borderRadius: "0 30px 30px 0",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
          }}
          value="conic"
        >
          <RadarRoundedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </MenuBackdrop>
  );
};

export default NoiseGradientMenu;
