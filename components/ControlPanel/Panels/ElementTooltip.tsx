import React, { useState, useEffect } from "react";
import { useElementTooltip } from "../Providers/ElementTooltipProvider";
import { useMouse } from "rooks";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const ElementTooltip = () => {
  const tooltip = useElementTooltip();
  const { x, y } = useMouse();
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: x, y: y });
  const [canDisplay, setCanDisplay] = useState(false);
  useEffect(() => {
    setMouseCoordinates({ x: x, y: y });
    setCanDisplay(tooltip.isShown.isShown);
  }, [tooltip.isShown.isShown]);

  return (
    <div
      style={{
        display: canDisplay ? "block" : "none",
        position: "absolute",
        backgroundColor: "#222",
        borderRadius: "5px",
        padding: "1em 1em 1em 1em",
        transform: `translate(${mouseCoordinates.x! - 100}px,${
          mouseCoordinates.y! - 100
        }px)`,

        color: "#fff",
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          style={{
            width: "2em",
            height: "3em",
            backgroundColor: tooltip.colors[0],
            borderRadius: "64px 0 0 64px",
          }}
          onClick={() => {}}
        ></Button>
        <Button
          style={{
            width: "2em",
            height: "3em",
            backgroundColor: tooltip.colors[1],
            borderRadius: "0 64px 64px 0",
          }}
        ></Button>
        <Button
          onClick={() =>
            tooltip.show({
              ...tooltip.isShown,
              isShown: !tooltip.isShown.isShown,
            })
          }
        >
          <CloseRoundedIcon></CloseRoundedIcon>
        </Button>
      </div>
    </div>
  );
};

export default ElementTooltip;
