import { SVGProps } from "react";

const CurveLine = (props: SVGProps<SVGSVGElement>) => {
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
      viewBox="256 256 1536.01 1536"
    >
      <defs>
        <style>{".fil0{fill:none}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_388201248">
          <path id="_388201992" className="fil0" d="M0 0h2048v2048H0z" />
          <path
            id="_388202664"
            className="fil0"
            d="M255.999 255.999h1536v1536h-1536z"
          />
        </g>
        <path
          d="M1056 1269.34c0 128.522 38.707 244.393 101.284 327.828 60.627 80.837 143.659 130.838 234.715 130.838 91.058 0 174.088-50 234.716-130.838 62.577-83.436 101.284-199.306 101.284-327.828 0-264.016-79.897-502.552-209.069-674.783-127.223-169.631-302.253-274.552-494.931-274.552S656.291 424.926 529.067 594.557c-129.173 172.23-209.069 410.766-209.069 674.783h-64.002c0-277.96 84.865-530.095 222.071-713.034C617.223 370.765 810.198 256.003 1024 256.003c213.803 0 406.777 114.762 545.931 300.303 137.205 182.941 222.071 435.075 222.071 713.034 0 142.466-43.674 271.932-114.286 366.079-72.56 96.746-173.534 156.588-285.716 156.588-112.18 0-213.155-59.84-285.715-156.588-70.61-94.147-114.286-223.614-114.286-366.079H1056z"
          style={{
            fill: props.color,
            fillRule: "nonzero",
          }}
        />
      </g>
    </svg>
  );
};

export default CurveLine;
