import * as React from "react";
import { SVGProps } from "react";

const PieChart = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="272 272 1504 1504"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:none}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_244886224">
        <path id="_244886152" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_244888240"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        d="M1056 303.999v688h720v32c0 207.657-84.172 395.659-220.258 531.743C1419.658 1691.829 1231.656 1776 1024 1776c-207.656 0-395.658-84.173-531.742-220.26-136.087-136.083-220.26-324.085-220.26-531.741s84.173-395.658 220.26-531.742C628.342 356.17 816.344 271.998 1024 271.998h32V304z"
        style={{
          fill: props.color,
          fillRule: "nonzero",
        }}
      />
    </g>
  </svg>
);

export default PieChart;
