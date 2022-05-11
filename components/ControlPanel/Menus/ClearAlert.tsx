import React, { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  confirmDelete: () => void;
};

export default function ClearAlert({ open, setOpen, confirmDelete }: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ borderRadius: "64px" }}
      >
        <DialogTitle id="alert-dialog-title">Deletion attempt</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete all elements?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              confirmDelete();
            }}
            autoFocus
          >
            Delete all
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
