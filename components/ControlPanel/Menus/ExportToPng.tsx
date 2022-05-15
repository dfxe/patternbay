import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import SVGtoPNG from "../../SVGtoPNG/SVGtoPNG";
import { useTabSupervisor } from "../Providers/TabSupervisorProvider";
import { Canvg } from "canvg";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  canDisplay: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function ExportToPng({ canDisplay, open, setOpen }: Props) {
  const [svgStrings, setSvgStrings] = React.useState<string[]>([]);
  const tabSupervisor = useTabSupervisor();
  const handleClose = () => {
    setOpen(false);
  };

  const getSvgs = () => {
    //if the tab is blob, then we need to get the svg from the blob
    let getterId: string = "";
    if (!tabSupervisor.tabs.blobMenu.isHidden) {
      getterId = "the-blob-itself";
    } else if (!tabSupervisor.tabs.geometricPatternsMenu.isHidden) {
      getterId = "u-all-aesthetic-patterns-parent";
    } else if (!tabSupervisor.tabs.noiseGradientMenu.isHidden) {
      getterId = "the-noise-gradient-itself";
    }

    const svgElements = document
      .getElementById(getterId)
      ?.querySelectorAll("svg");

    if (svgElements) {
      const svgStrings: string[] = [];
      svgElements.forEach((svg) => {
        svgStrings.push(svg.outerHTML);
      });

      setSvgStrings(svgStrings);
    }
  };

  //TODO refactor everything in canvas Path2D then export to png
  const exportToPng = () => {
    const canvg = new Canvg(document.createElement("canvas"));
    canvg.setSize(500, 500);
    canvg.setViewBox(0, 0, 500, 500);
    canvg.setScale(1);
    canvg.setOptions({
      ignoreMouse: true,
      ignoreAnimation: true,
      ignoreDimensions: true,
      ignoreClear: true,
      offsetX: 0,
      offsetY: 0,
      scaleWidth: 500,
      scaleHeight: 500,
      renderCallback: function (canvas) {
        const png = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = png;
        a.download = "image.png";
        a.click();
      },
    });
  };
  const convgGetSvg = () => {
    let v = null;
    let getterId: string = "";
    if (!tabSupervisor.tabs.blobMenu.isHidden) {
      getterId = "the-blob-itself";
    } else if (!tabSupervisor.tabs.geometricPatternsMenu.isHidden) {
      getterId = "u-all-aesthetic-patterns-parent";
    } else if (!tabSupervisor.tabs.noiseGradientMenu.isHidden) {
      getterId = "the-noise-gradient-itself";
    }
    const canvas = document.querySelector(getterId);
    const ctx = canvas!.getContext("2d");
    //@ts-ignore
    v = Canvg!.from(ctx, "./svgs/1.svg");

    // Start SVG rendering with animations and mouse handling.
    //@ts-ignore
    v!.start();
  };

  useEffect(() => {
    getSvgs();
  }, [open]);

  return (
    <Dialog
      open={open && canDisplay}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description-svgs-here">
          <SVGtoPNG svgStrings={svgStrings[0]}></SVGtoPNG>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleClose}>Download</Button>
      </DialogActions>
    </Dialog>
  );
}
