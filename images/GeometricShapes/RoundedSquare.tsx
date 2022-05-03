import * as React from 'react';
import { SVGProps } from 'react';

const RoundedSquare = (props: SVGProps<SVGSVGElement>) => (
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
      <g id="_242025288">
        <path id="_242023752" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_242024640"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        d="M487.999 255.998h1072c63.833 0 121.841 26.092 163.876 68.125C1765.908 366.157 1792 424.166 1792 487.999v1072c0 63.833-26.092 121.84-68.125 163.876-42.034 42.033-100.043 68.125-163.876 68.125h-1072c-63.833 0-121.841-26.092-163.876-68.125-42.033-42.034-68.125-100.043-68.125-163.876v-1072c0-63.833 26.092-121.841 68.125-163.876 42.034-42.033 100.043-68.125 163.876-68.125z"
        style={{
          fill: props.color,
          fillRule: 'nonzero',
        }}
      />
    </g>
  </svg>
);

export default RoundedSquare;
