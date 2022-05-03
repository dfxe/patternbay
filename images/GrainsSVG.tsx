import * as React from 'react';

type Props = {
  baseFrequency?: number,
};

const GrainsSVG = ({ baseFrequency }: Props) => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <filter id="a">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={baseFrequency}
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#a)" />
  </svg>
);

export default GrainsSVG;
