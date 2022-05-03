import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path d="M10.001 0h4v4h-4zM0 10h4v4H0zm10 10.002h4v4h-4zm10.002-10.001h4v4h-4zM16.245 4.93l2.827-2.83 2.83 2.827-2.828 2.83zM2.101 4.928 4.93 2.099l2.829 2.83L4.93 7.756zm0 14.143 2.828-2.829 2.83 2.828L4.93 21.9zm14.143.001 2.828-2.83 2.83 2.828-2.828 2.83z" />
  </svg>
);

export default SvgComponent;
