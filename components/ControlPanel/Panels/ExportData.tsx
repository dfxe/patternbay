import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import prettyFormatThis from "pretty-format";
import Box from "@mui/material/Box";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
Alert.displayName = "Alert";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "100%",
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
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);
Transition.displayName = "Transition";

type Props = {
  canDisplay: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
};
const ExportData = ({ canDisplay, open, setOpen }: Props) => {
  const [displayError, setDisplayError] = React.useState(false);
  const [exportToData, setExportTo] = React.useState({
    html: "",
    css: "",
    jsx: "",
    json: "",
  });
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [alignment, setAlignment] = React.useState("HTML");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //@ts-ignore
  const handleChangeInExportTextField = (event) => {
    setExportTo(event.target.value);
  };

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(
      alignment === "CSS"
        ? exportToData.css.replace(/}#/g, "}\n#").replace(/\n/g, "")
        : alignment === "JSON"
        ? exportToData.json.replace(/\n/g, "")
        : alignment === "JSX"
        ? exportToData.jsx.replace(/\n/g, "")
        : exportToData.html
    );
  };
  // needs to execute once, on set open

  const getExport = () => {
    // TODO transforms not cutting through
    if (typeof document !== "undefined") {
      const items = document.getElementsByClassName(
        "one-of-the-entitiez-to-render"
      ) as HTMLCollectionOf<HTMLElement>;
      if (items !== null && typeof items !== "undefined" && items.length > 0) {
        let dataToExportJSON = "c-parent=[\n";
        let dataToExportCSS = `/*Parent can be have a position of 'absolute'
           to reposition the generated pattern*/\n#c-parent{position:absolute;\ntransform-origin: ${
             (items[0].parentElement as HTMLElement).style.transformOrigin
           };\n
          transform: ${
            (items[0].parentElement as HTMLElement).style.transform
          }}\n`;
        let dataToExportHTML = "<div id='c-parent'>\n";
        let dataToExportJSX = `<div style={{position:'absolute',transformOrigin: '${
          (items[0].parentElement as HTMLElement).style.transformOrigin
        }',
       transform: '${
         (items[0].parentElement as HTMLElement).style.transform
       }'}}>\n`;
        const idsForCSS = new Array(items.length)
          .fill("")
          .map((item, i) => `c${i}-outof-${items.length - 1}`);
        let countr = 0;

        //@ts-ignore
        for (const item of items) {
          countr++;
          dataToExportJSON += `${idsForCSS[items.length - countr]}: {
            parentProperty: {
              position: ${(item.parentElement as HTMLElement).style.position},
              transformOrigin: ${
                (item.parentElement as HTMLElement).style.transformOrigin
              },
              transform: ${(item.parentElement as HTMLElement).style.transform},
            },
            childProperty: {
              position: ${item.style.position}, 
              transformOrigin: ${item.style.transformOrigin},
              transform: ${item.style.transform},
              opacity: ${item.style.opacity},
              width: ${item.style.width},
              height: ${item.style.height},
              top: ${item.style.top},
              left: ${item.style.left},
              backgroundColor: ${item.style.backgroundColor},
              borderRadius: ${item.style.borderRadius},
              boxShadow: ${item.style.boxShadow},
              zIndex: ${item.style.zIndex},
            },
          },\n`;
          dataToExportJSX += `<div style={{
              position: '${(item.parentElement as HTMLElement).style.position}',
              transformOrigin: '${
                (item.parentElement as HTMLElement).style.transformOrigin
              }',
              transform: '${
                (item.parentElement as HTMLElement).style.transform
              }',
              opacity: ${item.style.opacity},
              borderRadius: '${item.style.borderRadius}',
              width: '${item.style.width}',
              height: '${item.style.height}',
              backgroundColor: '${item.style.backgroundColor}',
              boxShadow: '${item.style.boxShadow}',
              zIndex: '${item.style.zIndex}',
              top: '${item.style.top}',
              left: '${item.style.left}',
            }}>
              ${item.innerHTML}
            </div>`;

          dataToExportCSS += `#${idsForCSS[items.length - countr]} {
              position: ${item.style.position};
              
              opacity: ${item.style.opacity};
              border-radius: ${item.style.borderRadius};
              width: ${item.style.width};
              height: ${item.style.height};
              background-color: ${item.style.backgroundColor};
              box-shadow: ${item.style.boxShadow};
              z-index: ${item.style.zIndex};
              top: ${item.style.top};
              left: ${item.style.left};
            }`;

          dataToExportHTML += `<div id='${
            idsForCSS[items.length - countr]
          }'></div>`;
        }

        return {
          json: prettyFormatThis(`${dataToExportJSON}]`).slice(1, -1),
          css: prettyFormatThis(dataToExportCSS).slice(1, -1),
          jsx: prettyFormatThis(`${dataToExportJSX}\n</div>`).slice(1, -1),
          html: prettyFormatThis(`${dataToExportHTML}\n</div>`).slice(1, -1),
        };
      }
      setDisplayError(true);
      return {
        html: "",
        css: "",
        jsx: "",
        json: "",
      };
    }
    return {
      html: "",
      css: "",
      jsx: "",
      json: "",
    };
  };
  React.useEffect(() => {
    if (open) {
      const preparedData = getExport();
      preparedData.json.length > 0
        ? setExportTo(preparedData)
        : setExportTo({
            html: "",

            css: "",

            jsx: "",

            json: "",
          });
    }
  }, [open]);
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={open && canDisplay}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Copy what you want to export
        </BootstrapDialogTitle>
        <DialogContent sx={{ overflowX: "hidden" }}>
          <TextField
            id="standard-multiline-flexible"
            label={`${alignment} Code`}
            multiline
            sx={{
              width: "100%",
              backgroundColor: "#eae3f1",
              paddingLeft: "1em",
            }}
            maxRows={20}
            value={
              exportToData.json.length > 0
                ? alignment === "CSS"
                  ? exportToData.css.replace(/}#/g, "}\n#")
                  : alignment === "JSON"
                  ? exportToData.json.replace(/Array\s\[/g, "")
                  : alignment === "HTML"
                  ? exportToData.html.replace(/<\/div>/g, "</div>\n")
                  : exportToData.jsx
                : "Add a shape by pressing the '+Add' button in the Actions menu"
            }
            onChange={handleChangeInExportTextField}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            sx={{ marginRight: "auto" }}
          >
            <ToggleButton value="HTML">HTML</ToggleButton>
            <ToggleButton value="CSS">CSS</ToggleButton>
            <ToggleButton value="JSX">JSX</ToggleButton>
            <ToggleButton value="JSON">JSON</ToggleButton>
          </ToggleButtonGroup>
          <Button
            autoFocus
            variant="contained"
            sx={{ backgroundColor: "#6650a4", borderRadius: "30px" }}
            onClick={() => {
              handleCopy();
              handleClickSnackbar();
            }}
          >
            Copy to clipboard
          </Button>
          <Button
            aria-label="Done Export"
            sx={{
              backgroundColor: "#f7c9b6",
              color: "black",
              borderRadius: "30px",
            }}
            variant="contained"
            autoFocus
            onClick={handleClose}
          >
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Copied to clipboard!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default ExportData;
