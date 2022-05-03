import * as React from 'react';
import { SVGProps } from 'react';

const BlobSVGMenuSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill={props.color}
      d="M157.8 65.7c12.8 23 15.7 50.7 4.4 66.9-11.2 16.1-36.7 20.6-60.9 19.9-24.2-.8-47.1-6.8-53-19.8-5.9-13 5.3-33.1 16.7-55.3 11.5-22.2 23.2-46.6 40.4-49.7 17.1-3.1 39.7 15.1 52.4 38Z"
    />
  </svg>
);

export default BlobSVGMenuSidebar;
