import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNightMode } from "../Providers/NightModeProvider";
import Stack from "@mui/material/Stack";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import Typography from "@mui/material/Typography";
import BlobSVGMenuSidebar from "../../../images/MenuSidebarBlob";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import InputColor from "./InputColor";
import TextField from "@mui/material/TextField";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import MenuBackdrop from "./MenuBackdrop";
//@ts-ignore
import blobshape from "blobshape";
const BlobMenu = () => {
  const [opacity, setOpacity] = useState(1);

  const [rotation, setRotation] = useState(Math.floor(Math.random() * 3200));
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  const [isBlurred, setIsBlurred] = useState(false);
  const [blurPercent, setBlurPercent] = useState(10);
  const [blurColor, setBlurColor] = useState("#6550a3");
  const [gradientColor, setGradientColor] = useState("#6550a3");
  const [isGrainy, setIsGrainy] = useState(false);
  const [isBlurInside, setIsBlurInside] = useState(false);

  const [isCenterHidden, setIsCenterHidden] = useState(false);
  const [colorPalette, setColorPalette] = useState<string[]>([
    "#6f5a5a",
    "#69a594",
  ]);

  const [textRotation, setTextRotation] = useState(0);
  const [borderz, setBorderz] = useState({
    leftTopX: Math.floor(Math.random() * 200) + 200,
    leftTopY: Math.floor(Math.random() * 200) + 200,
    rightTopX: Math.floor(Math.random() * 200) + 200,
    rightTopY: Math.floor(Math.random() * 200) + 200,
    leftBottomX: Math.floor(Math.random() * 200) + 200,
    leftBottomY: Math.floor(Math.random() * 200) + 200,
    rightBottomX: Math.floor(Math.random() * 200) + 200,
    rightBottomY: Math.floor(Math.random() * 200) + 200,
  });
  const [blobText, setBlobText] = useState("HEYO");
  const [color, setColor] = useState("#6550a3");
  type BlobShape = {
    size: number;
    grow: number;
    edges: number;
    seed: number | string;
  };
  const [dPath, setDPath] = useState({
    size: 300,
    growth: 6,
    edges: 6,
    seed: "44",
  });
  const nightMode = useNightMode();

  const handleTextChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBlobText(event.target.value);
  };

  const handleIsBlurred = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsBlurred(event.target.checked);
  };

  const handleIsCenterHidden = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsCenterHidden(event.target.checked);
  };

  const handleIsBlurInside = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsBlurInside(event.target.checked);
  };

  const handleIsGrainy = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsGrainy(event.target.checked);
  };

  const handleGenerateBlob = () => {
    setDPath({
      size: 40,
      growth: dPath.growth,
      edges: dPath.edges,
      seed: Math.floor(Math.random() * 100).toString(),
    });
  };

  useEffect(() => {
    handleGenerateBlob();
  }, []);
  useEffect(() => {
    setColor(colorPalette[0]);
    setGradientColor(colorPalette[1]);
  }, [colorPalette]);

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
        <BlobSVGMenuSidebar color={nightMode.getter ? "#eae3f1" : "#231f22"} />{" "}
        &nbsp; Blobs Bay
      </Typography>
      <br></br>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Opacity"
          defaultValue={1}
          step={0.1}
          min={0}
          max={1}
          markPoints={null}
          onChangeMod={(e) => {
            setOpacity(+(e.target as HTMLInputElement).value);
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
          sliderLabel="Edges"
          defaultValue={3}
          step={1}
          min={3}
          max={10}
          markPoints={null}
          onChangeMod={(e) => {
            setDPath({
              ...dPath,
              edges: +(e.target as HTMLInputElement).value,
            });
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
          sliderLabel="Growth"
          defaultValue={1}
          step={1}
          min={1}
          max={8}
          markPoints={null}
          onChangeMod={(e) => {
            setDPath({
              ...dPath,
              growth: +(e.target as HTMLInputElement).value,
            });
          }}
        />
      </Stack>
      <InputColor
        colorValue={color}
        setColorValue={setColor}
        inputLabel={"main "}
      />
      <TextField
        id="outlined-basic"
        label="Blob Text"
        variant="filled"
        value={blobText}
        onChange={handleTextChange}
      />

      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1em",

            color: nightMode.getter ? "#eae3f1" : "#231f22",
            marginTop: "1em",
            marginBottom: "1em",
            transform: `rotate(${textRotation}deg)`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Blur
        </Typography>

        <Checkbox
          checked={isBlurred}
          onChange={handleIsBlurred}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1em",

            color: nightMode.getter ? "#eae3f1" : "#231f22",
            marginTop: "1em",
            marginBottom: "1em",
            transform: `rotate(${textRotation}deg)`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Grain
        </Typography>

        <Checkbox
          checked={isGrainy}
          onChange={handleIsGrainy}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1em",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
            marginTop: "1em",
            marginBottom: "1em",
            transform: `rotate(${textRotation}deg)`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Blur Inside
        </Typography>
        <Checkbox
          checked={isBlurInside}
          onChange={handleIsBlurInside}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1em",

            color: nightMode.getter ? "#eae3f1" : "#231f22",
            marginTop: "1em",
            marginBottom: "1em",
            transform: `rotate(${textRotation}deg)`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Center Hidden
        </Typography>
        <Checkbox
          checked={isCenterHidden}
          onChange={handleIsCenterHidden}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>

      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Blur Percentage"
          defaultValue={10}
          step={10}
          min={10}
          max={50}
          markPoints={null}
          onChangeMod={(e) => {
            setBlurPercent(+(e.target as HTMLInputElement).value);
          }}
        />
        <InputColor
          colorValue={blurColor}
          setColorValue={setBlurColor}
          inputLabel={"blur "}
        />
        <InputColor
          colorValue={gradientColor}
          setColorValue={setGradientColor}
          inputLabel={"gradient"}
        />
      </Stack>
      <div id="the-blob-itself">
        <svg
          aria-label="blob-svg"
          style={{
            position: "absolute",
            left: "50vw",
            top: "10vh",
          }}
          viewBox="0 0 128 128"
        >
          <defs>
            <linearGradient
              id="a-linear-gradient-blob"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{
                  stopColor: color,
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: gradientColor,
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>
          <path
            d={blobshape(dPath).path}
            /* stroke="black" */
            fill={`url(#a-linear-gradient-blob)`}
            opacity={opacity}
          />
          <text
            x="0"
            y="15"
            fill="red"
            transform={`rotate(${textRotation}deg)`}
          >
            {blobText}
          </text>
        </svg>
      </div>

      <ColorPaletteMenu setPaletteUsed={setColorPalette} />
      <Divider sx={{ marginTop: "2em", marginBottom: "2em" }} />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover"
          onClick={() => handleGenerateBlob()}
        >
          Generate
        </Button>
      </Box>
    </MenuBackdrop>
  );
};
export default BlobMenu;
