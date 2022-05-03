//@ts-nocheck
//TODO fix types - not important now, fix when it is
import Button from "@mui/material/Button";
import React from "react";

type Props = {
  svgString: string[];
};
export default function SVGtoPNG({ svgString }: Props) {
  const svg: string = svgString[0];

  const svgUrlToPng = (svgUrl: string, callback) => {
    const svgImage = document.createElement("img");

    document.body.appendChild(svgImage);
    svgImage.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = svgImage.clientWidth;
      canvas.height = svgImage.clientHeight;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.drawImage(svgImage, 0, 0);
      const imgData = canvas.toDataURL("image/png");
      callback(imgData);
    };
    svgImage.src = svgUrl;
  };
  const getSvgUrl = (svg: string) => {
    return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  };

  //FIXME: for this to work, need to add an id to the parent element and access it's child list.
  const svgToPng = () => {
    const url: string = getSvgUrl(svg);
    svgUrlToPng(url, (imgData) => {
      callback(imgData);
      URL.revokeObjectURL(url);
    });
  };
  return (
    <Button
      onClick={() =>
        svgToPng(svg, (imgData) => {
          const pngImage = document.createElement("img");
          // This needs be nested in <a id="download_image" href="" download="image.png"></a>
          document.body.appendChild(pngImage);
          pngImage.src = imgData;
        })
      }
    >
      Export PNG
    </Button>
  );
}
