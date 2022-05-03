import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNightMode } from "../Providers/NightModeProvider";
import Stack from "@mui/material/Stack";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import Typography from "@mui/material/Typography";

import InputColor from "./InputColor";
import TextField from "@mui/material/TextField";
import GradientRounded from "@mui/icons-material/GradientRounded";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import MenuBackdrop from "./MenuBackdrop";

const NoiseGradientMenu = () => {
  const [dimensions, setDimensions] = useState({ width: 500, height: 300 });
  const [borderRadius, setBorderRadius] = useState(10);
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [octaves, setOctaves] = useState(1);
  const [frequency, setFrequency] = useState(0.1);
  const [brightness, setBrightness] = useState(100);
  const [noiseGradientColor, setNoiseGradientColor] = useState("#6650a4");
  const [noiseGradientColor2, setNoiseGradientColor2] = useState("#6650a4");
  const [alignment, setAlignment] = useState("deg90");
  const [colorsUsed, setColorsUsed] = useState<string[]>([
    "#6f5a5a",
    "#69a594",
  ]);
  const nightMode = useNightMode();

  const handleChange = (
    //@ts-ignore
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    setNoiseGradientColor(colorsUsed[0]);
    setNoiseGradientColor2(colorsUsed[1]);
  }, [colorsUsed]);

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
        <GradientRounded
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
        />
        &nbsp; Gradients Bay
      </Typography>
      <Box
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
      />
      <Stack
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
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Border Radius"
          defaultValue={10}
          step={2}
          min={0}
          max={64}
          markPoints={null}
          onChangeMod={(e) => {
            setBorderRadius(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>
      <ColorPaletteMenu setPaletteUsed={setColorsUsed} />
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Rotation"
          defaultValue={0}
          step={5}
          min={0}
          max={360}
          markPoints={null}
          onChangeMod={(e) => {
            setRotation(+(e.target as HTMLInputElement).value);
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
          sliderLabel="Contrast"
          defaultValue={100}
          step={10}
          min={100}
          max={400}
          markPoints={null}
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
      >
        <DefaultMarkedMUISlider
          sliderLabel="Brightness"
          defaultValue={100}
          step={10}
          min={100}
          max={1000}
          markPoints={null}
          onChangeMod={(e) => {
            setBrightness(+(e.target as HTMLInputElement).value);
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
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Frequency"
          defaultValue={0.1}
          step={0.1}
          min={0.1}
          max={5}
          markPoints={null}
          onChangeMod={(e) => {
            setFrequency(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton
          sx={{
            borderRadius: "30px 0 30px 0",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
          }}
          value="linear"
        >
          linear
        </ToggleButton>
        <ToggleButton
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
          value="radial"
        >
          radial
        </ToggleButton>
        <ToggleButton
          sx={{
            borderRadius: "30px 30px 0 0",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
          }}
          value="conic"
        >
          conic
        </ToggleButton>
      </ToggleButtonGroup>

      <InputColor
        colorValue={noiseGradientColor}
        setColorValue={setNoiseGradientColor}
        inputLabel={"gradient one"}
      />
      <InputColor
        colorValue={noiseGradientColor2}
        setColorValue={setNoiseGradientColor2}
        inputLabel={"gradient two"}
      />
    </MenuBackdrop>
  );
};

export default NoiseGradientMenu;
