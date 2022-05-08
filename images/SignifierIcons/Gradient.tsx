import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "auto",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0.85 0.85 5.13 5.13"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>
        {".fil0{fill:none}.fil2,.fil3{fill:#66bb6a}.fil3{fill-rule:nonzero}"}
      </style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_372413368">
        <path id="_372413440" className="fil0" d="M0 0h6.827v6.827H0z" />
        <path id="_372413776" className="fil0" d="M.853.853h5.12v5.12H.853z" />
      </g>
      <path
        d="M1.126.853h4.575a.272.272 0 0 1 .272.273v4.575a.272.272 0 0 1-.272.272H1.126a.272.272 0 0 1-.273-.272V1.126a.272.272 0 0 1 .273-.273zm4.575.214H1.126a.06.06 0 0 0-.042.017.06.06 0 0 0-.017.042v4.575a.06.06 0 0 0 .017.041.06.06 0 0 0 .042.018h4.575a.06.06 0 0 0 .041-.018.06.06 0 0 0 .018-.041V1.126a.06.06 0 0 0-.018-.042.06.06 0 0 0-.041-.017z"
        style={{
          fill: "#212121",
          fillRule: "nonzero",
        }}
      />
      <g id="_372412840">
        <path
          id="_372413344"
          className="fil2"
          d="M1.173 4.16h.214v.32h-.214z"
        />
        <path id="_372413632" className="fil2" d="M1.796 4.16h.32v.32h-.32z" />
        <path id="_372413584" className="fil2" d="M2.524 4.16h.32v.32h-.32z" />
        <path id="_372412552" className="fil2" d="M3.253 4.16h.32v.32h-.32z" />
        <path id="_372413200" className="fil2" d="M3.982 4.16h.32v.32h-.32z" />
        <path id="_372413080" className="fil2" d="M4.711 4.16h.32v.32h-.32z" />
        <path id="_372413176" className="fil2" d="M5.44 4.16h.213v.32H5.44z" />
        <path
          id="_372412936"
          className="fil3"
          d="M1.173 4.8h4.48v.213h-4.48z"
        />
        <path
          id="_372412960"
          className="fil3"
          d="M1.173 5.333h4.48v.214h-4.48z"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
