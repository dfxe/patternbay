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
import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";
//@ts-ignore
import blobshape from "blobshape";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import DeblurRoundedIcon from "@mui/icons-material/DeblurRounded";
import Tooltip from "@mui/material/Tooltip";
import VectorFourVertex from "../../../images/SignifierIcons/VectorFourVertex";
import AllOutRoundedIcon from "@mui/icons-material/AllOutRounded";
import { useMouse } from "rooks";
import { nanoid } from "nanoid";
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
  type Colors = {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
  };
  const [colorPalette, setColorPalette] = useState<Colors>({
    firstColor: "#fc3d90",
    secondColor: "#d9f9b8",
    thirdColor: "#6f5a5a",
  });

  const [textRotation, setTextRotation] = useState(0);

  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [textSize, setTextSize] = useState(4);
  const [textPosition, setTextPosition] = useState("center");
  const [numberOfBlobs, setNumberOfBlobs] = useState(1);

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
  const [blobText, setBlobText] = useState("placeholder");
  const [color, setColor] = useState("#6550a3");
  type BlobShape = {
    d: {
      size: number;
      grow: number;
      edges: number;
      seed: string;
    };
    fill: string;
    stroke: string;
    strokeWidth: string;
    strokeLinecap: string;
    strokeLinejoin: string;
  };

  const [blobShapes, setBlobShapes] = useState<BlobShape[]>([
    {
      size: 300,
      grow: 6,
      edges: 6,
      seed: "44",
    },
  ]);
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

  const handleGenerateBlob = (numberOfBlobs: number): JSX.Element[] => {
    let paths: JSX.Element[] = [];
    for (let i = 0; i < numberOfBlobs; i++) {
      if (blobShapes.length > numberOfBlobs) {
        //filter
        setBlobShapes(blobShapes.filter((_, index) => index !== i));
      } else {
        setBlobShapes([
          ...blobShapes,
          {
            size: 40,
            grow: blobShapes[i].grow,
            edges: blobShapes[i].edges,
            seed: Math.floor(Math.random() * 100).toString(),
          },
        ]);
      }
      paths.push(
        <path
          d={blobshape(blobShapes[i]).path}
          /* stroke="black" */
          fill={`url(#a-linear-gradient-blob)`}
          opacity={opacity}
        />
      );
    }

    return paths;
  };

  useEffect(() => {
    setColor(colorPalette.firstColor);
    setGradientColor(colorPalette.secondColor);
  }, [colorPalette]);

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
        <BlobSVGMenuSidebar color={nightMode.getter ? "#eae3f1" : "#231f22"} />{" "}
        &nbsp; Blobs Bay
      </Typography>
      <br></br>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Opacity">
          <OpacityRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></OpacityRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          sliderLabel=""
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
        justifyContent="center"
        gap={2}
      >
        {/* TODO tooltip not displaying */}
        <Tooltip placement="top" title="Edges">
          <VectorFourVertex
            color={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></VectorFourVertex>
        </Tooltip>
        <DefaultMarkedMUISlider
          sliderLabel=""
          defaultValue={3}
          step={1}
          min={3}
          max={10}
          markPoints={null}
          onChangeMod={(e) => {
            //change each edges in dPaths
            setBlobShapes(
              blobShapes.map((dPath) => ({
                ...dPath,
                edges: +(e.target as HTMLInputElement).value,
              }))
            );
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        gap={1}
      >
        <Tooltip placement="top" title="Growth">
          <AllOutRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></AllOutRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          defaultValue={1}
          step={1}
          min={1}
          max={8}
          markPoints={null}
          onChangeMod={(e) => {
            setBlobShapes(
              blobShapes.map((dPath) => ({
                ...dPath,
                grow: +(e.target as HTMLInputElement).value,
              }))
            );
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
        <Tooltip placement="top" title="Text Size">
          <FormatSizeRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></FormatSizeRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          sliderLabel=""
          defaultValue={4}
          step={1}
          min={4}
          max={20}
          markPoints={null}
          onChangeMod={(e) => {
            setTextSize(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>

      <br></br>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Blob Text"
          variant="filled"
          sx={{
            "> *": {
              color: nightMode.getter ? "#eae3f1" : "#231f22",
            },
          }}
          value={blobText}
          onChange={handleTextChange}
        />
        &nbsp;&nbsp;&nbsp;
        <InputColor
          colorValue={textColor}
          setColorValue={setTextColor}
          inputLabel="text"
        />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
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
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
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
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
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
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>

      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Blur">
          <DeblurRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></DeblurRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          sliderLabel=""
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
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip placement="top" title="Blur">
          <DeblurRoundedIcon
            htmlColor={nightMode.getter ? "#eae3f1" : "#231f22"}
          ></DeblurRoundedIcon>
        </Tooltip>
        <DefaultMarkedMUISlider
          sliderLabel=""
          defaultValue={10}
          step={10}
          min={10}
          max={50}
          markPoints={null}
          onChangeMod={(e) => {
            setBlurPercent(+(e.target as HTMLInputElement).value);
          }}
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
          {handleGenerateBlob(1).map((blob) => {
            return (
              <g key={nanoid()}>
                <path
                  fill={blob.color}
                  d={blob.path}
                  stroke={blob.color}
                  strokeWidth={blob.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            );
          })}

          <text
            x="5"
            y="15"
            /* TODO verify textColor */
            style={{
              fontSize: textSize,
              transformOrigin: "center",
              color: textColor,
            }}
            transform={`rotate(${textRotation}deg)`}
          >
            {blobText}
          </text>
        </svg>
      </div>

      <ColorPaletteMenu setPalette={setColorPalette} hasThirdColor={false} />
      <Divider sx={{ marginTop: "2em", marginBottom: "2em" }} />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover">
          Generate
        </Button>
      </Box>
    </MenuBackdrop>
  );
};
export default BlobMenu;
