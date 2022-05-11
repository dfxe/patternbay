import React, { useState, useEffect } from "react";
import { useElementTooltip } from "../../components/ControlPanel/Providers/ElementTooltipProvider";
import { nanoid } from "nanoid";
type Props = {
  children: React.ReactElement;
  color: string;
  rotation: number;
  canClick: boolean;
};
const ShapeAdapter = ({ children, color, rotation, canClick }: Props) => {
  const elementTooltip = useElementTooltip();
  const [clicked, setClicked] = useState(false);
  const [fillColor, setFillColor] = useState(color || "#6068d2");
  const [thisID, setThisID] = useState(nanoid());
  const [isClickable, setIsClickable] = useState(canClick);
  useEffect(() => {
    if (elementTooltip.elementToShow.elementId === thisID) {
      setFillColor(() =>
        elementTooltip.selected
          ? elementTooltip.colors[0]
          : elementTooltip.colors[1]
      );
    } else {
      setClicked(false);
    }
  }, [elementTooltip.selected, elementTooltip.elementToShow.elementId]);
  return (
    <div
      style={{
        border: `2px dashed ${clicked ? "#6068d2" : "#22220000"}`,
        cursor: "pointer",
      }}
      onClick={() => {
        if (isClickable) {
          setClicked(!clicked);
          elementTooltip.show({
            isShown: true,
            elementId: thisID,
          });
        }
      }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          color: fillColor,
          rotate: rotation,
        });
      })}
    </div>
  );
};

export default ShapeAdapter;
