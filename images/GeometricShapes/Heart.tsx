import * as React from 'react';
import { SVGProps } from 'react';

const Heart = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="255.27 309.84 1537.46 1439.71"
    {...props}
  >
    <defs>
      <style>{'.fil0{fill:none}'}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_244476160">
        <path id="_244477336" className="fil0" d="M0 0h2048v2048H0z" />
        <path
          id="_244476616"
          className="fil0"
          d="M255.999 255.999h1536v1536h-1536z"
        />
      </g>
      <path
        d="M893.353 380.171c49.898 36.961 91.245 87.901 130.647 153.019 39.402-65.119 80.75-116.058 130.648-153.019 63.294-46.885 138.397-70.328 237.716-70.328 109.873 0 209.632 41.5 282.058 108.561 73.082 67.668 118.306 161.201 118.306 264.516 0 178.918-94.993 355.835-237.479 531.743-139.291 171.966-324.459 343.418-509.625 514.867l-21.625 20.022-21.625-20.022c-185.166-171.449-370.334-342.9-509.625-514.867C350.263 1038.754 255.27 861.838 255.27 682.92c0-103.316 45.225-196.849 118.306-264.516 72.427-67.062 172.185-108.56 282.058-108.56 99.32 0 174.423 23.442 237.717 70.327z"
        style={{
          fill: props.color,
          fillRule: 'nonzero',
        }}
      />
    </g>
  </svg>
);

export default Heart;
