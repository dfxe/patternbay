import React, { useState, ReactElement, useEffect } from "react";
import Typography from "@mui/material/Typography";

import { useWindowSize } from "rooks";
import { nanoid } from "nanoid";
import { useColors } from "../ControlPanel/Providers/ColorProvider";
import { useShowNumbers } from "../ControlPanel/Providers/NumberProvider";
import { useSize } from "../ControlPanel/Providers/SizeProvider";
import { useOutline } from "../ControlPanel/Providers/ShadowProvider";
import { useRadius } from "../ControlPanel/Providers/RadiusProvider";
import { useShape } from "../ControlPanel/Providers/ShapeProvider";

import { useRotation } from "../ControlPanel/Providers/RotationProvider";

type Props = {
  concentricsNumber: number;
  entityNumber: number;
};

const CircleGenerator = ({ entityNumber, concentricsNumber }: Props) => {
  interface Vector2 {
    x: number;
    y: number;
  }
  const { innerWidth, innerHeight } = useWindowSize();
  let [offsetX, offsetY] = [innerWidth! * 0.3, 0];
  const newColor = useColors();
  const numero = useShowNumbers();
  const entitySize = useSize();
  const showShadow = useOutline();
  const entityRadius = useRadius();
  const entityRotation = useRotation();
  const entityShape = useShape();

  const [levels, setLevels] = useState([] as number[]);

  const Entity = (coords: Vector2, message: string): ReactElement => {
    return (
      <div
        key={nanoid()}
        className="one-of-the-entitiez-to-render"
        style={{
          //change this to relative to get a spiral
          position: "absolute",
          //TODO add a way to change the opacity of the entity, makes it look cool
          opacity: 1,
          borderRadius: entityShape.getter.toString() + "px",
          //margin 0 <second> this to keep element always center on scale++
          //the second needs to be decrementally changed so the circles are anchored
          //or left v.x - (ratio)
          width: entitySize.getter + "em",
          height: entitySize.getter + "em",
          backgroundColor: newColor.getter,
          boxShadow: showShadow.getter
            ? "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
            : "none",
          transformOrigin: "top left",
          zIndex: 3,

          //v.y * concentricsNumber * 0.05 to rotate z axis, could be dynamic for an animation
          top: coords.y,
          left: coords.x,
        }}
      >
        {numero.getter && (
          <Typography
            sx={{ margin: "0 auto", positon: "absolute", color: "white" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {message}
          </Typography>
        )}
      </div>
    );
  };

  const generateEntities = (radius: number, entityNumber: number) => {
    let circlesArr = [];
    const r = radius;
    const n = entityNumber;
    //this is the magic
    for (let i = 0; i < n; i++) {
      circlesArr.push(
        Entity(
          {
            x: offsetX + r * Math.sin((2 * Math.PI * i) / n),
            y: offsetY + r * Math.cos((2 * Math.PI * i) / n),
          },
          concentricsNumber.toLocaleString()
        )
      );
    }

    return circlesArr;
  };

  const fillConcentrics = () => {
    let arr = [];
    for (let i = 0; i < concentricsNumber; i++) {
      //here arr with number of entities
      arr.push(entityNumber);
    }
    return arr;
  };

  useEffect(() => {
    setLevels(() => fillConcentrics());
  }, [entityNumber]);

  return (
    <div
      style={{
        position: "absolute",
        transformOrigin: "center",
        transform: `rotate3d(1,0,0,${entityRotation.getter.x}deg)`,
      }}
    >
      {generateEntities(
        concentricsNumber * innerHeight! * 0.05 * entityRadius.getter,
        levels[levels.length - 1]
      )}
    </div>
  );
};

export default React.memo(CircleGenerator);
