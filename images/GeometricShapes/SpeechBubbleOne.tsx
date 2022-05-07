import * as React from "react";
import { SVGProps } from "react";

const SpeechBubbleOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "auto",
      fillRule: "evenodd",
      clipRule: "evenodd",
      width: "100%",
      height: "100%",
      transform: `rotate(${props.rotate || 0}deg)`,
    }}
    viewBox="256 258.71 1536 1530.57"
    {...props}
  >
    <defs>
      <style>{".fil1{fill:none}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <path
        d="M1571.22 1327.06c-132.418 110.082-314.681 180.751-517.719 187.107l-435.326 275.117-47.01-42.619 143.255-285.249c-129.174-46.685-240.474-122.67-320.941-217.412-86.426-101.76-137.48-225.095-137.48-357.27 0-174.677 86.978-332.427 227.57-446.24C622.295 328.187 813.416 258.71 1024.002 258.71s401.706 69.477 540.432 181.782c140.59 113.813 227.569 271.564 227.569 446.24 0 170.922-83.976 326.596-220.781 440.327z"
        style={{
          fill: props.color,
          fillRule: "nonzero",
        }}
      />
      <g id="_244790544">
        <path id="_244790880" className="fil1" d="M0 0h2048v2048H0z" />
        <path
          id="_244788216"
          className="fil1"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
    </g>
  </svg>
);

export default SpeechBubbleOne;
