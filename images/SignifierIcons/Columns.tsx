import * as React from "react";
import { SVGProps } from "react";

const Columns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 -1 126 64"
    width="1.5em"
    height="1.5em"
    {...props}
  >
    <defs>
      <style>
        {".cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}"}
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Rows_-_3_Columns" data-name="Rows - 3 Columns">
        <g id="Rows_-_3_Columns-2" data-name="Rows - 3 Columns">
          <rect
            x={1}
            y={1}
            width={122}
            height={60}
            rx={1.98}
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              strokeDasharray: "0 4.01",
              fill: "none",
              stroke: "#000",
            }}
          />
          <rect
            className="cls-2"
            x={8.5}
            y={8}
            width={31}
            height={46}
            rx={1.78}
          />
          <rect
            className="cls-2"
            x={47}
            y={8}
            width={31}
            height={46}
            rx={1.78}
          />
          <rect
            className="cls-2"
            x={85}
            y={8}
            width={31}
            height={46}
            rx={1.78}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Columns;
