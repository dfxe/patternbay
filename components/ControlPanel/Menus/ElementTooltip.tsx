import React, { useState, useEffect } from "react";
import { useElementTooltip } from "../Providers/ElementTooltipProvider";
import { useMouse } from "rooks";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { keyframes, styled } from "@mui/material/styles";
const borderAnim = keyframes`
  0% {
    
    border: 2px #222 solid;
  }

  100% {

    border: 2px #6068d2 solid;

  }
`;
const BayButton = styled(Button)({
  "&:hover, &:focus": {
    animation: `${borderAnim} 0.2s ease forwards`,
  },
  "&:blur": {
    animation: `${borderAnim} 0.2s ease backwards`,
  },
});

const CloseButton = styled(Button)({
  "&:hover": {
    animation: `${borderAnim} 0.2s ease forwards`,
  },
  "&:blur": {
    animation: `${borderAnim} 0.2s ease backwards`,
  },
});

const ElementTooltip = () => {
  const tooltip = useElementTooltip();
  const { x, y } = useMouse();
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: x, y: y });
  const [canDisplay, setCanDisplay] = useState(false);
  const [whichColor, setWhichColor] = useState(0);
  const colorButtonOneRef = React.useRef(null);
  const colorButtonTwoRef = React.useRef(null);

  useEffect(() => {
    setMouseCoordinates({ x: x, y: y });
    setCanDisplay(true);
    if (colorButtonOneRef.current) {
      if (whichColor === 0) {
        //@ts-ignore
        colorButtonOneRef?.current?.focus();
      } else {
        //@ts-ignore
        colorButtonTwoRef?.current?.focus();
      }
    }
  }, [tooltip.elementToShow.elementId]);
  //TODO add hover animation on tooltip buttons
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
        <BayButton
          ref={colorButtonOneRef}
          style={{
            width: "2em",
            height: "3em",
            backgroundColor: tooltip.colors[0],
            borderRadius: "64px 0 0 64px",
          }}
          onClick={() => {
            tooltip.setSelected(true);
            setWhichColor(0);
          }}
        ></BayButton>
        <BayButton
          ref={colorButtonTwoRef}
          style={{
            width: "2em",
            height: "3em",
            backgroundColor: tooltip.colors[1],
            borderRadius: "0 64px 64px 0",
          }}
          onClick={() => {
            tooltip.setSelected(false);
            setWhichColor(1);
          }}
        ></BayButton>
        <CloseButton
          sx={{ borderRadius: "20px" }}
          onClick={() => {
            tooltip.show({
              ...tooltip.elementToShow,
              isShown: !tooltip.elementToShow.isShown,
            });
            setCanDisplay(false);
          }}
        >
          <CloseRoundedIcon style={{ color: "#6068d2" }} />
        </CloseButton>
      </div>
    </div>
  );
};

export default ElementTooltip;
