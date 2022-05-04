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
          <SVGtoPNG
            svgStrings={
              svgStrings.length > 1 ? svgStrings.join() : svgStrings[0]
            }
          ></SVGtoPNG>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleClose}>Download</Button>
      </DialogActions>
    </Dialog>
  );
}
