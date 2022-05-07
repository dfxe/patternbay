import * as React from "react";
import { SVGProps } from "react";

const Diamond = (props: SVGProps<SVGSVGElement>) => (
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
    }}
    viewBox="256 342.91 1536 1330.33"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:none}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_244476208">
        <path id="_244477552" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_244477456"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        d="M1050.31 311.675c71.87 152.675 163.125 286.357 274.064 400.741 111.04 114.487 241.826 209.791 392.657 285.61l51.992 26.136-51.992 25.925c-148.283 73.94-278.099 167.796-389.146 281.884-111.184 114.227-203.805 248.907-277.575 404.353L1023.889 1792l-26.209-55.676c-71.869-152.675-163.125-286.357-274.064-400.741-111.04-114.487-241.826-209.791-392.657-285.61l-51.992-26.136 51.992-25.925c148.283-73.94 278.099-167.796 389.146-281.884C831.289 601.801 923.91 467.121 997.68 311.675l26.42-55.676 26.21 55.676z"
        style={{
          fill: props.color,
          fillRule: "nonzero",
        }}
      />
    </g>
  </svg>
);

export default Diamond;
