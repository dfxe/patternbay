import * as React from 'react';
import { SVGProps } from 'react';

const Triangle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'auto',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        transform: `rotate(${props.rotate || 0}deg)`,
      }}
      viewBox="256 342.91 1536 1330.33"
      {...props}
    >
      <defs>
        <style>{'.fil1{fill:none}'}</style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          style={{
            fill: props.color,
            fillRule: 'nonzero',
          }}
          d="M1049.77 387.546 1407.99 1008v.12l358.23 620.46 25.78 44.66H255.999l25.785-44.66 358.222-620.46v-.12L998.23 387.546l25.77-44.635z"
        />
        <g id="_244789824">
          <path id="_244791288" className="fil1" d="M0 0h2048v2048H0z" />
          <path
            id="_244787784"
            className="fil1"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Triangle;
