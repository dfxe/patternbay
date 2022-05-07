import * as React from "react";
import { SVGProps } from "react";

const SemiCircle = (props: SVGProps<SVGSVGElement>) => {
  const rotate = props.rotate || 0;
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
        width: "100%",
        height: "100%",
        transform: `rotate(${rotate}deg)`,
      }}
      viewBox="256 624.64 1536 798.72"
      {...props}
    >
      <defs>
        <style>{".fil0{fill:none}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_388239080">
          <path id="_388236560" className="fil0" d="M0 0h2048v2048H0z" />
          <path
            id="_388240064"
            className="fil0"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
        <path
          d="m286.72 624.761 737.28-.001v-.12h768v30.72c0 212.073-85.961 404.074-224.945 543.056-138.982 138.983-330.983 224.945-543.056 224.945-212.073 0-404.074-85.962-543.056-224.945-138.982-138.982-224.945-330.982-224.945-543.055v-30.599l30.721-.001z"
          style={{
            fill: props.color,
            fillRule: "nonzero",
          }}
        />
      </g>
    </svg>
  );
};

export default SemiCircle;
