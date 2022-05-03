import * as React from 'react';
import { SVGProps } from 'react';

const Cloud = (props: SVGProps<SVGSVGElement>) => {
  const rotate = props.rotate || 0;
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
        transform: `rotate(${rotate}deg)`,
      }}
      viewBox="256 640.67 1536 766.67"
      {...props}
    >
      <defs>
        <style>{'.fil0{fill:none}'}</style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_242025912">
          <path id="_242023440" className="fil0" d="M0 0h2048v2048H0z" />
          <path
            id="_242024784"
            className="fil0"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
        <path
          d="M511.109 897.111c13.363 0 26.903 1.135 40.504 3.313 3.135.502 6.235 1.054 9.297 1.655 16.562-44.019 44.896-82.22 81.153-110.736 43.409-34.142 98.123-54.51 157.547-54.51 30.997 0 60.77 5.577 88.369 15.784a254.105 254.105 0 0 1 47.534 23.49c22.872-36.123 53.568-66.9 89.74-89.964 45.15-28.792 98.621-45.476 155.823-45.476 80.178 0 152.77 32.502 205.316 85.049 52.548 52.546 85.05 125.138 85.05 205.317 0 2.235-.03 4.494-.09 6.775a266.65 266.65 0 0 1 6.132-1.544c19.412-4.638 39.32-7.096 59.406-7.096 70.44 0 134.22 28.556 180.388 74.723 46.164 46.165 74.722 109.947 74.722 180.388v.496h-.12c-.155 71.837-29.57 127.875-77.05 166.064-46.026 37.018-108.648 56.494-177.215 56.494v-.12l-.725-.002-1057.84-2.29-4.32-.24c-62.222-8.903-117.212-40.266-156.484-85.619-38.784-44.784-62.25-103.117-62.25-166.84 0-70.44 28.557-134.22 74.723-180.389 46.167-46.166 109.947-74.722 180.388-74.722z"
          style={{
            fill: props.color,
            fillRule: 'nonzero',
          }}
        />
      </g>
    </svg>
  );
};

export default Cloud;
