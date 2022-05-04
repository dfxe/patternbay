import React from "react";
import Button from "@mui/material/Button";

type Props = {
  svgStrings: string;
};
export default function SVGtoPNG({ svgStrings }: Props) {
  const svg: string = svgStrings;

  const svgUrlToPng = (svgUrl: string) => {
    const svgImage = document.createElement("img");

    document
      .getElementById("alert-dialog-slide-description-svgs-here")!
      .appendChild(svgImage);
    svgImage.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = svgImage.clientWidth;
      canvas.height = svgImage.clientHeight;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx!.drawImage(svgImage, 0, 0);
      const imgData = canvas.toDataURL("image/png");
      const pngImage = document.createElement("img");
      // This needs be nested in <a id="download_image" href="" download="image.png"></a>
      document
        .getElementById("alert-dialog-slide-description-svgs-here")!
        .appendChild(pngImage);
      pngImage.src = imgData;
    };
    svgImage.src = svgUrl;
  };
  const getSvgUrl = (svg: string) => {
    return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  };

  //FIXME: for this to work, need to add an id to the parent element and access it's child list.
  const svgToPng = (svgStringToPng: string) => {
    const url: string = getSvgUrl(svgStringToPng);
    svgUrlToPng(url);
  };

  return (
    <Button
      onClick={() => {
        svgToPng(svg);
      }}
    >
      Export PNG
    </Button>
  );
}
