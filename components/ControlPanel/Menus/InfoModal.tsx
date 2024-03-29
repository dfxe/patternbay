import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
//@ts-ignore
import Obfuscate from "react-obfuscate";
import packageJson from "../../../package.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "30px",
    padding: "1em 1em 1em 1em",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);
Transition.displayName = "Transition";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            borderRadius: "30px",
            right: 24,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          x
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
const WhatIsThis = ({ open, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };
  const firstTime: boolean = localStorage.getItem("firstTime") === null;
  useEffect(() => {
    setOpen(firstTime);
    localStorage.setItem("firstTime", "false");
  }, []);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      TransitionComponent={Transition}
      open={open}
      sx={{ borderRadius: "64px" }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        //@ts-ignore
        variant="h3"
      >
        Pattern Bay
        <Typography variant="body1">{packageJson.version}a</Typography>
      </BootstrapDialogTitle>

      <DialogContent>
        <Typography gutterBottom>
          Disclaimer: This is a work in progress. It is not meant to be used for
          anything other than learning.
        </Typography>
        <Typography gutterBottom>
          This is a web application that allows you to create and share patterns
          with others.
        </Typography>
        <Typography>
          The key is stored in the browser&apos;s local storage and is never
          sent to the server.
        </Typography>
        <Typography>
          This tool is meant for web devs looking to make their portfolios pop.
        </Typography>
        <Typography gutterBottom variant="h5">
          What should I do with this?
        </Typography>
        <Typography gutterBottom>
          You could arrange elements on your page circularly, or just have a
          nice looking pattern in the background.
        </Typography>
        <Typography gutterBottom variant="h5">
          How do I export?
        </Typography>
        <Typography gutterBottom>
          After you&apos;re done, click <ExitToAppRoundedIcon /> in the sidebar.
        </Typography>
        <br />
        <Typography gutterBottom>
          Have any ideas to improve this? Leave a GitHub issue.
        </Typography>
        <Typography gutterBottom>
          {/* TODO add tips, such as click the icons parallel to the sliders to see what they do */}
          Click the icons in the sidebar to get started.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          variant="contained"
          sx={{
            backgroundColor: "#6650a4",
            color: "white",
            borderRadius: "64px",
            "&:hover": {
              backgroundColor: "#6f5caa",
            },
            "&:not(:hover)": {
              backgroundColor: "#6068df",
            },
          }}
          onClick={handleClose}
        >
          Let&apos;s build
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};
export default WhatIsThis;
