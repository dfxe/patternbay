import * as React from "react";
import { SVGProps } from "react";

const Oval = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="256 561.32 1536 925.37"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:none}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_244475512">
        <path id="_244474264" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_244475488"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        d="M1024 561.316c208.863 0 398.615 49.926 536.556 130.645C1703.553 775.639 1792 892.932 1792 1024c0 131.068-88.447 248.361-231.444 332.039-137.941 80.719-327.694 130.645-536.556 130.645-208.863 0-398.615-49.926-536.556-130.645C344.447 1272.361 256 1155.068 256 1024c0-131.068 88.447-248.361 231.444-332.039C625.385 611.242 815.138 561.316 1024 561.316z"
        style={{
          fill: props.color,
          fillRule: "nonzero",
        }}
      />
    </g>
  </svg>
);

export default Oval;
