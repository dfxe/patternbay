import React from "react";
import { SVGProps } from "react";
import { useElementTooltip } from "../../components/ControlPanel/Providers/ElementTooltipProvider";

const HalfRect = (props: SVGProps<SVGSVGElement>) => {
  const elementTooltip = useElementTooltip();
  const [isOver, setIsOver] = React.useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "auto",
        fillRule: "evenodd",
        clipRule: "evenodd",
        transform: `rotate(${props.rotate || 0}deg)`,
        border: `1px dashed ${isOver ? "red" : "#22220000"}`,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onClick={() => {
        console.log("mouse over");
        elementTooltip.show(!elementTooltip.isShown);
      }}
      viewBox="256 256.01 1536 1536"
    >
      <defs>
        <style>{".fil1{fill:none}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          d="m256.132 1755.67.002-1466.27h-.13c0-18.442 14.95-33.391 33.391-33.391 9.326 0 17.757 3.824 23.815 9.987l1469.01 1469.01.002-.002c13.04 13.04 13.04 34.184 0 47.223-6.52 6.52-15.065 9.78-23.611 9.78H289.391c-18.442 0-33.392-14.95-33.392-33.392 0-.992.046-1.973.13-2.943z"
          style={{
            fill: props.color,
            fillRule: "nonzero",
          }}
        />
        <g id="_242467112">
          <path id="_242467280" className="fil1" d="M0 0h2048v2048H0z" />
          <path
            id="_242467184"
            className="fil1"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
      </g>
    </svg>
  );
};

export default HalfRect;
