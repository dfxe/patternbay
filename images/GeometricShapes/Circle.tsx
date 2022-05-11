import React from "react";
import { SVGProps } from "react";

const Circle = (props: SVGProps<SVGSVGElement>) => {
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
        transform: `rotate(${props.rotate || 0}deg)`,
      }}
      viewBox="256 256 1536 1536"
    >
      <defs>
        <style>{".fil1{fill:none}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          d="M1024 255.999c212.073 0 404.074 85.963 543.056 224.945 138.982 138.982 224.945 330.983 224.945 543.056 0 212.073-85.963 404.074-224.945 543.056-138.982 138.982-330.983 224.945-543.056 224.945-212.073 0-404.074-85.963-543.056-224.945C341.962 1428.074 255.999 1236.073 255.999 1024c0-212.073 85.963-404.074 224.945-543.056C619.926 341.962 811.927 255.999 1024 255.999z"
          style={{
            fill: props.color,
            fillRule: "nonzero",
          }}
        />
        <g id="_244790208">
          <path id="_244791168" className="fil1" d="M0 0h2048v2048H0z" />
          <path
            id="_244791192"
            className="fil1"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Circle;
