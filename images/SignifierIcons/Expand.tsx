import * as React from "react";
import { SVGProps } from "react";

const Expand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2 2 20 20"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M20 7V5.414L13.414 12 20 18.586V17a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586L12 13.414 5.414 20H7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1.586L10.586 12 4 5.414V7a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5.414L12 10.586 18.586 4H17a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0z"
      style={{
        fill: "#1c1b1e",
      }}
    />
  </svg>
);

export default Expand;
