import * as React from 'react';
import { SVGProps } from 'react';

const Square = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="256 256 1536 1536"
    {...props}
  >
    <defs>
      <style>{'.fil0{fill:none}'}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_242022840">
        <path id="_242023392" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_242024616"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        style={{
          fill: props.color,
          fillRule: 'nonzero',
        }}
        d="M287.999 255.998H1792V1792H255.998V255.998z"
      />
    </g>
  </svg>
);

export default Square;
