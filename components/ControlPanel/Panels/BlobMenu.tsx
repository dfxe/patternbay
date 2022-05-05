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

  const [dPath, setDPath] = useState<string>(
    `M 100 100 C ${dimensions.width} ${dimensions.height}, 40 20, 10 10`
  );

  const nightMode = useNightMode();
  const generateBlob = () => {
    setRotation(Math.floor(Math.random() * 3200));
    setDimensions({
      width: Math.floor(Math.random() * 200) + 100,
      height: Math.floor(Math.random() * 200) + 100,
    });
    setBorderz({
      leftTopX: Math.floor(Math.random() * 200) + 200,
      leftTopY: Math.floor(Math.random() * 200) + 200,
      rightTopX: Math.floor(Math.random() * 200) + 200,
      rightTopY: Math.floor(Math.random() * 200) + 200,
      leftBottomX: Math.floor(Math.random() * 200) + 200,
      leftBottomY: Math.floor(Math.random() * 200) + 200,
      rightBottomX: Math.floor(Math.random() * 200) + 200,
      rightBottomY: Math.floor(Math.random() * 200) + 200,
    });

    setDPath(
      `M30.2,-54.5C35.6,-49.3,33.9,-33.9,32.8,-23.2C31.6,-12.4,31,-6.2,37.8,3.9C44.6,14.1,58.8,28.1,61.5,41.6C64.3,55.1,55.5,68,43.3,65.6C31.1,63.3,15.6,45.7,4,38.7C-7.5,31.7,-15.1,35.5,-26.8,37.6C-38.6,39.7,-54.5,40.2,-57.4,33.6C-60.3,27.1,-50.2,13.6,-46.7,2.1C-43.1,-9.4,-46.1,-18.9,-43.1,-25.4C-40.2,-31.9,-31.4,-35.5,-23.2,-39.1C-15,-42.8,-7.5,-46.5,2.5,-50.8C12.4,-55,24.9,-59.8,30.2,-54.5Z
      `
    );
  };

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
      {/* svg blob */}
      <div id="the-blob-itself">
        <svg style={{ position: "absolute", left: "50vw", top: "10vh" }}>
          <path
            d={dPath}
            /* stroke="black" */
            fill={color}
            opacity={opacity}
            viewBox="0 0 512 512"
          />
        </svg>
      </div>
      {/* <Box
        id="the-blob-itself"
        sx={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          position: "absolute",
          top: "20vw",
          left: "60vw",
          transform: `rotate(${rotation}deg)`,
          borderTopLeftRadius: `${borderz.leftTopX}% ${borderz.leftTopY}%`,
          borderTopRightRadius: `${borderz.rightTopX}% ${borderz.rightTopY}%`,
          borderBottomRightRadius: `${borderz.rightBottomX}% ${borderz.rightBottomY}%`,
          borderBottomLeftRadius: `${borderz.leftBottomX}% ${borderz.leftBottomY}%`,
          opacity: { opacity },
          filter: "contrast(100%) brightness(100%)",
          
          background: isCenterHidden
            ? "none"
            : `linear-gradient(349deg,  ${color} , ${gradientColor} )
               ${
                 isGrainy
                   ? ", url('data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')"
                   : ""
               }`,
          
          boxShadow: isBlurred
            ? `${
                isBlurInside ? "inset" : ""
              } 0px 0px ${blurPercent}px ${blurPercent}px ${blurColor}`
            : "none",
          zIndex: "1",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5em",
            fontWeight: "bold",
            color: nightMode.getter ? "#eae3f1" : "#231f22",
            marginTop: "1em",
            marginBottom: "1em",
            transform: `rotate(${textRotation}deg)`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          {blobText}
        </Typography>
      </Box> */}
      <ColorPaletteMenu setPaletteUsed={setColorPalette} />
      <Divider sx={{ marginTop: "2em", marginBottom: "2em" }} />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover"
          onClick={() => generateBlob()}
        >
          Generate
        </Button>
      </Box>
    </MenuBackdrop>
  );
};
export default BlobMenu;
