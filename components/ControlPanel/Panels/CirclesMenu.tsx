import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import { useRadius } from "../Providers/RadiusProvider";
import { useRotation } from "../Providers/RotationProvider";
import { useSize } from "../Providers/SizeProvider";
import { useNightMode } from "../Providers/NightModeProvider";
import { useConcentrics } from "../Providers/ConcentricsProvider";
import { useShape } from "../Providers/ShapeProvider";
import InputColor from "./InputColor";

import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import ActionsPanel from "./ActionsPanel";
import ColorPaletteMenu from "../../ColorPalette/ColorPaletteMenu";
import { useColors } from "../Providers/ColorProvider";
import MenuBackdrop from "./MenuBackdrop";

function CirclePatternsMenu() {
  const mqMin1024 = useMediaQuery("(min-width:1024px)");
  const entityRadius = useRadius();
  const entityRotation = useRotation();
  const entityShape = useShape();
  const entitySize = useSize();
  const concentrics = useConcentrics();
  const nightMode = useNightMode();
  const colors = useColors();

  const [opacity, setOpacity] = useState<number>(0);
  const [palette, setPaletteUsed] = useState<string[]>(["#6f5a5a", "#69a594"]);

  const sizeParams = {
    default: 1,
    minSize: 1,
    maxSize: 3,
    step: 0.5,
  };

  const radiusParams = {
    default: 0.6,
    minRadius: 0.2,
    maxRadius: 1.4,
    step: 0.1,
  };
  const rotationParams = {
    default: 1,
    minRotation: 0,
    maxRotation: 260,
    step: 5,
  };
  const shapeParams = {
    default: 15,
    min: 0,
    max: 15,
    step: 1,
  };
  type MyEventType = {
    target: {
      value: number;
    };
  };
  const handleClearOne = (event: MyEventType) => {
    // reactive way, could be better, maybe by creating a better object
    concentrics.setIsHidden(
      concentrics.isHidden.map((x, i) =>
        i.toString() === (event.target.value - 1).toString() ? false : x
      )
    );
    // splice: at position x remove 1 item
    concentrics.setter(
      concentrics.getter.filter(
        (x, i) => i.toString() !== (event.target.value - 1).toString()
      )
    );

    concentrics.setIsHidden(
      concentrics.isHidden.map((x, i) =>
        i.toString() === (event.target.value - 1).toString() ? true : x
      )
    );
  };

  const handleBuildOne = () => {
    if (concentrics.getter.length < concentrics.params.maxConcentrics) {
      concentrics.setter([
        ...concentrics.getter,
        {
          dKey: nanoid(),
          size: entitySize.getter,
          concentricsNumber: concentrics.getter.length + 1,
          removeThis: handleClearOne,
        },
      ]);
    }
  };

  useEffect(() => {
    handleBuildOne();
  }, []);

  return (
    <MenuBackdrop>
      <Typography
        sx={{
          positon: "absolute",
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          color: nightMode.getter ? "#eae3f1" : "#292d36",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        <WorkspacesRoundedIcon
          sx={{ color: nightMode.getter ? "#eae3f1" : "#292d36" }}
        />
        &nbsp; Circles Bay
      </Typography>
      <br></br>
      {/* TODO fix undo redo */}
      {/* <UndoRedo></UndoRedo> */}
      <InputColor
        colorValue={colors.getter}
        setColorValue={colors.setter}
        inputLabel={"shapes"}
      />
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 1, position: "relative" }}
        alignItems="center"
      >
        <DefaultMarkedMUISlider
          sliderLabel="Size"
          defaultValue={sizeParams.default}
          step={sizeParams.step}
          min={sizeParams.minSize}
          max={sizeParams.maxSize}
          markPoints={null}
          onChangeMod={(e) => {
            entitySize.setter(+(e.target as HTMLInputElement).value);
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
          sliderLabel="Radius"
          defaultValue={radiusParams.default}
          step={radiusParams.step}
          min={radiusParams.minRadius}
          max={radiusParams.maxRadius}
          markPoints={null}
          onChangeMod={(e) => {
            entityRadius.setter(+(e.target as HTMLInputElement).value);
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
          sliderLabel="Roundness"
          defaultValue={shapeParams.default}
          step={shapeParams.step}
          min={shapeParams.min}
          max={shapeParams.max}
          markPoints={null}
          onChangeMod={(e) => {
            entityShape.setter(+(e.target as HTMLInputElement).value);
          }}
        />
      </Stack>
      <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
        <DefaultMarkedMUISlider
          sliderLabel="Rotation"
          defaultValue={rotationParams.default}
          step={rotationParams.step}
          min={rotationParams.minRotation}
          max={rotationParams.maxRotation}
          markPoints={[
            {
              value: rotationParams.minRotation,
              label: `${rotationParams.minRotation}°`,
            },

            {
              value: 45,
              label: "45°",
            },

            {
              value: 90,
              label: "90°",
            },
            {
              value: 180,
              label: "180°",
            },
            {
              value: rotationParams.maxRotation,
              label: `${rotationParams.maxRotation}°`,
            },
          ]}
          onChangeMod={(e) => {
            entityRotation.setter({
              ...entityRotation.getter,
              x: +(e.target as HTMLInputElement).value,
            });
          }}
        />
      </Stack>
      
      <br></br>
      <Box className="grid grid-cols-2 gap-2">
        <Button
          className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover"
          sx={{
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
          variant="contained"
          onClick={() => {
            handleBuildOne();
          }}
        >
          + Add
        </Button>
        <Button
          className="bg-ind-dark text-ind-light rounded-full p-6 hover:bg-ind-hover"
          sx={{
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
          variant="contained"
          onClick={() => {
            if (concentrics.getter.length > 1) {
              concentrics.setter(() =>
                concentrics.getter.length > 1
                  ? concentrics.getter.filter(
                      (_, i) => i !== concentrics.getter.length - 1
                    )
                  : []
              );
            }
          }}
        >
          - Remove
        </Button>
      </Box>
      <br></br>
      <ActionsPanel />
    </MenuBackdrop>
  );
}

export default CirclePatternsMenu;
