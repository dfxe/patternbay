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
import InputColor from "../../InputColor/InputColor";
import DefaultMarkedMUISlider from "../../DStyles/DefaultMarkedMUISlider";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import ActionsPanel from "./ActionsPanel";
import { useColors } from "../Providers/ColorProvider";
import MenuBackdrop from "./MenuBackdrop";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import RoundedCornerSharpIcon from "@mui/icons-material/RoundedCornerSharp";
import Tooltip from "@mui/material/Tooltip";
import PhotoSizeSelectLargeRoundedIcon from "@mui/icons-material/PhotoSizeSelectLargeRounded";
import ExpandRoundedIcon from "@mui/icons-material/ExpandRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import Divider from "@mui/material/Divider";
import SizeSlider from "../../ActionSliders/SizeSlider";
import ExpandSlider from "../../ActionSliders/ExpandSlider";
import RotationSlider from "../../ActionSliders/RotationSlider";

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
  const boundaryParams = {
    sizeParams: {
      default: 1,
      min: 1,
      max: 3,
      step: 0.5,
    },
    radiusParams: {
      default: 0.6,
      min: 0.2,
      max: 1.4,
      step: 0.1,
    },
    rotationParams: {
      default: 1,
      min: 0,
      max: 260,
      step: 5,
    },
    shapeParams: {
      default: 15,
      min: 0,
      max: 15,
      step: 1,
    },
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
          whiteSpace: "nowrap",
          color: nightMode.getter ? "#eae3f1" : "#292d36",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        <WorkspacesRoundedIcon
          sx={{ color: nightMode.getter ? "#eae3f1" : "#292d36" }}
        />
        &nbsp; Concentrics Bay
      </Typography>
      <br></br>
      {/* TODO fix undo redo */}
      {/* <UndoRedo></UndoRedo> */}
      <SizeSlider
        params={boundaryParams.sizeParams}
        setSize={entitySize.setter}
        nightModeSwitch={nightMode.getter}
      />
      <ExpandSlider
        params={boundaryParams.radiusParams}
        setExpand={entityRadius.setter}
        nightModeSwitch={nightMode.getter}
      />
      <RotationSlider
        params={boundaryParams.rotationParams}
        setRotation={(rotationNum) => {
          entityRotation.setter({
            ...entityRotation.getter,
            x: rotationNum,
          });
        }}
        markPoints={[
          {
            value: boundaryParams.rotationParams.min,
            label: `${boundaryParams.rotationParams.min}°`,
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
            value: boundaryParams.rotationParams.max,
            label: `${boundaryParams.rotationParams.max}°`,
          },
        ]}
        nightModeSwitch={nightMode.getter}
      />

      <InputColor
        colorValue={colors.getter}
        setColorValue={colors.setter}
        inputLabel={"shapes"}
      />
      <br></br>
      <Divider />
      <br></br>
      <Box className="grid grid-cols-2 gap-2">
        <Button
          sx={{
            backgroundColor: "#6068d2",
            color: "#fff",
            borderRadius: "64px",
            padding: "2em",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            "&:hover": {
              backgroundColor: "#6f5caa",
            },
            "&:not(:hover)": {
              backgroundColor: "#6068df",
            },
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
        <Button
          sx={{
            backgroundColor: "#6068d2",
            color: "#fff",
            borderRadius: "64px",
            padding: "2em",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            "&:hover": {
              backgroundColor: "#6f5caa",
            },
            "&:not(:hover)": {
              backgroundColor: "#6068df",
            },
          }}
          variant="contained"
          onClick={() => {
            handleBuildOne();
          }}
        >
          + Add
        </Button>
      </Box>
      <br></br>
      <ActionsPanel />
    </MenuBackdrop>
  );
}

export default CirclePatternsMenu;
